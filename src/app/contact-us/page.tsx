import React from 'react';
import img from '../../components/assets/caoliflower1.jpg';
import Image from 'next/image';
import { MdOutlineMailOutline } from "react-icons/md";

const Page = () => {
    return (
        <div className='w-full flex flex-col gap-14 items-center mb-10'>
            <div className='w-full h-[20vh] grid grid-cols-4'>
                <div className='col-span-1 bg-white relative'>
                    <Image
                        src={img}
                        alt=""
                        layout="fill"
                        objectFit="cover"
                        className="absolute"
                    />
                </div>
                <div className='col-span-2 bg-gray-100 flex items-center justify-center'>
                    <h1 className='text-4xl font-bold'>Contact Us</h1>
                </div>
                <div className='col-span-1 bg-white relative'>
                    <Image
                        src={img}
                        alt=""
                        layout="fill"
                        objectFit="cover"
                        className="absolute"
                    />
                </div>
            </div>
            <div className='w-[80%] flex flex-col gap-6 m-2'>

                <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    <div className='flex flex-col justify-center items-center text-center gap-3 p-3 border border-b-1 rounded'>
                        <MdOutlineMailOutline className='text-3xl font-bold text-green-700' />
                        <h2 className='text-2xl font-bold'>Email US</h2>
                        <span className='text-[0.8rem]'>info@kachabazar.com Interactively grow empowered for process-centric total linkage.</span>
                    </div>
                    <div className='flex flex-col justify-center items-center text-center gap-3 p-3 border border-b-1 rounded'>
                        <MdOutlineMailOutline className='text-3xl font-bold text-green-700' />
                        <h2 className='text-2xl font-bold'>Email US</h2>
                        <span className='text-[0.8rem]'>info@kachabazar.com Interactively grow empowered for process-centric total linkage.</span>
                    </div>
                    <div className='flex flex-col justify-center items-center text-center gap-3 p-3 border border-b-1 rounded'>
                        <MdOutlineMailOutline className='text-3xl font-bold text-green-700' />
                        <h2 className='text-2xl font-bold'>Email US</h2>
                        <span className='text-[0.8rem]'>info@kachabazar.com Interactively grow empowered for process-centric total linkage.</span>
                    </div>
                </div>

                <div className='w-full flex justify-center'>
                    <div className="lg:w-5/12 flex flex-col md:flex-row px-0 pb-2">
                        <form className="w-full mx-auto flex flex-col justify-center">
                            <div className="mb-12">
                                <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-3">For any support just send your query</h3>
                                <p className="text-base leading-7 opacity-90">
                                    Collaboratively promote client-focused convergence vis-a-vis customer-directed alignments via plagiarized strategic users and standardized infrastructures.
                                </p>
                            </div>
                            <div className="flex flex-col md:flex-row md:space-x-2.5 lg:space-x-5">
                                <div className="w-full md:w-1/2">
                                    <label className="block text-gray-500 font-medium text-sm mb-2">Your Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Enter Your Name"
                                        className="py-2 px-4 w-full appearance-none border text-sm text-gray-700 rounded-md placeholder-gray-400 transition duration-200 focus:outline-none focus:border-emerald-500"
                                    />
                                </div>
                                <div className="w-full md:w-1/2 mt-2 md:mt-0">
                                    <label className="block text-gray-500 font-medium text-sm mb-2">Your Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Enter Your Email"
                                        className="py-2 px-4 w-full appearance-none border text-sm text-gray-700 rounded-md placeholder-gray-400 transition duration-200 focus:outline-none focus:border-emerald-500"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-gray-500 font-medium text-sm mb-2">Subject</label>
                                <input
                                    type="text"
                                    name="subject"
                                    placeholder="Enter Your Subject"
                                    className="py-2 px-4 w-full appearance-none border text-sm text-gray-700 rounded-md placeholder-gray-400 transition duration-200 focus:outline-none focus:border-emerald-500"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-500 font-medium text-sm mb-2">Message</label>
                                <textarea
                                    name="message"
                                    // rows="4" 
                                    placeholder="Write your message here"
                                    className="px-4 py-3 w-full rounded border text-sm text-gray-700 placeholder-gray-400 transition duration-300 focus:outline-none focus:border-gray-500"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="text-sm md:text-sm lg:text-base bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3.5 rounded-md transition duration-300 w-full sm:w-auto">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Page;