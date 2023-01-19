#!/usr/bin/env node

import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { spawnSync } from 'node:child_process'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

spawnSync(
  `node ${dirname}/setup-dependencies.mjs && node ${dirname}/setup-eslintrc.mjs && node ${dirname}/setup-prettierrc.mjs && node ${dirname}/setup-lint.mjs`,
  [],
  {
    stdio: 'inherit',
    shell: true,
  },
)
console.log('Setup complete!')
