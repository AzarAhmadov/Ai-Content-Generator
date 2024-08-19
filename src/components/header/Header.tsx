import { User } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <header>
            <div className="container px-4 md:px-14 py-3 md:py-5 border-b flex items-center justify-between">
                <Link className='flex justify-center items-center gap-2' href={'/'}>
                    <figure className='w-[40px] h-[40px] relative'>
                        <Image fill src="svgs/logo.svg" alt="Content AI" />
                    </figure>
                    <h3 className='text-[18px] md:text-[20px] font-medium bg-gradient-to-tr from-blue-700 to-blue-400 bg-clip-text text-transparent'>
                        Content AI
                    </h3>
                </Link>
                <Link href={'/sign-up'} className='flex items-center gap-2 text-[16px] md:text-[18px] font-[400]'>
                    <User className='w-[23px] md:w-[28px]' />
                    Get Started
                </Link>
            </div>
        </header>
    )
}

export default Header