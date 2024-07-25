import { User } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <header>
            <div className="container px-14 py-5 border-b flex items-center justify-between">
                <Link className='flex justify-center items-center gap-2' href={'/'}>
                    <img src="svgs/logo.svg" alt="Content AI" />
                    <h3 className='text-xl'> Content AI </h3>
                </Link>
                <Link href={'/sign-up'} className='flex items-center gap-2 text-[17px] font-[400]'>
                    <User />
                    Get Started
                </Link>
            </div>
        </header>
    )
}

export default Header