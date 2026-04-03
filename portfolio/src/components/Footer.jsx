import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer 
        style ={{
            background: 'linear-gradient(to bottom, #000000, #111827)',
        borderColor: '#374151',
        }}
        className='border-t'
        >
            <div className='container mx-auto px-4 py-8'>
                <div className = 'flex flex-col md:flex-row justify-between items-center gap-6'>
                    <div className = 'text-center md:text-left'>
                        <h3 
                        className = 'text-2xl font-bold mb-2' 
                        style = {{
                            background: 'linear-gradient(to right, #f97316, #f59e0b)',
                            WebkitBackgroundClip:'text',
                            backgroundClip:'text',
                            color:'transparent'
                        }}>
                            Portfolio
                        </h3>
                        <p 
                        className = 'text-sm'
                        style = {{
                            color: '#9ca3af'
                        }}>
                            Full Stack Developer & UI/UX Designer
                        </p>
                    </div>
                    <div className ='flex gap-4'>
                        <a 
                        href = '#'
                        className="w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition-all hover:bg-linear-to-r hover:from-purple-500 hover:to-blue-500 hover:text-white dark:bg-[#f3f4f6] text-white dark:text-[#374151]">
                            <FaGithub/> 
                        </a>
                        <a
                        href="#"
                        className="w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition-all hover:bg-linear-to-r hover:from-purple-500 hover:to-blue-500 hover:text-white dark:bg-[#f3f4f6] text-white dark:text-[#374151]">
                        <FaLinkedin />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
