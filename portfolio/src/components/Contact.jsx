import React from 'react'
import contact from '../assets/Contact.png';


const Contact = () => {
    return (
        <section 
        id = "contact"
        style = {{
            backgroundColor: '#0b1f3a'

        }}
        className='py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden'>
            <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='text-center mb-8 sm:mb-10 md:mb-12'
                data-aos = 'fade-up'>
                    <h2 className = 'text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3'
                    style = {{
                        color: 'white'
                    }}>
                        Get In <span
                        style = {{
                            background: 'linear-gradient(to right, #f97316, #f59e0b)',
                            WebkitBackgroundClip: 'text',
                            backgroundClip: 'text',
                            color: 'transparent'
                        }}> Touch </span>
                    </h2>
                    <p className = "text-base sm:text-lg md:text-xl"
                    style = {{
                        color: "#d1d5db"
                    }}>
                        Let's Talk !
                    </p>
                </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 items-center">
<div className="flex justify-center order-2 1g:order-1"
data-aos='fade-right'>
<img src = {contact} alt="contact me img"
className = 'w-full lg:scale-125 max-w-xs sm:max-w-sm lg:max-w-md h-auto object-contain'/>
</div>
                    <form 
                    style = {{
                        background: 'linear-gradient(to right, #1f2937,  #111827)'
                    }}
                    className='rounded-xl p-4 sm:p-5 md:p-6 lg:p-8 border shadow-lg order-1 lg:order-2'
                    data-aos='fade-left'> 
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-4'>
                        <input
                        type="text"
                        placeholder='First Name'
                        style={{
                        backgroundColor: '#374151' ,
                        borderColor: '#4b5563',
                        color: 'white'
                        }}
                        className='w-full px-3 sm:px-4 py-2 sm:py-3
                            rounded-lg text-sm sm:text-base
                            focus:border-orange-500 focus:ring-2
                            focus:ring-orange-500/20 transition-all'
                            required/>
<input
                        type="text"
                        placeholder='Last Name'
                        style={{
                        backgroundColor: '#374151' ,
                        borderColor: '#4b5563',
                        color: 'white'
                        }}
                        className='w-full px-3 sm:px-4 py-2 sm:py-3
                            rounded-lg text-sm sm:text-base
                            focus:border-orange-500 focus:ring-2
                            focus:ring-orange-500/20 transition-all'
                            required/>
<input
                        type="text"
                        placeholder='Email Address'
                        style={{
                        backgroundColor: '#374151' ,
                        borderColor: '#4b5563',
                        color: 'white'
                        }}
                        className='w-full px-3 sm:px-4 py-2 sm:py-3
                            rounded-lg text-sm sm:text-base
                            focus:border-orange-500 focus:ring-2
                            focus:ring-orange-500/20 transition-all'
                            required/>
                        <input
                        type="text"
                        placeholder='Phone Number'
                        style={{
                        backgroundColor: '#374151' ,
                        borderColor: '#4b5563',
                        color: 'white'
                        }}
                        className='w-full px-3 sm:px-4 py-2 sm:py-3
                            rounded-lg text-sm sm:text-base
                            focus:border-orange-500 focus:ring-2
                            focus:ring-orange-500/20 transition-all'
                            required/>
                            <button
                            type='submit'
                            style={{
                            background: 'linear-gradient(to right, #f97316, #f59e0b)'
                            }}
                            className='w-full py-2 sm:py-3 text-white
                            font-semibold rounded-lg text-sm sm:text-base
                            hover: shadow-lg hover: shadow-orange-500/25
                            hover: scale-[1.02] transition-all'>
                            Send Message
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
