import React from 'react'

const Error = ({children}) => {
  return (
    <div className=' bg-red-800 text-center text-white uppercase font-bold rounded-md p-3 mb-3'>
        {children}
    </div>
  )
}

export default Error
