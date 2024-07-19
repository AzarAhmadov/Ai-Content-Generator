'use client'

import { NavLink } from '@/constants/constants'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Aside = () => {

    const path = usePathname()

    return (
        <aside className='min-w-[270px] border-r border-[#00000017]'>
            <div className='fixed min-w-[270px] h-screen z-10'>
                <Link href="/" className='border-b items-center gap-3 border-b-[#00000017] flex justify-center h-[77px]'>
                    <Image src={'svgs/logo.svg'} width={50} height={50} alt='Logo' />
                    <h3 className='text-[20px] font-medium bg-gradient-to-tr from-blue-700 to-blue-400 bg-clip-text text-transparent'>
                        Content AI
                    </h3>
                </Link>

                <nav className='p-5'>
                    <ul className='flex flex-col gap-3'>
                        {NavLink.map((menu, index) => (
                            <li key={index}>
                                <Link
                                    className={`
                                    text-black transition-all flex items-center hover:text-[#fff] bg-gradient-to-r hover:from-blue-600 hover:to-blue-400 gap-3 text-[18px] py-3 px-4 rounded-md
                                    ${path === menu.path && 'text-white bg-gradient-to-tr from-blue-600 to-blue-400'}
                                    `}
                                    href={menu.path}>
                                    <menu.icon  width={25} height={25}/>
                                    {menu.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </aside>
    )
}

export default Aside