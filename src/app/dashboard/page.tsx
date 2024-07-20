'use client'

import React, { useState } from 'react'
import Search from './(components)/_search/Search'
import ServicesList from './(components)/_servicesList/ServicesList'

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