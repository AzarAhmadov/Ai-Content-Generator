'use client'

import Logo from '@/components/common/logo/Logo'
import { NavLink } from '@/constants/constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Aside = () => {

    const path = usePathname()

    return (
        <aside className='min-w-[270px] lg:flex hidden'>
            <div className='fixed min-w-[270px] border-r border-[#00000017] h-screen z-10'>
                <Logo />
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
                                    <menu.icon width={25} height={25} />
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