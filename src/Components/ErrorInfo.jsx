import React from 'react'

function ErrorInfo(props) {
  return (
    <div className="alert alert-danger" role="alert">
        {props.error}
      </div>
  )
}

export default ErrorInfo
