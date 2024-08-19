import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { IServices } from '@/types/type'
import Image from 'next/image'
import React from 'react'

interface Props {
    selectedTemplate: IServices
}

const FormArea: React.FC<Props> = ({ selectedTemplate }) => {

    const { icon, desc, name, form } = selectedTemplate

    const InputArea = (input: any) => {
        if (input.field == 'input') {
            return (
                <div className='mb-6'>
                    <Input className='h-[40px]' />
                </div>
            )
        } else if (input.field == 'textarea') {
            return (
                <div className='mb-5'>
                    <Textarea  className='h-[100px]' />
                </div>
            )
        } else {
            return null
        }
    }

    return (
        <div>
            <div className='space-y-4'>
                <Image src={icon} alt={selectedTemplate.name} width={60} height={60} />
                <h3 className='font-bold text-[25px] text-[#2980b9]'>{name}</h3>
                <p className='text-[#000000d7]'>{desc}</p>
            </div>
            <form className='mt-8'>
                {
                    form.map((el, index) => (
                        <div key={index}>
                            <label className='mb-3 flex font-[500]'> {el.label} </label>
                            {
                                InputArea(el)
                            }
                        </div>
                    ))
                }
                <Button className='w-full text-md bg-gradient-to-tr from-blue-700 to-blue-400 text-white h-[45px]'> Generate Content </Button>
            </form>
        </div>
    )
}

export default FormArea