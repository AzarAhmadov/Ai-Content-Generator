import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
    return (
        <section className='bg-gradient-to-r from-indigo-500 to-blue-500 h-[calc(100vh-115px)] md:h-[calc(100vh-135px)]'>
            <div className='container flex flex-col items-center gap-4 justify-center h-[calc(100vh-126px)]'>
                <div className='relative text-center'>

                    <h2 className='text-[43px] mb-4 md:mb-[0] leading-[48px] md:leading-[95px] md:text-[55px] text-white font-[500]'>
                        AI Content <span className='bg-gradient-to-tr from-stone-50 to-slate-400 bg-clip-text text-transparent'>Generator</span>
                    </h2>

                    <p className='max-w-[700px] md:leading-[28px] text-[#fff] text-center md:text-[17px] text-[15px]'>
                        Revolutionize your content creation with our AI-powered app, delivering engaging and high-quality text in seconds.
                    </p>

                    <Link className='text-[15px] md:text-[17px] flex w-max hover:scale-110 transition-all mx-auto px-4 py-2 md:py-3 text[20px] rounded-md mt-6 text-white items-center gap-2 bg-gradient-to-r from-indigo-400 to-blue-400' href={'/sign-up'}>
                        Get started <ChevronRight />
                    </Link>

                    <div className='absolute right-12 rotate-6 -top-[55px] md:-top-12'>
                        <img className='size-[55px] md:size-[70px]' src="https://cdn-icons-png.flaticon.com/128/10817/10817271.png" alt="AI Content Generator" />
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Hero