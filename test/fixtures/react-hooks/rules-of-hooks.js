// Rule: Checks rules of Hooks
// Message: React Hook "useState" is called in function "userandomboolean"
// that is neither a React function component nor a custom React Hook function.
// https://github.com/facebook/react/tree/master/packages/eslint-plugin-react-hooks

import React, { useEffect, useState } from 'react'

function userandomboolean() {
  const [isTrue, setIsTrue] = useState(null)

  useEffect(() => {
    setIsTrue(Boolean(Math.floor(Math.random() * 1)))
  }, [])

  return isTrue
}

export default function SomeComponent() {
  return <div>
    True or False? {userandomboolean()}
  </div>
}
