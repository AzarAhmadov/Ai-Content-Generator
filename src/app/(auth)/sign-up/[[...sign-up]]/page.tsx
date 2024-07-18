import React from 'react'
import { SignUp } from "@clerk/nextjs";

const page = () => {
    return (
        <div className='grid place-items-center h-[100vh] bg-gradient-to-r from-indigo-500 to-blue-300'>
            <SignUp />
        </div>
    )
}

export default page