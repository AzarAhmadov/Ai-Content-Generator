'use client'

import { IServices } from '@/types/type'
import React from 'react'

interface Props {
    selectedTemplate: IServices
}

const FormArea: React.FC<Props> = ({ selectedTemplate }) => {

    return (
        <div>
            {selectedTemplate.name}
        </div>
    )
}

export default FormArea