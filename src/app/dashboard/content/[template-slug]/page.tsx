'use client'

import { IServices } from '@/types/type'
import React, { FC } from 'react'
import FormArea from '../_components/formArea/FormArea'
import OutputArea from '../_components/outputArea/OutputArea'
import { Templates } from '@/constants/constants'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

interface Iparams {
    params: {
        'template-slug': string
    }
}

const page: FC<Iparams> = (props: Iparams) => {

    const selectedTemplate: IServices | any = Templates.find((item) => item.slug == props.params['template-slug'])

    const GenerateAIContent = (formData: any) => {
     
    }

    return (
        <div>
            <Link className='flex gap-1 bg-gray-400 w-max py-2 px-3 text-white rounded-md mb-5' href={'/dashboard'}>
                <ArrowLeft />  Back
            </Link>
            <div className='grid grid-cols-1 gap-y-7 md:grid-cols-3 gap-x-0 md:gap-x-5'>
                <FormArea userFormInput={(e: any) => GenerateAIContent(e)} selectedTemplate={selectedTemplate} />

                <div className='col-span-2'>
                    <OutputArea />
                </div>
            </div>
        </div>
    )
}

export default page