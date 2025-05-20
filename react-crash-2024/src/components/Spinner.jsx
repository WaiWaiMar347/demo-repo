import React from 'react'
import { ClipLoader } from 'react-spinners'

const override={
  display: 'block',
  margin: '100px auto'
}
const Spinner = ({loading}) => {
  return (
    <ClipLoader 
    color="#4338ca"
    loding={loading}
    cssOverride={override}
    size={50}
    aria-label="Loading Spinner"
    data-testid="loader"
    />
  )
}

export default Spinner