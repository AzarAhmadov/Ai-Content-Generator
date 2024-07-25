import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
    return (
        <section className="bg-gradient-to-r from-sky-100 to-blue-300">
            <div className="container flex flex-col items-center gap-4 justify-center h-[calc(100vh-76px)]">
                <h2 className='text-[55px] font-[500]'>
                    AI Content <span className='bg-gradient-to-tr from-blue-700 to-blue-400 bg-clip-text text-transparent'>Generator</span>
                </h2>
                <p className='max-w-[700px] leading-[27px] text-[#000000bf] text-center text-[17px]'>
                    Revolutionize your content creation with our AI-powered app, delivering engaging and high-quality text in seconds.
                </p>
                <Link className='flex px-4 py-3 text[20px] rounded-md  mt-3 text-white items-center gap-2 bg-gradient-to-r from-indigo-400 to-blue-400' href={'/sign-up'}>
                    Get started <ChevronRight />
                </Link>
            </div>
        </section>
    )
}

export default Hero