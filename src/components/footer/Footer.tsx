import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer className='text-center py-3 text-[17px]'>
            Created By <Link className='border-b-2 hover:text-blue-600 transition-all border-blue-600' target='_blank' href={'https://azarahmadov.vercel.app/'}>Azar Ahmadov</Link>
        </footer>
    )
}

export default Footer