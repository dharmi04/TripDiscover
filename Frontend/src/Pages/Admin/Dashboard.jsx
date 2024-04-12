import React from 'react'

const Dashboard = () => {
  return (
    <div>
      <h1 className='font-Montserrat uppercase text-accent text-center justify-center font-semibold text-5xl pt-20 pb-5'>Dashboard</h1>

      <div className='border-[3px] border-black p-4 rounded-xl shadow-md bg-primary'>
       <a href="/admin/add-destination"><p className='text-2xl font-semibold font-Montserrat text-center'> Add Destination</p></a> 
      </div>

      <div className='border-[3px] border-black p-4 rounded-xl shadow-md bg-primary'>
       <a href="/admin/add-tours"><p className='text-2xl font-semibold font-Montserrat text-center'> Add Tours</p></a> 
      </div>

      <div className='border-[3px] border-black p-4 rounded-xl shadow-md bg-primary'>
       <a href="/admin/allusers"><p className='text-2xl font-semibold font-Montserrat text-center'>All Users</p></a> 
      </div>



    </div>

  )
}

export default Dashboard
