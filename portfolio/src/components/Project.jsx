import project1 from '../assets/project1';
import {FaGithub} from 'react-icons/fa'


const Project = () => {
    const projects = [
        {
            id: 1,
            title: 'MovieCon',
            desc: 'A website where you can search different movies, real-time. Mark them as favorite-unfavorite.',
            image: project1,
            tags: ['React','Node.js','Javascript']

    }
        // {
    //         id: 2,
    //         title: 'ResumeAnalyser',
    //         desc: 'A website where you can upload your resume, and get it analyzed by the help of AI',
    //         image: project1,
    //         tags: ['React','Node.js','Javascript']

    // },
    ]
    return (
        <section 
        id = 'projects'
        style = {{
            backgroundColor: '#111827'
        }}
        className='relative py-24'>
            <div className='container mx-auto px-4'>
                <div className='text-center sm:text-4xl font-bold mb-3'>
                    <h2 
                    className='text-3xl sm:text-4xl font-bold mb-3'
                    style = {{
                        color: "#1f2937"
                    }}>
                        My <span style = {{
                            background: 'linear-gradient(to right, #f97316, #f59e0b)',
                            WebkitBackgroundClip: 'text',
                            backgroundClip: 'text',
                            color:'transparent'
                        }}>Projects </span>
                    </h2>
                    <p
                    className='max-w-xl mx-auto'
                    style = {{
                        color: '#6b7280'
                    }}>
                        A showcase of my recent work
                    </p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12'>
                    {projects.map((project, index) => (
                        <div 
                        key = {project.id}
                        style = {{
                            background : 'linear-gradient(to right, #1f2937, #111827)',
                            borderColor: '#374151'
                        }}
                        className='group rounded-xl border duration-300 hover:border-orange-500/50 transition-all'
                        data-aos= 'fade-up'
                        data-aos-delay = {index*100}>
                            <div className='h-36 overflow-hidden rounded-t-xl'>
                                <img src = {project.image} alt = {project.title} className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500' />
                                </div>
                                <div className='p-4'>
                                    <h3 className='text-lg font-bold mb-2'
                                    style = {{
                                        color:'#1f2937'
                                    }}>
                                        {project.title}
                                    </h3>
                                    <p className = "text-sm mb-3"
                                    style = {{
                                        color: '#6b7200'
                                    }}>
                                        {project.desc}
                                    </p>
                                    <div
                                    className = 'flex flex-wrap gap-1.5 mb-4'> {project.tags.map((tag,idx) => (
                                        <span 
                                        key = {idx}
                                        style = {{
                                            backgroundColor: '#374151',
                                            color: '#d1d5db'
                                        }}
                                        className = 'px-2 py-1 text-xs rounded-full'>
                                            {tag}
                                        </span>
                                    ))}
                                    </div>
                                    <div className='flex gap-2'> 
                                        <a href = '#'
                                        style = {{
                                            backgroundColor: '#374151',
                                            color: 'white'
                                        }}
                                        className='flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-sm rounded-lg hover:opacity-90 transition-colors'
                                        data-aos= 'zoom-in' 
                                        data-aos-delay = '300'>
                                        
                                            <FaGithub className = 'text-sm'/>
                                            <span> Code</span>
                                        </a>
                                        </div>
                                    </div>
                            </div>

                    ))}

                </div>
            </div>
        </section>
    )
}

export default Project
