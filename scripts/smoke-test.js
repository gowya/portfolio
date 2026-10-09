#!/usr/bin/env node
// Smoke test — verifies every public page returns HTTP 200.
// Usage:  node scripts/smoke-test.js [BASE_URL]
// Exit 0: all pages OK.  Exit 1: one or more failures (CI-friendly).

const BASE_URL = process.argv[2] ?? 'http://localhost:3000'

const PAGES = [
  '/',
  '/projects',
  '/about',
  '/design-system',
  '/projects/parcours-upgrade',
  '/projects/trial-by-card',
  '/projects/csv-import',
  '/projects/campaign-manager',
  '/projects/ajout-de-lia',
  '/projects/design-system',
  '/projects/saas-recrutement',
  '/projects/vela',
]

const TIMEOUT_MS = 10_000

async function checkPage(path) {
  const url = BASE_URL + path
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
    console.log(`  ${icon} ${path.padEnd(40)} ${ms}ms${status}`)
    return ok
  } catch (err) {
    const ms = Date.now() - start
    const reason = err.name === 'TimeoutError' ? `timeout after ${TIMEOUT_MS}ms` : err.message
    console.log(`  ✗ ${path.padEnd(40)} ${ms}ms  ERROR: ${reason}`)
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
