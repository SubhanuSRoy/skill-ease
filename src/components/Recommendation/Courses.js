import React from 'react'

function Courses({logo,title,cert,rating, difficulty}) {
  return (
    <div className='bg-white p-4 rounded-md shadow-md flex gap-4'>
      {/* <img src={logo} className="h-8 w-8"/> */}
      <div className='flex flex-col'>
        <p className='font-bold text-lg'>{title}</p>
        <p className='text-orange-300'>{cert}</p>
        <p className='text-yellow-500'>{Math.round(rating*10)}</p>
        <p className='text-green-500'>{difficulty}</p>

      </div>
    </div>
  )
}

export default Courses
