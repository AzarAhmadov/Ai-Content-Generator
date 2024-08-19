import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
    return (
        <Link href="/" className='border-b items-center gap-3 border-b-[#00000017] flex justify-center h-[77px]'>
            <figure className='w-[40px] h-[40px] relative'>
                <Image src={'/svgs/logo.svg'} fill alt='Content AI' />
            </figure>
            <h3 className='text-[20px] font-medium bg-gradient-to-tr from-blue-700 to-blue-400 bg-clip-text text-transparent'>
                Content AI
            </h3>
        </Link>
    )
}

export default Logo