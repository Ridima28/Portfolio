import react from '..assets/react.png'
import javascript from '..assets/js.png'
import html from '..assets/html.png'
import css from '..assets/css.png'
import tailwind from '..assets/tailwind.png'
import node from '..assets/node.png'
import python from '..assets/python.png'
import c from '..assets/c.png'

const Skill = ({darkMode}) => {
    const skills = [
        { name: 'React', icon: react, level: 95, color: 'from-orange-500 to-amber-500' },
        { name: 'JavaScript', icon: javascript, level: 90, color: 'from-blue-500 to-cyan-500' },
        { name: 'HTML', icon: html, level: 95, color: 'from-red-500 to-orange-500' },
        { name: 'CSS', icon: css, level: 95, color: 'from-orange-500 to-amber-500' },
        { name: 'Tailwind', icon: tailwind, level: 90, color: 'from-yellow-500 to-amber-500' },
        { name: 'Node', icon: node, level: 95, color: 'from-red-500 to-orange-500' },
        { name: 'Python', icon: python, level: 90, color: 'from-blue-500 to-cyan-500' },
        { name: 'C++', icon: c, level: 90, color: 'from-blue-500 to-cyan-500' }
    ];

    return (
        <section 
        id = "skills"
        style = {{
            background: darkMode? '#111827' : '#f9fafb'
        }}
        className='py-14 relative overflow-hidden'>
            <div className='py-14 relative overflow-hidden'>
                <div className='container px-5 py-14 mx-auto'>
                    <div className='text-center mb-20'
                    data-aos= 'fade-up'>
                        <h1 className = 'sm:text-4xl text-3xl font-bold title-font mb-4'
                        style = {{
                            color: darkMode? 'white':'#1f2937'
                        }}>My <span 
                        style = {{background:'linear-gradient(to right, #fbbf24, #f59e0b' , WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent'}}>
                            Skills
                        </span>
                        </h1>
                    </div>
                    <p
                        className='text-1g max-w-2x1 mx-auto leading-relaxed'
                        style={{
                        color: darkMode ? '#d1d5db' : '#4b5563' }}>
                        I have a strong foundation in web development, with expertise in both frontend and backend technologies. My skills are:  
                    </p>
            </div>
            <div 
            className='flex flex-wrap m-4'
            data-aos= 'fade-up'
            data-aos-delay = '200'>
                {skills.map((skill,index) =>(
                    <div 
                    key = {index}
                    className='p-4 lg:w-1/4 md:w-1/2 w-full'
                    data-aos = 'fade-up'
                    data-aos-delay = {`${300+index*100}`}>
                        <div 
                        style = {{background:darkMode? 'linear-gradient(to bottom right, #1f2937, #111827)':'linear-gradient(to bottom right, #ffffff, #f3f4f6)',
                            borderColor: darkMode? '#374151' : '#e5e7eb'
                        }}
                        className= 'h-full p-6 rounded-2x1 border hover:border-orange-500/50 transition-all duration-300 hover:- translate-y-2 group hover: shadow-[0_0_30px_rgb(255, 165,0,0,0.15)]'>
                        
                            </div>
                    </div> 
                ))}
            </div>
        </div>
    </section>

    )

}

export default Skill
