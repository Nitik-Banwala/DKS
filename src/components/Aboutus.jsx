import React from 'react'
import { featuresdata } from '@/utils/helper'
import Image from 'next/image'
import Button from './common/Button'
const Aboutus = () => {
    return (
        <div className='bg-whity px-4 py-14 md:py-20 lg:py-25 xl:py-[120.1px] '>
            <div className='max-w-285 mx-auto flex flex-col md:flex-row justify-between'>
                <div>
                    <h2 className='max-w-[549.1px] mb-4.5 text-3xl md:text-5xl font-semibold leading-120 Poppins ' >About <span className='text-green'>Us</span></h2>
                    <div>
                        {featuresdata.map((item, index) => {
                            return (
                                <div
                                    key={index}
                                    className='max-w-[509.1px] mt-3 h-auto p-3.5 border border-[#19AE1A33] rounded-[16.1px]'
                                >
                                    <h3 className='text-base font-semibold leading-160 Poppins text-blacky'>{item.title}</h3>
                                    <p className='text-body-text text-base font-normal Poppins leading-160'>{item.description}</p>
                                </div>
                            )
                        })}
                    </div>
                    <Button
                    text={'Know More'}
                    className={'w-[146.1px] font-semibold text-base leading-160 Poppins mt-[30.1px] h-[50.1px] rounded-[245px] bg-green text-whity hover:bg-whity hover:border hover:border-green hover:text-green active:bg-green active:text-white '}/>
                </div>
                <div className='mt-[30.1px] lg:mt-0 ml-4'>
                    <Image
                     src={'/assets/image/png/mirrorchair.png'}
                     alt='chair'
                     width={533}
                     height={625}
                     />
                </div>
            </div>
        </div>
    )
}

export default Aboutus
