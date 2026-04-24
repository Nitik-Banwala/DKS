"use client";
import React, { useState } from 'react'
import Button from './common/Button'
import Icons from './common/Icons'

const Quote = () => {

    const [formData, setFormData] = useState({
        name: "",
        contact: ""
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const validate = () => {
        let newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
        } else if (formData.name.length < 3) {
            newErrors.name = "Minimum 3 characters required";
        }

        if (!formData.contact) {
            newErrors.contact = "Contact is required";
        } 
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validate()) {
            console.log(formData);
            alert("Form submitted successfully!");

            setFormData({ name: "", contact: "" });
            setErrors({});
        }
    };

    return (
        <div className='pb-4 Poppins'>
            <form
                onSubmit={handleSubmit}
                className='bg-whity py-10 px-6 md:px-12.5 rounded-[31px] max-w-[1129.1px] w-full shadow-lg mx-auto'
            >
                <div className='flex flex-col md:flex-row w-full gap-4 lg:justify-between xl:gap-0 '>
                    <div className='w-full'>
                        <div className='flex items-center gap-1.5'>
                            <Icons icon={"prsn"} />
                            <h2 className='text-sm font-medium'>Name*</h2>
                        </div>

                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder='Enter First and Last Name'
                            className='w-full md:max-w-[330.1px] mt-1.5 h-12.5 rounded-[35px] border pl-4'
                        />

                        {errors.name && (
                            <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                        )}
                    </div>
                    <div className='w-full'>
                        <div className='flex items-center gap-1.5'>
                            <Icons icon={"contact"} />
                            <h2 className='text-sm font-medium'>Contact*</h2>
                        </div>

                        <input
                            type="text"
                            name="contact"
                            value={formData.contact}
                            onChange={handleChange}
                            placeholder='Enter Mobile'
                            className='w-full md:max-w-[330.1px] mt-1.5 h-12.5 rounded-[35px] border pl-4'
                        />

                        {errors.contact && (
                            <p className="text-red-500 text-xs mt-1">{errors.contact}</p>
                        )}
                    </div>
                    <div className='w-full'>
                        <div className='flex items-center gap-1.5'>
                            <Icons icon={"uplode"} />
                            <h2 className='text-sm font-medium'>Upload Photos</h2>
                        </div>

                        <div className='w-full md:max-w-[330.1px] flex items-center mt-1.5 text-xs h-12.5 rounded-[35px] border pl-4'>
                            <Icons icon={'image'} /> Drop your image
                        </div>
                    </div>
                </div>

                <Button
                    text={'Get Free Quote'}
                    type="submit"
                    className='hover:bg-whity mt-6 hover:border hover:border-green hover:text-green active:text-white active:bg-green bg-green text-whity w-full h-12.5 rounded-full'
                />
            </form>
        </div>
    )
}

export default Quote