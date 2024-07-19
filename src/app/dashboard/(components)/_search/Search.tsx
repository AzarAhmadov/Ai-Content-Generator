import { SearchIcon } from 'lucide-react'
import React from 'react'

const Search = () => {
    return (
        <div className='bg-gradient-to-r from-blue-500 to-indigo-600 py-6 rounded-md'>
            <div className='flex flex-col text-center text-white'>
                <h2 className='font-bold text-[28px] mb-1'>
                    Browse All Templates
                </h2>
                <p className='text-[17px]'>
                    What would you like to create today?
                </p>
            </div>
            <form className='max-w-[350px] mx-auto flex items-center justify-between rounded-md mt-4 pe-5 border border-[#ffffffa9]'>
                <input className='bg-transparent w-full py-2 outline-none ps-3 pe-3 text-white placeholder:text-white' type="text" placeholder='Search' />
                <SearchIcon color='#fff' />
            </form>
        </div>
    )
}

export default Search