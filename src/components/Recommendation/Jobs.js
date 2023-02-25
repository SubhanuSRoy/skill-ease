import React from 'react'

function Jobs({logo,role,company,salary}) {
  return (
    <div className='bg-white p-4 rounded-md shadow-md flex gap-4'>
      <img src={logo} className="h-8 w-8"/>
      <div className='flex flex-col'>
        <p>{role}</p>
        <p>{company}</p>
        <p>{salary}</p>

      </div>
    </div>
  )
}

export default Jobs
