'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { IServices } from '@/types/type'
import Image from 'next/image'
import React, { FormEvent, useState, memo } from 'react'

interface Props {
    selectedTemplate: IServices
    userFormInput: any
}

const FormArea: React.FC<Props> = ({ selectedTemplate, userFormInput }) => {

    const { icon, desc, name, form } = selectedTemplate

    const [formData, setFormData] = useState<any>()

    const handleInputChange = (e: any) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const onSubmitForm = (e: FormEvent) => {
        e.preventDefault()
        userFormInput(formData)
    }

    const InputArea = (input: any) => {
        if (input.field == 'input') {
            return (
                <div className='mb-6'>
                    <Input required={input?.required} onChange={handleInputChange} name={input.name} className='h-[40px]' />
                </div>
            )
        } else if (input.field == 'textarea') {
            return (
                <div className='mb-5'>
                    <Textarea onChange={handleInputChange} name={input.name} className='h-[100px]' />
                </div>
            )
        } else {
            return null
        }
    }

    return (
        <div className='border p-5 flex items-center rounded-md'>
            <div>
                <div className='space-y-4'>
                    <Image src={icon} alt={selectedTemplate.name} width={60} height={60} />
                    <h3 className='font-bold text-[25px] text-[#2980b9]'>{name}</h3>
                    <p className='text-[#000000d7] text-[12px] md:text-[14px]'>{desc}</p>
                </div>
                <form onSubmit={onSubmitForm} className='mt-8'>
                    {
                        form.map((el, index) => (
                            <div key={index}>
                                <label className='mb-3 flex font-[500]'> {el.label} </label>
                                {InputArea(el)}
                            </div>
                        ))
                    }
                    <Button type='submit' className='w-full text-md bg-gradient-to-tr from-blue-700 to-blue-400 text-white h-[45px]'> Generate Content </Button>
                </form>
            </div>
        </div>
    )
}

export default memo(FormArea)