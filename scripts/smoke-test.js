#!/usr/bin/env node
// Smoke test — verifies every public page returns HTTP 200.
// Usage:  node scripts/smoke-test.js [BASE_URL]
// Exit 0: all pages OK.  Exit 1: one or more failures (CI-friendly).

const fs = require('node:fs')
const path = require('node:path')

const BASE_URL = process.argv[2] ?? 'http://localhost:3000'

const STATIC_PAGES = ['/', '/projects', '/about', '/pricing', '/design-system']

// Project pages are read from lib/projects/ (one file per case study) so the list
// can never drift from the content. The first slug of each file is the FR one;
// EN reuses the same slug.
function readProjectSlugs() {
  const dir = path.join(__dirname, '..', 'lib', 'projects')
  const files = fs.readdirSync(dir).filter((f) => f.endsWith('.ts') && f !== 'index.ts')
  const slugs = files.map((f) => {
    const match = fs.readFileSync(path.join(dir, f), 'utf8').match(/slug:\s*'([^']+)'/)
    if (!match) {
      console.error(`✗ No slug found in lib/projects/${f}`)
      process.exit(1)
    }
    return match[1]
  })
  if (slugs.length === 0) {
    console.error('✗ No case study found in lib/projects/')
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
