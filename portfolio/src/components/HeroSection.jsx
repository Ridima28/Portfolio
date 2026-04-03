import github from '../assets/github.png';
import linkedin from '../assets/linkedin.png';  
import CV from '../assets/CV.pdf';  
import { DownloadIcon, Mail } from 'lucide-react';
import hi from '../assets/hi.png';
import hero from '../assets/hero.png';

const HeroSection = () => {
    const socialIcons = [
        { icons: github, alt: 'github' },
        { icons: linkedin, alt: 'linkedin' },
    ];

    return (
        <div className='relative overflow-hidden min-h-screen flex flex-col'>
            <section
                id='home'
                data-aos='fade-up'
                data-aos-delay='250'
                className='body-font z-10'>
            
                <div className='container mx-auto flex px-4 sm:px-8 lg:px-20 py-12 lg:py-32 flex-col lg:flex-row items-center justify-between lg:mt-0 mt-14'>
                    
        
                    <div className='lg:w-1/2 w-full flex flex-col items-center lg:items-start text-center lg:text-left mb-12 lg:mb-0'>
                        
                
                        <div className='flex justify-center lg:justify-start gap-4 sm:gap-6 sm:mb-7 w-full'>
                            {socialIcons.map((social, index) => (
                                <a
                                    key={index}
                                    href='#'
                                    target='_blank'
                                    
                                    data-aos-delay={`${400 + index * 100}`}
                                    className='transform hover:scale-110 transition-transform duration-300'>
                                
                                    <img
                                        src={social.icons}
                                        alt={social.alt}
                                        className='w-8 h-8 sm:w-10 sm:h-10 object-contain filter brightness-75'/>
                                    
                                </a>
                            ))}
                        </div>

                        <h1
                            className='title-font text-4xl sm:text-3xl lg:text-5xl mb-4 font-bold text-gray-900'
                            data-aos='fade-up'
                            data-aos-delay='500'>
                        
                            Hi, I'm Ridima.
                        </h1>

        
                        <p
                            className='mb-6 lg:text-2md sm:mb-8 leading-relaxed max-w-md sm:max-w-lg text-gray-700'
                            data-aos='fade-up'
                            data-aos-delay='600'>
                        
                            I'm a developer focused on building real-world solutions using web technologies and AI. I've worked on projects like an AI-powered food distribution system and interactive React applications, aiming to solve meaningful problems with clean and scalable code. Currently exploring advanced AI integrations and preparing for hackathons and internship opportunities.
                        </p>


                        <div className='w-full pt-4 sm:pt-6'>
                            <div
                                className='flex flex-col sm:flex-row w-full gap-3'
                                data-aos='fade-up'
                                data-aos-delay='700'>
                            
                                <a href={CV} download className='inline-block'>
                                    <button className='w-full sm:w-auto inline-flex items-center justify-center text-white bg-linear-to-r from-purple-500 to-blue-500 border-0 py-3 px-6 sm:px-8 hover:shadow-[0_0_25px_rgba(168,85,247,0.6),0_0_45px_rgba(59,130,246,0.4)] rounded-full text-base sm:text-lg font-semibold transition-all duration-300 transform'>
                                        <DownloadIcon className='w-4 h-4 sm:h-5 sm:w-5 mr-2' />
                                        Download CV
                                    </button>
                                </a>

                                <a href='#contact' className='inline-block'>
                                    <button className='w-full sm:w-auto inline-flex items-center justify-center text-white border-2 border-purple-100 py-3 px-6 sm:px-8 hover:bg-gradient-to-r from-purple-500 to-blue-500 hover:text-white hover:shadow-[0_0_25px_rgba(168,85,247,0.6),0_0_45px_rgba(59,130,246,0.4)] rounded-full text-base sm:text-lg font-semibold transition-all duration-300 transform'>
                                        <Mail className='w-4 h-4 sm:w-5 sm:h-5 mr-2' />
                                        Contact Me
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div
                        className='lg:w-1/2 w-full max-w-md lg:scale-120 lg:max-w-lg mt-8 lg:mt-0 flex justify-center'
                        data-aos='fade-left'
                        data-aos-delay='400'>
                    
                        <div className='relative w-4/5 sm:w-3/4 lg:w-full'>
                            <div className='relative overflow-hidden'>
                                <img
                                    src={hero}
                                    alt='hero image'
                                    className='w-full h-auto object-cover scale-110 transform hover:scale-115 transition-transform duration-500'/>
                                
                            </div>

                            <img
                                src={hi}
                                alt='hi'
                                className='absolute top-4 left-6 sm:left-10 lg:left-30 scale-160 w-14 h-14 sm:w-20 sm:h-20 object-contain animate-bounce opacity-90 z-10'/>
                            
                        </div>
                    </div>
                </div>
                <div className='absolute top-0 left-15 w-40 h-40 sm:w-64 sm:h-64 bg-purple-500 opacity-10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000 hidden sm:block'></div>
            </section>
        </div>
    );
};

export default HeroSection;