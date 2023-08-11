import React from 'react'

const Loading = () => {
  return (
    <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden"><h2>Loading...</h2></span>
        </div>
      </div>
  )
}

export default Loading
