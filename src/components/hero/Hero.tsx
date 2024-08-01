import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
    return (
        <section className='bg-gradient-to-b from-gray-700 to-black h-[calc(100vh-126px)] bg-no-repeat bg-cover'>
            <div className='container flex flex-col items-center gap-4 justify-center h-[calc(100vh-126px)]'>
                <div className='relative text-center    '>
                    <h2 className='text-[55px] text-white font-[500]'>
                        AI Content <span className='bg-gradient-to-tr from-blue-700 to-blue-400 bg-clip-text text-transparent'>Generator</span>
                    </h2>
                    <p className='max-w-[700px] leading-[27px] text-[#fff] text-center text-[17px]'>
                        Revolutionize your content creation with our AI-powered app, delivering engaging and high-quality text in seconds.
                    </p>
                    <Link className='flex w-max mx-auto px-4 py-3 text[20px] rounded-md  mt-3 text-white items-center gap-2 bg-gradient-to-r from-indigo-400 to-blue-400' href={'/sign-up'}>
                        Get started <ChevronRight />
                    </Link>

                    <div className='absolute right-12 rotate-6 -top-12'>
                        <img className='size-[70px]' src="https://cdn-icons-png.flaticon.com/128/10817/10817271.png" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero