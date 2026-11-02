#!/usr/bin/env node
// Smoke test — verifies every public page returns HTTP 200.
// Usage:  node scripts/smoke-test.js [BASE_URL]
// Exit 0: all pages OK.  Exit 1: one or more failures (CI-friendly).

const fs = require('node:fs')
const path = require('node:path')

const BASE_URL = process.argv[2] ?? 'http://localhost:3000'

const STATIC_PAGES = ['/', '/projects', '/about', '/pricing', '/design-system']

// Project pages are read from lib/projects-data.ts so the list can never drift
// from the content. Only the FR block is scanned: EN reuses the same slugs.
function readProjectSlugs() {
  const file = path.join(__dirname, '..', 'lib', 'projects-data.ts')
  const source = fs.readFileSync(file, 'utf8')
  const frBlock = source.slice(0, source.indexOf('const PROJECTS_EN'))
  const slugs = [...frBlock.matchAll(/slug:\s*'([^']+)'/g)].map((m) => m[1])
  if (slugs.length === 0) {
    console.error('✗ No project slug found in lib/projects-data.ts')
    process.exit(1)
  }
  return slugs
}

const PAGES = [...STATIC_PAGES, ...readProjectSlugs().map((slug) => `/projects/${slug}`)]

const TIMEOUT_MS = 10_000

async function checkPage(pagePath) {
  const url = BASE_URL + pagePath
  const start = Date.now()
  try {
    const res = await fetch(url, {
      signal: AbortSignal.timeout(TIMEOUT_MS),
      // Follow redirects but treat redirect-as-success only at final destination
      redirect: 'follow',
    })
    const ms = Date.now() - start
    const ok = res.status === 200
    const icon = ok ? '✓' : '✗'
    const status = ok ? '' : ` (HTTP ${res.status})`
    console.log(`  ${icon} ${pagePath.padEnd(40)} ${ms}ms${status}`)
    return ok
  } catch (err) {
    const ms = Date.now() - start
    const reason = err.name === 'TimeoutError' ? `timeout after ${TIMEOUT_MS}ms` : err.message
    console.log(`  ✗ ${pagePath.padEnd(40)} ${ms}ms  ERROR: ${reason}`)
    return false
  }
}

async function main() {
  console.log(`\nSmoke test → ${BASE_URL}\n`)

  const results = await Promise.all(PAGES.map(checkPage))

  const passed = results.filter(Boolean).length
  const total  = results.length
  const allOk  = passed === total

  console.log(`\n${allOk ? '✓' : '✗'} ${passed}/${total} pages OK\n`)
  process.exit(allOk ? 0 : 1)
}

main()
