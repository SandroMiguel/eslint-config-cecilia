// Rule: Checks effect dependencies
// Message: React Hook useEffect has a missing dependency: 'propB'.
// Either include it or remove the dependency array
// https://github.com/facebook/react/tree/master/packages/eslint-plugin-react-hooks

/* eslint-disable no-console */
import React, { useEffect } from 'react'

export default function SomeComponent({ propA, propB }) {
  useEffect(() => {
    console.log(propA, propB)
  }, [propA])

  return <div>hello</div>
}
