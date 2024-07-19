import React from 'react'
import Search from './(components)/_search/Search'
import ServicesList from './(components)/_servicesList/ServicesList'

const page = () => {
    return (
        <>
            <Search />
            <ServicesList />
        </>
    )
}

export default page