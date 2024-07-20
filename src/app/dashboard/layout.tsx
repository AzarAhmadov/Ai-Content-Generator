import Aside from "./(components)/_aside/Aside";
import Header from "./(components)/_header/Header";

export default function layout({ children, }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <>
            <div className='flex'>
                <Aside />
                <div className='flex flex-col flex-1'>
                    <div className='flex flex-col border-r border-[#00000017] w-full'>
                        <Header />
                    </div>
                    <div className='px-[20px] pt-[20px] pb-6'>
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}