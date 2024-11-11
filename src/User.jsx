import React, { memo } from 'react'

function User({z}) {
    console.log('usr')
  return (
    <div>
      <h1>User component {z}</h1>
    </div>
  )
}

export default memo (User)
