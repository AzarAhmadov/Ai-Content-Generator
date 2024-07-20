import { IServices } from '@/types/type'
import Image from 'next/image'
import React, { FC } from 'react'

const ServicesCards: FC<IServices> = (item) => {

    return (
        <div className='border flex flex-col justify-between p-5 rounded-md shadow-sm cursor-pointer hover:scale-105 transition-all'>
            <div>
                <Image src={item.icon} width={50} height={50} alt={item.name} />
                <h3 className='py-3 font-bold text-[18px]'>
                    {item.name}
                </h3>
            </div>
            <p className='line-clamp-2 text-[14px] text-[#00000094]'>
                {item.desc}
            </p>
        </div>
    )
}

export default ServicesCards