import { User } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <header>
            <div className="container px-4 md:px-14 py-5 border-b flex items-center justify-between">
                <Link className='flex justify-center items-center gap-2' href={'/'}>
                    <img className='w-[28px] md:w-[40px]' src="svgs/logo.svg" alt="Content AI" />
                    <span className='md:text-xl text-[16px]'> Content AI </span>
                </Link>
                <Link href={'/sign-up'} className='flex items-center gap-2 text-[15px] md:text-[18px] font-[400]'>
                    <User className='w-[20px] md:w-[28px]' />
                    Get Started
                </Link>
            </div>
        </header>
    )
}

export default Header