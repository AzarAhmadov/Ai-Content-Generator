import React from 'react'
import Header from './(components)/_header/Header'
import Aside from './(components)/_aside/Aside'

const page = () => {
    return (
        <>
            <div className='flex h-[200vh]'>
                <Aside />
                <div className='flex flex-col flex-1'>
                    <div className='flex flex-col border-r border-[#00000017] w-full'>
                        <Header />
                    </div>
                    <div className='px-[1.5rem] pt-[20px]'>

                    </div>
                </div>
            </div>
        </>
    )
}

export default page