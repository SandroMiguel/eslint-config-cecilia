throw new Error(`
[eslint-config-cecilia] Invalid usage detected.

You're trying to use Cecilia with a legacy ESLint config (.eslintrc).

Cecilia v3 uses the new ESLint flat config and requires initial setup.

👉 Fix:

Yarn:
   yarn cecilia

npx:
   npx cecilia

pnpm:
   pnpm dlx cecilia

Docs:
https://github.com/SandroMiguel/eslint-config-cecilia
`)
