import { IServices } from '@/types/type'
import React, { FC } from 'react'
import FormArea from '../_components/formArea/FormArea'
import OutputArea from '../_components/outputArea/OutputArea'
import { Templates } from '@/constants/constants'

interface Iparams {
    params: {
        'template-slug': string
    }
}

const page: FC<Iparams> = (props: Iparams) => {

    const selectedTemplate: IServices | any = Templates.find((item) => item.slug == props.params['template-slug'])

    return (
        <div className='grid grid-cols-1 md:grid-cols-2'>
            <FormArea selectedTemplate={selectedTemplate} />
            <OutputArea />
        </div>
    )
}

export default page