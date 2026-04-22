import React from 'react'
import Icons from './common/Icons'
import Image from 'next/image'
import Quote from './Quote'

const Hero = () => {
    return (
        <div>
            <div className="bg-[url('/assets/image/hero-bg.webp')] pt-30 lg:pt-0 lg:px-4 w-full min-h-[861.1px] h-auto bg-center bg-cover">
                <div className='max-w-285 flex flex-col lg:flex-row mx-auto px-6 lg:px-0'>
                    <div className='pt-16 lg:pt-50 max-w-full lg:max-w-[431.1px]'>
                        <p className='font-medium text-base leading-[120%] inter'>Highly Rated on Google</p>
                        <div className='flex flex-row mt-1.5 items-center'>
                            <Image
                                src={"/assets/image/google.png"}
                                alt='google'
                                width={32}
                                height={32} />
                            <div className='-ml-8'>
                                <Icons icon={"google"} />
                            </div>
                        </div>
                        <div>
                            <h1 className='text-3xl md:text-5xl mt-4 pop font-semibold leading-[120%] text-[#010101]'>
                                <span className='text-[#19AE1A]'>Upholstery Services</span> Trusted Across Singapore
                            </h1>
                            <p className='leading-[160%] pop mt-4 text-base font-normal text-[#4D4D4D]'>
                                Complete upholstery solutions for homes and businesses sofas, cushions, built ins, headboards, and more.
                            </p>
                        </div>
                        <div>
                            <button className='mt-7.5 flex flex-row hover:bg-[#FAFAFA] hover:border hover:border-[#19AE1A] hover:text-[#19AE1A] active:text-white active:bg-[#19AE1A] bg-[#19AE1A] text-[#FAFAFA] w-[239.1px] h-[50.1px] rounded-[245px] justify-center items-center duration-500 cursor-pointer gap-2.5'>
                                <Icons icon={"whatsapp"} /> WhatsApp Us Now
                            </button>
                        </div>
                        <div className='hidden lg:block ml-63 -mt-2'>
                            <Icons icon={"string"} />
                        </div>
                    </div>

                    <div className='hidden lg:block mt-50 ml-9.25'>
                        <Icons icon={"circlsstar"} />
                    </div>

                    <div className='mt-10 lg:mt-25.75 lg:ml-30.5 flex justify-center lg:block relative'>
                        <Image
                            src={"/assets/image/sofa's.png"}
                            alt='sofa'
                            width={425}
                            height={609}
                            className='w-[280.1px] md:w-[350.1px] lg:w-[425.1px] h-auto'
                        />
                        <div className='absolute bottom-0 right-0 lg:static lg:ml-[352.1px] lg:-mt-39'>
                            <Image
                                src={"/assets/image/warranty.png"}
                                alt='warranty'
                                width={127}
                                height={127}
                                className='w-[80.1px] lg:w-[127.1px] h-auto'
                            />
                        </div>
                    </div>
                </div>

                <div className='mt-10 lg:mt-17 px-4 lg:px-0'>
                    <Quote />
                </div>
            </div>

            <div className='mt-10 lg:mt-46.5'>
                <h2 className='text-xl italic text-[#AFAFAF] font-semibold leading-[160%] justify-center flex'>
                    Trusted Our Service
                </h2>
            </div>
        </div>
    )
}

export default Hero