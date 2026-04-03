import about from '../assets/about.png';


const About = ({darkMode}) =>{
    return (
        <section id = "about" className = {`min-h-screen overflow-hidden flex items-start lg:items-center justify-center pt-20 lg:pt-0 px-4 sm:px-6 ${darkMode ? "bg-linear-to-br from-gray-900 via-[#0d182e] to-gray-900" : 'bg-white-50'}`}>

            <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                <figure
                    data-aos = "fade-up"
                    data-aos-delay='300'
                    className="flex flex-wrap justify-center gap-4 relative order-2 lg:order-1">
                        <div className = "relative w-72 h-72 lg:w-96 lg:h-96">
                            <div className = "absolute inset-10 lg:-inset-20 bg-linear-to-l from-[#5177ff] via-[#8c4df1] to-[#c300ff] rotate-12 star-shape  sm:scale-150 lg:scale-100 z-0"
                            data-aos= 'zoom-in'
                            data-aos-delay='600'>
                                </div>
                                <img 
                                src = {about}
                                alt= 'about image'
                                className = 'absolute inset-0 w-full h-full sm:left-0 lg:scale-115 object-cover z-10 transition-all duration-300'
                                data-aos= 'zoom-in'
                                data-aos-delay='400'/>
                        </div>
                </figure>
                <article 
                data-aos= 'fade-left'
                data-aos-delay='300'
                className='text-center lg:text-left relative order-1 lg:order-2'>
                <header> 
                    <h1 className = 'text-3xl sm:text-4xl lg:text-4xl xl:text-5xl font-bold mb-4 text-transparent bg-linear-to-r from-purple-600 to-blue-900 bg-clip-text'>
                        About Me
                    </h1>
                </header>
                <p className={`text-sm sm:text-base lg:text-lg xl:text-lg mb-6 sm:mb-8 leading-relaxed bg-linear-to-r from-orange-900/10 to-orange-900/5 p-4 sm:p-6 rounded-xl sm:rounded-2xl backdrop-blue-sm
                ${darkMode ? 'text-gray-300': 'text-gray-700'}`}
                data-aos = 'fade-up'
                data-aos-delay= '500'>
                    I’m a passionate developer focused on building real-world solutions using web technologies and AI. I enjoy turning ideas into functional, user-friendly applications that solve meaningful problems.

I’ve worked on projects like an AI-powered Movie App, allowing users to search and favorite/unfavorite their movies, and responsive React applications where I focused on creating efficient, scalable solutions. These experiences have strengthened my problem-solving skills and understanding of real-world system design. Currently, I’m exploring advanced concepts in AI and full-stack development while actively participating in hackathons and building projects that challenge my abilities. I’m always looking for opportunities to learn, grow, and contribute to impactful work.
                </p>
                </article>
            </div>
        </section>

    )
}

export default About;