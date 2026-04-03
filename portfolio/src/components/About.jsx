import about from '../assets/about.png';

const About = () => {
    return (
        <section
            id="about"
            className="min-h-screen overflow-hidden flex items-start lg:items-center justify-center pt-20 lg:pt-0 px-4 sm:px-6 bg-white-50">
        
            <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                <figure
                    data-aos="fade-up"
                    data-aos-delay="300"
                    className="flex flex-wrap justify-center gap-4 relative order-2 lg:order-1">
                
                    <div className="relative w-72 h-72 lg:w-96 lg:h-96">
                        <div
                            className="absolute inset-10 lg:-inset-20 bg-linear-to-l from-[#5177ff] via-[#8c4df1] to-[#c300ff] rotate-12 star-shape sm:scale-150 lg:scale-100 z-0"
                            data-aos="zoom-in"
                            data-aos-delay="600">
                    </div>
                        <img
                            src={about}
                            alt="about image"
                            className="absolute inset-0 w-full h-full sm:left-0 lg:scale-115 object-cover z-10 transition-all duration-300"
                            data-aos="zoom-in"
                            data-aos-delay="400"/>
                        
                    </div>
                </figure>

                <article
                    data-aos="fade-left"
                    data-aos-delay="300"
                    className="text-center lg:text-left relative order-1 lg:order-2">
                
                    <header>
                        <h1 className="text-3xl sm:text-4xl lg:text-4xl xl:text-5xl font-bold mb-4 text-transparent bg-linear-to-r from-purple-600 to-blue-900 bg-clip-text">
                            About Me
                        </h1>
                    </header>

                    <p
                        className="text-sm sm:text-base lg:text-lg xl:text-lg mb-6 sm:mb-8 leading-relaxed bg-linear-to-r from-orange-900/10 to-orange-900/5 p-4 sm:p-6 rounded-xl sm:rounded-2xl backdrop-blue-sm text-gray-700"
                        data-aos="fade-up"
                        data-aos-delay="500">
                    
                    I am a passionate and driven undergraduate student currently pursuing my degree in  B.Tech in Computer Science and AI/ML from NextWave institute of Advance Technology, 2nd semester

                    I have a strong interest in building impactful tech solutions, with experience in web development and AI-based projects. I enjoy turning ideas into real-world applications, such as developing projects like a movie search app, AI-based food distribution system.

                    I am constantly exploring new technologies and improving my skills in areas like frontend development, backend systems, and problem-solving. I actively participate in hackathons and coding challenges, where I focus on creating meaningful and scalable solutions.

                    My goal is to leverage technology to solve real-world problems and continuously grow as a developer by learning, building, and collaborating.

                    </p>
                </article>
            </div>
        </section>
    );
};

export default About;