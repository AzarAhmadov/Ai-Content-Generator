'use client'

import useToggle from '@/hook/useToggle';
import { Search } from 'lucide-react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
const AsideMobile = dynamic(() => import('../asideMobilMenu/AsideMobile'), { ssr: false });

const Header = () => {

    const [toggle, handleToggle] = useToggle(false);

    const renderToggle = () => {
        return (
            <>
                {
                    toggle ?
                        <button onClick={handleToggle} className='lg:hidden block'>
                            <Image width={30} height={30} src="https://cdn-icons-png.flaticon.com/128/1828/1828665.png" alt='close_bar' />
                        </button>
                        :
                        <button onClick={handleToggle} className='lg:hidden block'>
                            <Image width={30} height={30} src="https://cdn-icons-png.flaticon.com/128/8917/8917404.png" alt='menu_bar' />
                        </button>
                }
            </>
        )
    }

    return (
        <>
            <header className='border-b border-[#00000017]'>
                <div className="container gap-5 px-[13px] md:px-[20px] h-[76px] flex items-center justify-between">
                    <form className='flex items-center justify-between border rounded-md w-full max-w-[400px] pe-3'>
                        <input className='w-full bg-transparent p-[10px] md:p-[12px] outline-none' type="text" placeholder='Search...' />
                        <Search />
                    </form>
                    <Link href={''} className='hover:scale-105 lg:block hidden transition-all text-sm rounded-full bg-gradient-to-tr from-blue-600 to-blue-400 text-white px-3 py-2'>
                        ✨ Join Membership just for $99/Month
                    </Link>

                    {renderToggle()}
                </div>
            </header>

            <AsideMobile handleToggle={handleToggle} toggle={toggle} />
        </>
    );
};

export default Header;
