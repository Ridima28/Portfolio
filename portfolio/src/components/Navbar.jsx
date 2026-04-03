import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { name: 'Home', link: '#home' },
        { name: 'About', link: '#about' },
        { name: 'Skills', link: '#skills' },
        { name: 'Projects', link: '#projects' },
        { name: 'Contact', link: '#contact' },
    ];

    const colors = {
        navBg: "bg-gradient-to-br from-gray-700 to-black",
        textPrimary: "text-white",
        textSecondary: "text-gray-300",
        textActive: "text-purple-400",
        indicator: "from-orange-400 to-amber-300",
        button: "from-purple-500 to-blue-500",
    };

    const handleNavClick = (itemName) => {
        setActiveSection(itemName.toLowerCase());
        setIsMenuOpen(false);
    };

    return (
        <div className="flex justify-center w-full fixed z-50 mt-4">
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className={`flex items-center justify-center ${colors.navBg} backdrop-blur-lg rounded-2xl px-4 lg:px-8 py-2 shadow-lg`}>
                <div className="flex items-center justify-between w-full space-x-6 lg:space-x-8">
                    <motion.a
                        href="/"
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center space-x-2">
                        <span className={`text-xl font-bold ${colors.textPrimary}`}>
                            Portfolio<span className="text-purple-500">.</span>
                        </span>
                    </motion.a>

                    <div className="hidden lg:flex items-center space-x-6">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.link}
                                onClick={() => handleNavClick(item.name)}
                                className="relative pb-1">
                                <motion.span
                                    className={`font-medium transition-colors duration-300 ${
                                        activeSection === item.name.toLowerCase()
                                            ? colors.textActive
                                            : `${colors.textSecondary} hover:text-purple-500`
                                    }`}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {item.name}
                                </motion.span>
                                {activeSection === item.name.toLowerCase() && (
                                    <motion.div
                                        layoutId="navbar-indicator"
                                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                        className={`absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r ${colors.indicator} rounded-full`}
                                    />
                                )}
                            </a>
                        ))}
                    </div>
                    <div className="hidden lg:block">
                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`px-6 py-2 font-semibold rounded-full bg-gradient-to-r ${colors.button} text-white shadow-md hover:shadow-lg transition-shadow`}
                        >
                            Hire Me
                        </motion.a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex lg:hidden items-center px-2">
                        <motion.button
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="p-2 rounded-lg bg-gray-700"
                        >
                            {isMenuOpen ? (
                                <X className="w-5 h-5 text-white" />
                            ) : (
                                <Menu className="w-5 h-5 text-white" />
                            )}
                        </motion.button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="absolute top-full left-0 right-0 mt-2 lg:hidden bg-gray-900/95 backdrop-blur-lg rounded-xl shadow-lg border border-gray-700"
                    >
                        <div className="px-6 py-6 flex flex-col items-center space-y-4">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.link}
                                    onClick={() => handleNavClick(item.name)}
                                    className="block"
                                >
                                    <motion.div
                                        whileHover={{ x: 5 }}
                                        className={`py-3 px-4 rounded-lg text-center ${
                                            activeSection === item.name.toLowerCase()
                                                ? 'bg-gray-800'
                                                : ''
                                        }`}
                                    >
                                        <span
                                            className={`font-medium ${
                                                activeSection === item.name.toLowerCase()
                                                    ? colors.textActive
                                                    : colors.textSecondary
                                            }`}
                                        >
                                            {item.name}
                                        </span>
                                    </motion.div>
                                </a>
                            ))}

                            <motion.a
                                href="#contact"
                                onClick={() => setIsMenuOpen(false)}
                                whileTap={{ scale: 0.95 }}
                                className={`block py-3 px-4 text-center font-semibold rounded-lg bg-gradient-to-r ${colors.button} text-white shadow-md`}>
                                Hire Me
                            </motion.a>
                        </div>
                    </motion.div>
                )}
            </motion.nav>
        </div>
    );
};

export default Navbar;