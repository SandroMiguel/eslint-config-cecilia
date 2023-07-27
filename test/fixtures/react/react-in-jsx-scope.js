// Rule: Prevent missing React when using JSX
// Message: 'React' must be in scope when using JSX.
// ESLint config Cecilia: This rule should be ignored.
// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md

export default function SomeComponent() {
  return <div>hello</div>
}
