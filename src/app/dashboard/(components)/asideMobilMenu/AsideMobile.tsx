'use client'

import { NavLink } from '@/constants/constants'
import { Imobile } from '@/types/type'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { memo, useEffect } from 'react'

const AsideMobile: React.FC<Imobile> = ({ toggle }) => {

    const path = usePathname();

    return (
        <aside className={`transition-all fixed top-0 -left-[100%] h-screen z-50 duration-500 ease-in-out transform ${toggle ? 'left-0 shadow-md opacity-100 visible' : 'opacity-0 invisible'}`}>
            <div className='fixed flex flex-col justify-between left-0 bg-white top-0 z-20 min-w-[300px] h-screen'>
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
                <Link href="/" className='border-t items-center gap-3 flex justify-center h-[77px]'>
                    <Image src={'/svgs/logo.svg'} width={40} height={40} alt='Logo' />
                    <h3 className='text-[20px] font-medium bg-gradient-to-tr from-blue-700 to-blue-400 bg-clip-text text-transparent'>
                        Content AI
                    </h3>
                </Link>
            </div>
        </aside>
    )
}

export default memo(AsideMobile)