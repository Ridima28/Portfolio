import react from '../assets/react.png'
import javascript from '../assets/js.png'
import html from '../assets/html.png'
import css from '../assets/css.png'
import node from '../assets/node.png'
import python from '../assets/python.png'
import cpp from '../assets/cpp.png'

const Skill = () => {
    const skills = [
        { name: 'React', icon: react, level: 95, color: 'from-orange-500 to-amber-500' },
        { name: 'JavaScript', icon: javascript, level: 90, color: 'from-blue-500 to-cyan-500' },
        { name: 'HTML', icon: html, level: 95, color: 'from-red-500 to-orange-500' },
        { name: 'CSS', icon: css, level: 95, color: 'from-orange-500 to-amber-500' },
        { name: 'Node', icon: node, level: 95, color: 'from-red-500 to-orange-500' },
        { name: 'Python', icon: python, level: 90, color: 'from-blue-500 to-cyan-500' },
        { name: 'C++', icon: cpp, level: 90, color: 'from-blue-500 to-cyan-500' }
    ];

    return (
        <section
            id="skills"
            className="py-14 relative overflow-hidden bg-[#0b1f3a]">
        
            <div className='container px-5 py-14 mx-auto'>
                <div className='text-center mb-20' data-aos='fade-up'>
                    <h1 className="sm:text-4xl text-3xl font-bold title-font mb-4 text-white">
                        My {" "}
                        <span
                            style={{
                                background: 'linear-gradient(to right, #fbbf24, #f59e0b)',
                                WebkitBackgroundClip: 'text',
                                backgroundClip: 'text',
                                color: 'transparent'
                            }}>
                        
                            Skills
                        </span>
                    </h1>

                    <p
                        className='text-lg max-w-2xl mx-auto leading-relaxed'
                        style={{ color: '#d1d5db' }}>
                    
                        I have a strong foundation in web development, with expertise in both frontend and backend technologies. My skills are:
                    </p>
                </div>

                <div
                    className='flex flex-wrap m-4'
                    data-aos='fade-up'
                    data-aos-delay='200'>
                
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className='p-4 lg:w-1/4 md:w-1/2 w-full'
                            data-aos='fade-up'
                            data-aos-delay={`${300 + index * 100}`}>
                        
                            <div
                                style={{
                                    background: 'linear-gradient(to bottom right, #1f2937, #111827)',
                                    borderColor: '#374151'
                                }}
                                className='h-full p-6 rounded-2xl border hover:border-orange-500/50 transition-all duration-300 hover:-translate-y-2 group hover:shadow-[0_0_30px_rgba(255,165,0,0.15)]'>
                            
                                <div className='flex items-center mb-6'>
                                    <div
                                        style={{
                                            background: 'linear-gradient(to bottom right, #374151, #1f2937)'
                                        }}
                                        className='w-16 h-16 rounded-xl p-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>
                                    
                                        <img
                                            src={skill.icon}
                                            alt={skill.name}
                                            className='w-full h-full object-contain'/>
                                        
                                    </div>

                                    <h3
                                        className='text-2xl font-bold ml-4 text-white'>
                                    
                                        {skill.name}
                                    </h3>
                                </div>

                                <div className="mb-2 flex justify-between items-center">
                                    <span
                                        className='font-medium'
                                        style={{ color: "#d1d5db" }}>
                                    
                                        Proficiency
                                    </span>

                                    <span
                                        className='font-bold'
                                        style={{
                                            background: 'linear-gradient(to right, #f97316, #f59e0b)',
                                            WebkitBackgroundClip: 'text',
                                            backgroundClip: 'text',
                                            color: 'transparent'
                                        }}>
                                    
                                        {skill.level}%
                                    </span>
                                </div>

                                <div
                                    className='w-full rounded-full h-3 overflow-hidden'
                                    style={{ backgroundColor: '#374151' }}>
                                
                                    <div
                                        className={`h-full rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                                        style={{ width: `${skill.level}%` }}>
                                    </div>
                                </div>

                                <div className='mt-6 pt-4 border-t border-gray-700'>
                                    <div
                                        className='h-1 rounded-full opacity-70 group-hover:w-full transition-all duration-500 w-1/3'
                                        style={{
                                            background: 'linear-gradient(to right, #f97316, #f59e0b)'
                                        }}>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skill;