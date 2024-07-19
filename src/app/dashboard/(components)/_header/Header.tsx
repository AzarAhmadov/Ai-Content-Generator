import { Search } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <header className='border-b border-[#00000017]'>
            <div className="container px-[20px] h-[76px] flex items-center justify-between">
                <form className='flex items-center justify-between border rounded-md w-[400px] pe-3'>
                    <input className='w-full bg-transparent p-[12px] outline-none' type="text" placeholder='Search...' />
                    <Search />
                </form>
                <Link href={''} className='hover:scale-105 transition-all text-sm rounded-full bg-gradient-to-tr from-blue-600 to-blue-400 text-white px-3 py-2'>
                    ✨ Join Membership just for $99/Month
                </Link>
            </div>
        </header>
    )
}

export default Header