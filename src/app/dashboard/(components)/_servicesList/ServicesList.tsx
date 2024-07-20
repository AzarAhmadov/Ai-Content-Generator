import React, { FC, useMemo } from 'react'
import ServicesCards from '../_servicesCards/ServicesCards'
import { Templates } from '@/constants/constants'
import { ISearch, IServices } from '@/types/type'
import Image from 'next/image'

const ServicesList: FC<ISearch> = ({ search }) => {

    const filteredTemplates = useMemo(() => {
        if (search) {
            return Templates.filter((item) =>
                item.name.toLowerCase().trim().includes(search.toLowerCase().trim())
            )
        }
        return Templates
    }, [search])

    return (
        <>
            {
                filteredTemplates.length === 0 ?
                    <div className='flex justify-center pt-10 flex-col items-center gap-4'>
                        <Image src={'https://cdn-icons-png.flaticon.com/128/6741/6741076.png'} width={100} height={0} alt='No Result' />
                        <p className='text-[17px] text-pink-800'>No services found matching your search criteria.</p>
                    </div>
                    :
                    <div className='grid grid-cols-4 gap-4 mt-4'>
                        {
                            filteredTemplates.map((item: IServices, index: number) => (
                                <ServicesCards {...item} key={index} />
                            ))
                        }
                    </div>
            }
        </>
    )
}

export default ServicesList