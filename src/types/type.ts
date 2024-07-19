export interface IServices {
    name: string
    desc: string
    category: string
    icon: string
    aiPrompt: string
    slug: string
    form: Form[]
}

interface Form {
    label: string
    field: string
    name: string
    required?: boolean
}
