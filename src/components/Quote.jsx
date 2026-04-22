import React from 'react'
import Button from './common/Button'
import Icons from './common/Icons'

const Quote = () => {
    return (
        <div className='pb-4 pop'>
            <div className='bg-[#FAFAFA] py-10 px-6 md:px-12.5 rounded-[31px] max-w-[1129.1px] w-full shadow-lg mx-auto'>
                <div className='flex flex-col md:flex-row w-full gap-4 lg:justify-between xl:gap-0 '>
                    <div className='w-full'>
                        <div className='flex flex-row items-center gap-1.5'>
                            <Icons icon={"prsn"} />
                            <h2 className='text-sm font-medium leading-[160%]'>Name*</h2>
                        </div>
                        <input type="text" placeholder='Enter First and Last Name'
                            className='w-full md:max-w-[330.1px] mt-1.5 h-[50.1px] placeholder:text-[#4D4D4D] placeholder:text-xs leading-[150%] rounded-[35px] border pl-4 border-[#0101011F]' />
                    </div>
                    <div className='w-full'>
                        <div className='flex flex-row items-center gap-1.5'>
                            <Icons icon={"contact"} />
                            <h2 className='text-sm font-medium leading-[160%]'>Contact*</h2>
                        </div>
                        <input type="text" placeholder='Enter Mobile'
                            className=' w-full md:max-w-[330.1px] mt-1.5 h-[50.1px] placeholder:text-[#4D4D4D] placeholder:text-xs leading-[150%] rounded-[35px] border pl-4 border-[#0101011F]' />
                    </div>
                    <div className='w-full'>
                        <div className='flex flex-row items-center gap-1.5'>
                            <Icons icon={"uplode"} />
                            <h2 className='text-sm font-medium leading-[160%]'>Upload Photos</h2>
                        </div>
                        <div className='w-full md:max-w-[330.1px] gap-1.5 flex flex-row items-center mt-1.5 text-xs leading-[150%] h-[50.1px] text-[#4D4D4D] rounded-[35px] border pl-4 border-[#0101011F]'>
                            <Icons icon={'image'} /> Drop your image
                        </div>
                    </div>
                </div>
                <Button
                    text={'Get Free Quote'}
                    className={'hover:bg-[#FAFAFA] mt-6 hover:border hover:border-[#19AE1A] hover:text-[#19AE1A] active:text-white active:bg-[#19AE1A] bg-[#19AE1A] text-[#FAFAFA] max-w-[1130.1px] w-full h-[50.1px] rounded-[245px]'} />
            </div>
        </div>
    )
}

export default Quote