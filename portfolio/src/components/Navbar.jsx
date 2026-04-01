import {useState} from 'react';
import {motion} from 'framer-motion';
import {Menu, X} from 'lucide-react';
import { Sun, Moon } from 'lucide-react';
export const Navbar = ({darkMode, toggleDarkMode}) =>{
    const [activeSection, setActiveSection] = useState('home');
    const [ isMenuOpen, setIsMenuOpen] = useState(false)

    const navItems = [
        {name:'Home', link: '#home'},
        {name:'About', link: '#about'},
        {name:'Skills', link: '#skills'},
        {name:'Projects', link: '#projects'},
        {name:'Contact', link: '#contact'},
    ];

    const lightColors = {
        navBg: "bg-linear-to-br from-purple-300 to-purple-500",
        textPrimary: "text-black-900",
        textSecondary: "text-black-800",
        textHover: "text-orange-500",
        textActive: "text-white-600",
        indicator: "from-blue-300 to-blue-500",
        button: "from-blue-300 to-blue-500",
        };


    const darkColors = {
        navBg: "bg-linear-to-br from-gray-700 to-black",
        textPrimary: "text-white",
        textSecondary: "text-gray-300",
        textHover: "text-orange-400",
        textActive: "text-purple-400",
        indicator: "from-orange-400 to-amber-300",
        button: "from-purple-500 to-blue-500",
        };

        const colors =  darkMode? darkColors: lightColors;

        const handleNavClick = (itemName) =>{
            setActiveSection(itemName.toLowerCase());
            setIsMenuOpen(false);
        };

        return (
            <div className = "flex justify-center w-full fixed z-50 mt-4"> 
            <motion.nav
            initial= {{y:-100}}
            animate = {{y:0}}
            transition = {{duration:0.5}}
            className = {`flex items-center justify-center ${colors.navBg} backdrop-blur-lg rounded-2xl px-4 lg:px-8 py-2 shadow-lg`}>
                <div className = "flex items-center justify-between w-full space-x-6 lg:space-x-8">

                    <motion.a
                    href = '/'
                    whileHover={{scale:1.05}}
                    className='flex items-center space-x-2'>
                        <span
                        className={`text-xl font-bold ${colors.textPrimary}`} >
                            Portfolio<span className ="text-purple-500">.</span>
                        </span>
                    </motion.a>
                    <div className = "hidden lg:flex    items-center space-x-6">
                        {navItems.map((item) => (
                            <a
                            key = {item.name}
                            href = {item.link}
                            onClick={()=> handleNavClick(item.name)}
                            className = "relative"
                            >
                                <motion.span className = {`font-medium transition-colors duration-300 ${
                                    activeSection ===item.name.toLowerCase()? colors.textActive: `${colors.textSecondary} hover:text-purple-500`}`}    
                                    whileHover = {{scale:1.05}}
                                    whileTap = {{scale: 0.95}}>
                                        {item.name}
                                        </motion.span>
                                        {activeSection === item.name.toLowerCase() && (
                                            <motion.div 
                                            layoutId = "navbar-indicator"
                                            className = {`absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r rounded-full ${colors.indicator}`}>
                                            </motion.div>
                                        )}
                            </a>
                        )
                        )}
                    </div>
                    <div className='flex  items-center space-x-2'>
                        <motion.button
                        onClick={toggleDarkMode}
                        className={`relative w-14 h-8 flex items-center rounded-full px-1 transition-colors duration-300 ${
                            darkMode ? 'bg-gray-700' : 'bg-gray-300'
                        }`}
                        >
                        <motion.div
                            animate={{ x: darkMode ? 24 : 0 }}
                            transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 20
                            }}
                            className={`w-6 h-6 rounded-full flex items-center justify-center shadow-md ${
                            darkMode ? 'bg-black' : 'bg-white'
                            }`}
                        >
                            {darkMode ? (
                            <Sun className="w-4 h-4 text-yellow-400" />
                            ) : (
                            <Moon className="w-4 h-4 text-gray-700" />
                            )}
                        </motion.div>
                        </motion.button>
                        <motion.a
                            href = "#contact"
                            whileHover = {{scale:1.05}}
                            whileTap = {{ scale:0.95 }}
                            className= {`hidden lg:block px-6 py-2 font-semibold rounded-full bg-linear-to-r ${colors.button} text-white shadow-md hover:shadow-lg transition-shadow`}>
                            Hire Me
                        
                        </motion.a>
                    </div>
                    <div className='flex lg:hidden items-center space-x-4 px-2'>
                            <motion.button
                            whileTap = {{scale:0.9}}
                            onClick = {() => setIsMenuOpen(!isMenuOpen)}
                            className={`p-2 rounded-lg ${darkMode ? "bg-gray-700" : "bg-gray-200"}`}
                            >
                                {isMenuOpen ? (
                                    <X className="w-5 h-5" />
                                ) : (
                                    <Menu className="w-5 h-5" />
                                )}

                            </motion.button>
                        
                    </div>
                </div>
                {isMenuOpen && (
                    <motion.div 
                    initial = {{opacity: 0, height: 0}}
                    animate = {{opacity: 1, height: 'auto'}}
                    exit = {{ opacity: 0, height: 0}}
                    transition={{duration: 0.3}}
                    className={`absolute top-full left-0 right-0 mt-2 lg:hidden ${darkMode ? 
                        'bg-gray-900/95'
                        : 'bg-white/95'
                    } backdrop-blur-lg rounded-xl shadow-lg border ${
                        darkMode ? 'border-gray-700': 'border-gray-200'
                    }`

                    }>
                        <div className="px-6 py-6 flex flex-col items-center space-y-4">
                            {navItems.map((item) => (
                                <a
                                key = {item.name}
                                href = {item.link}
                                onClick = {() => handleNavClick(item.name)}
                                className='block'>
                                    <motion.div
                                    whileHover = {{x:5}}
                                    className= {`py-3 px-4 rounded-lg text-center ${ activeSection === item.name.toLowerCase() ? darkMode? 'bg-gray-800': 'bg-orange-50' :
                                        ''
                                    }`} >
                                        <span 
                                        className= {`font-medium ${
                                            activeSection === item.name.toLowerCase() 
                                            ? colors.textActive
                                            : colors.textSecondary
                                        }`}>
                                            {item.name}

                                        </span>
                                    </motion.div>
                                </a>
                            ))}
                            <motion.a
                            href = "#contact"
                            onClick = {() => setIsMenuOpen(false)}
                            whileTap = {{ scale: 0.95}}
                            className = {`block py-3 px-4 text-center font-semibold rounded-lg bg-linear-to-r ${colors.button} text-white shadow-md`}
                            >Hire Me
                            </motion.a>
                        </div>
                        </motion.div>
                )}
            </motion.nav>
            </div>
        )
}

export default Navbar;