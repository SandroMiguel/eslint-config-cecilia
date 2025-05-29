#!/usr/bin/env node

import readline from 'node:readline'
import { exec } from 'node:child_process'
import { writeFileSync } from 'node:fs'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

rl.question(
  'Install dependencies with npm(1) or yarn(2)? (1/2) ',
  (pkgManagerInput) => {
    rl.question(
      'What type of project is this?\nReact(1), Node(2), Both(3), or None(4)? (1/2/3/4) ',
      (projectTypeInput) => {
        const base = [
          'eslint@^8',
          'prettier',
          'eslint-config-prettier',
          'eslint-plugin-prettier',
          'eslint-plugin-jsdoc',
          'eslint-plugin-unicorn@^56.0.1',
        ]

        const react = [
          'eslint-config-airbnb',
          'eslint-plugin-import',
          'eslint-plugin-jsx-a11y',
          'eslint-plugin-react',
          'eslint-plugin-react-hooks',
        ]

        const node = ['eslint-plugin-node']

        const allDeps = [...base]

        let projectType = null

        switch (projectTypeInput) {
          case '1': {
            allDeps.push(...react)
            projectType = 'react'
            break
          }
          case '2': {
            allDeps.push(...node)
            projectType = 'node'
            break
          }
          case '3': {
            allDeps.push(...react, ...node)
            projectType = 'react'
            break
          }
          case '4': {
            projectType = null
            break
          }
          default: {
            console.error('❌ Invalid input. Please choose 1, 2, 3 or 4.')
            rl.close()
            process.exit(1)
          }
        }

        // Criar ficheiro de configuração
        if (projectType) {
          const configJson = {
            projectType,
          }

          try {
            writeFileSync(
              'eslint-config.json',
              JSON.stringify(configJson, null, 2),
              'utf8',
            )
            console.log('✅ Created eslint-config.json')
          } catch (err) {
            console.error('❌ Failed to write eslint-config.json:', err)
            rl.close()
            process.exit(1)
          }
        }

        const installCommand =
          pkgManagerInput === '2'
            ? `yarn add --dev ${allDeps.join(' ')}`
            : `npm i -D ${allDeps.join(' ')}`

        const install = exec(installCommand)
        install.stdout.pipe(process.stdout)
        install.stderr.pipe(process.stderr)

        rl.close()
      },
    )
  },
)
