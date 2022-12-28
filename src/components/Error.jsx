import React from 'react'

export default function Error({children}) {
  return (
    <div className='bg-red-700 text-cyan-50 text-center p-3 uppercase font-bold mb-3 rounded-lg'>
      {children}
    </div>
  )
}
