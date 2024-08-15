'use client'

import React, { useState } from 'react'
import Search from './(components)/search/Search'
import ServicesList from './(components)/servicesList/ServicesList'

const page = () => {

    const [search, setSearch] = useState('')

    return (
        <>
            <Search setSearch={setSearch} />
            <ServicesList search={search} />
        </>
    )
}

export default page