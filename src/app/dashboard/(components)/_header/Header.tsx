'use client'

import { Search } from 'lucide-react'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
const AsideMobile = dynamic(() => import('../_asideMobilMenu/AsideMobile'), { ssr: false })

const Header = () => {

    const [mobile, setMobile] = useState(false)

    const openMenu = () => {
        setMobile(!mobile)
    }

    return (
        <>
            <header className='border-b border-[#00000017]'>
                <div className="container gap-5 px-[20px] h-[76px] flex items-center justify-between">
                    <form className='flex items-center justify-between border rounded-md w-full max-w-[400px] pe-3'>
                        <input className='w-full bg-transparent p-[10px] md:p-[12px] outline-none' type="text" placeholder='Search...' />
                        <Search />
                    </form>
                    <Link href={''} className='hover:scale-105 md:block hidden transition-all text-sm rounded-full bg-gradient-to-tr from-blue-600 to-blue-400 text-white px-3 py-2'>
                        ✨ Join Membership just for $99/Month
                    </Link>
                    <button onClick={openMenu} className='md:hidden block'>
                        <Image width={30} height={30} src="https://cdn-icons-png.flaticon.com/128/8917/8917404.png" alt='menu_bar' />
                    </button>
                </div>
            </header>

            {
                <AsideMobile mobile={mobile} />
            }
        </>
    )
}

export default Header