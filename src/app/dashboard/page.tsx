import React from 'react'
import Header from './(components)/_header/Header'
import Aside from './(components)/_aside/Aside'

const page = () => {
    return (
        <>
            <div className='flex h-[200vh]'>
                <Aside />
                <div className='flex flex-col flex-1'>
                    <div className='flex flex-col border-r border-[#00000017] w-full'>
                        <Header />
                    </div>
                    <div className='px-[1.5rem] pt-[20px]'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident natus in iste delectus nam repudiandae facere dolorem! Cum est recusandae accusantium, rem nisi eaque! Expedita magni veritatis deleniti quam. Sit voluptate esse hic veritatis cupiditate animi amet quia qui fugiat deleniti voluptates perferendis, sed nobis laudantium autem ducimus labore mollitia, necessitatibus itaque numquam ut. Quia aperiam sequi quibusdam quisquam nesciunt id blanditiis molestias libero labore. Commodi adipisci ad rem, expedita modi molestiae temporibus alias ea! Dolorem non qui suscipit dolor ratione nostrum unde aliquid delectus officia dolorum, et eligendi incidunt excepturi expedita, debitis natus? Voluptas magnam aliquam doloribus asperiores accusantium!
                    </div>
                </div>
            </div>
        </>
    )
}

export default page