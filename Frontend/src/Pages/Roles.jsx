import React from 'react'

const Roles = () => {
    return (
        <div className='flex flex-col justify-center items-center h-screen'>
            <h1 className='p-6 text-4xl font-Poppins'>What best describes you?</h1>
            <div className="flex flex-row space-x-4 text-white">
                <a href="/usersignup">
                    <div className='border-[3px] border-black p-4 rounded-xl shadow-md bg-primary'>
                        <p className='text-2xl font-semibold font-Montserrat text-center'>User</p>
                        <p className='text-xl font-normal text-center'>Just your friendly neighborhood user!</p>
                    </div>
                </a>
                <a href="/admin/signup">
                    <div className='border-[3px] border-black p-4 rounded-xl shadow-md bg-primary'>
                        <p className='text-2xl font-semibold font-Montserrat text-center'> Admin</p>
                        <p className='text-xl font-normal text-center'>The superhero behind the scenes! 🦸‍♂️</p>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Roles
