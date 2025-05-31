#!/usr/bin/env node

import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const indexPath = path.resolve(__dirname, '../eslint.config.js')

const { default: config } = await import(indexPath)

console.log('📦 ESLint final config (from eslint-config-cecilia):\n')
console.dir(config, { depth: null, colors: true })
