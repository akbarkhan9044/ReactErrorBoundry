import React from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import User from './user'
import { ErrorHandler } from './ErrorHandler'
import { LogError } from './logError'


export default function Mainuser() {
  return (
    <div>
      <ErrorBoundary FallbackComponent={ErrorHandler}
      onError={LogError}
      onReset={()=>{}}
      >
        <User/>
      </ErrorBoundary>
    </div>
  )
}
