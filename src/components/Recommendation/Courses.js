import React from 'react'

function Courses({logo,title,creator_name,totalTime}) {
  return (
    <div className='bg-white p-4 rounded-md shadow-md flex gap-4'>
      <img src={logo} className="h-8 w-8"/>
      <div className='flex flex-col'>
        <p>{title}</p>
        <p>{creator_name}</p>
        <p>{totalTime}</p>

      </div>
    </div>
  )
}

export default Courses
