#!/usr/bin/env node

import readline from 'node:readline'
import { exec } from 'node:child_process'
import { writeFileSync } from 'node:fs'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const ask = (question) =>
  new Promise((resolve) => rl.question(question, resolve))

;(async () => {
  // 📦 Package manager
  const pkgManagerInput = await ask(`
Which package manager do you use?

1. npm
2. yarn
3. pnpm

› `)

  let pkgManager

  switch (pkgManagerInput.trim()) {
    case '1':
      pkgManager = 'npm'
      break
    case '2':
      pkgManager = 'yarn'
      break
    case '3':
      pkgManager = 'pnpm'
      break
    default:
      console.error('❌ Invalid input. Please choose 1, 2 or 3.')
      rl.close()
      process.exit(1)
  }

  // 🧱 Project type
  const projectTypeInput = await ask(`
What type of project is this?

1. React
2. Node
3. Both
4. None

› `)

  const base = [
    'eslint@9.27.0',
    'prettier@3.5.3',
    'eslint-config-prettier@10.1.5',
    'eslint-plugin-prettier@5.4.1',
    'eslint-plugin-jsdoc@50.6.17',
    'eslint-plugin-unicorn@59.0.1',
  ]

  const react = [
    'eslint-config-airbnb@19.0.4',
    'eslint-plugin-import@2.31.0',
    'eslint-plugin-jsx-a11y@6.10.2',
    'eslint-plugin-react@7.37.5',
    'eslint-plugin-react-hooks@5.2.0',
  ]

  const node = ['eslint-plugin-node']

  const allDeps = [...base]
  let projectType = null

  switch (projectTypeInput.trim()) {
    case '1':
      allDeps.push(...react)
      projectType = 'react'
      break
    case '2':
      allDeps.push(...node)
      projectType = 'node'
      break
    case '3':
      allDeps.push(...react, ...node)
      projectType = 'react'
      break
    case '4':
      projectType = null
      break
    default:
      console.error('❌ Invalid input. Please choose 1, 2, 3 or 4.')
      rl.close()
      process.exit(1)
  }

  // 📝 Config file
  if (projectType) {
    try {
      writeFileSync(
        'eslint.cecilia.json',
        JSON.stringify({ projectType }, null, 2),
        'utf8',
      )
      console.log('✅ Created eslint.cecilia.json')
    } catch (err) {
      console.error('❌ Failed to write eslint.cecilia.json:', err)
      rl.close()
      process.exit(1)
    }
  }

  // 📦 Install command
  let installCommand

  switch (pkgManager) {
    case 'yarn':
      installCommand = `yarn add --dev ${allDeps.join(' ')}`
      break
    case 'pnpm':
      installCommand = `pnpm add -D ${allDeps.join(' ')}`
      break
    default:
      installCommand = `npm i -D ${allDeps.join(' ')}`
  }

  console.log('\n📦 Installing dependencies...\n')

  const install = exec(installCommand)
  install.stdout.pipe(process.stdout)
  install.stderr.pipe(process.stderr)

  install.on('close', () => {
    console.log('\n✅ Dependencies installed!')
    rl.close()
  })
})()
