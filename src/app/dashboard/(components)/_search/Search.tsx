import { ISearchAction } from '@/types/type'
import { SearchIcon } from 'lucide-react'
import Image from 'next/image'
import React, { FC } from 'react'

const Search: FC<ISearchAction> = ({ setSearch }) => {

    return (
        <div className='bg-gradient-to-r relative from-blue-500 to-indigo-600 py-10 rounded-md'>
            <div className='flex flex-col text-center text-white'>
                <h2 className='font-bold text-[28px] mb-1'>
                    Browse All Templates
                </h2>
                <p className='text-[17px]'>
                    What would you like to create today?
                </p>
            </div>
            <form className='max-w-[350px] mx-auto flex items-center justify-between rounded-md mt-4 pe-5 border border-[#ffffffa9]'>
                <input onChange={(e) => setSearch(e.target.value)} className='bg-transparent w-full py-2 outline-none ps-3 pe-3 text-white placeholder:text-white' type="text" placeholder='Search' />
                <SearchIcon color='#fff' />
            </form>

            <div className='absolute bottom-0 left-7'>
                <Image src={'https://cdn-icons-png.flaticon.com/128/2814/2814666.png'} width={90} height={90} alt='ai' />
            </div>
        </div>
    )
}

export default Search