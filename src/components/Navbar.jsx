import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from '/logo-square.jpg';

const Navbar = () => {
    const [menu, setMenu] = useState(false);

    const handleChange = () => {
        setMenu(!menu);
    };

    const closeMenu = () => {
        setMenu(false);
    };

    // Simulated HashLink - replace with actual react-router-hash-link in your project
    const HashLink = ({ to, children, className, onClick, style }) => (
        <a href={to} className={className} onClick={onClick} style={style}>
            {children}
        </a>
    );

    return (
        <div className="fixed w-full z-50">
            <div>
                {/* Main Navbar */}
                <div className="flex flex-row justify-between items-center p-5 md:px-32 px-5 bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100">
                    {/* Logo Section */}
                    <div className="flex flex-row items-center space-x-3 cursor-pointer group">
                        <HashLink to="/home#tophome">
                            <img src={logo} alt="Alex Food Corner Logo" className="h-20 w-auto rounded-lg" />
                        </HashLink>
                        <HashLink to="/home#tophome">
                            <div>
                                <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                                    AFC
                                </h1>
                                <p className="text-xl text-gray-500 font-medium">Alex Food Corner</p>
                            </div>
                        </HashLink>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex flex-row items-center text-base font-medium gap-8">
                        <HashLink
                            to="/home#tophome"
                            className="text-gray-700 hover:text-orange-500 transition-all cursor-pointer relative group"
                        >
                            Home
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-pink-500 group-hover:w-full transition-all duration-300"></span>
                        </HashLink>

                        {/* Dishes Dropdown */}
                        <div className="relative group">
                            <div className="flex items-center gap-1 text-gray-700 hover:text-orange-500 transition-all cursor-pointer">
                                <HashLink to="/dishes#topdishes">
                                    Dishes
                                </HashLink>
                                <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
                            </div>

                            <ul className="absolute top-full left-0 mt-2 hidden group-hover:block bg-white border border-gray-100 rounded-xl shadow-xl p-3 min-w-[180px] before:content-[''] before:absolute before:-top-2 before:left-0 before:right-0 before:h-2">
                                <li className="mb-2">
                                    <HashLink
                                        to="/dishes#afcspecial"
                                        className="block px-4 py-2 text-gray-700 hover:bg-gradient-to-r hover:from-orange-50 hover:to-pink-50 hover:text-orange-600 rounded-lg transition-all cursor-pointer"
                                        style={{ whiteSpace: 'nowrap' }}
                                    >
                                        🌟 AFC Special
                                    </HashLink>
                                </li>
                                <li className="mb-2">
                                    <HashLink
                                        to="/dishes#vadapav"
                                        className="block px-4 py-2 text-gray-700 hover:bg-gradient-to-r hover:from-orange-50 hover:to-pink-50 hover:text-orange-600 rounded-lg transition-all cursor-pointer"
                                        style={{ whiteSpace: 'nowrap' }}
                                    >
                                        🥔 Vada Pav
                                    </HashLink>
                                </li>
                                <li className="mb-2">
                                    <HashLink
                                        to="/dishes#frenchfries"
                                        className="block px-4 py-2 text-gray-700 hover:bg-gradient-to-r hover:from-orange-50 hover:to-pink-50 hover:text-orange-600 rounded-lg transition-all cursor-pointer"
                                        style={{ whiteSpace: 'nowrap' }}
                                    >
                                        🍟 French Fries
                                    </HashLink>
                                </li>
                                <li className="mb-2">
                                    <HashLink
                                        to="/dishes#burger"
                                        className="block px-4 py-2 text-gray-700 hover:bg-gradient-to-r hover:from-orange-50 hover:to-pink-50 hover:text-orange-600 rounded-lg transition-all cursor-pointer"
                                    >
                                        🍔 Burger
                                    </HashLink>
                                </li>
                                <li>
                                    <HashLink
                                        to="/dishes#samosa"
                                        className="block px-4 py-2 text-gray-700 hover:bg-gradient-to-r hover:from-orange-50 hover:to-pink-50 hover:text-orange-600 rounded-lg transition-all cursor-pointer"
                                    >
                                        🥟 Samosa
                                    </HashLink>
                                </li>
                            </ul>
                        </div>

                        <HashLink
                            to="/menu#topmenu"
                            className="text-gray-700 hover:text-orange-500 transition-all cursor-pointer relative group"
                        >
                            Menu
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-pink-500 group-hover:w-full transition-all duration-300"></span>
                        </HashLink>

                        <HashLink
                            to="/home#googlemap"
                            className="text-gray-700 hover:text-orange-500 transition-all cursor-pointer relative group"
                        >
                            Location
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-pink-500 group-hover:w-full transition-all duration-300"></span>
                        </HashLink>

                        <a
                            href="#contactus"
                            className="px-6 py-2.5 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300"
                        >
                            Contact Us
                        </a>
                    </nav>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={handleChange}
                            className="text-gray-700 hover:text-orange-500 transition-all p-2"
                        >
                            {menu ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <div
                    className={`${menu ? "translate-x-0" : "-translate-x-full"
                        } md:hidden flex flex-col absolute bg-gradient-to-b from-gray-900 to-black text-white left-0 top-full font-medium text-lg pt-6 pb-6 gap-1 w-full h-screen transition-transform duration-300 ease-in-out overflow-y-auto`}
                >
                    <HashLink
                        to="/home#tophome"
                        className="px-8 py-4 hover:bg-white/10 transition-all cursor-pointer border-b border-gray-800"
                        onClick={closeMenu}
                    >
                        🏠 Home
                    </HashLink>

                    <HashLink
                        to="/dishes#topdishes"
                        className="px-8 py-4 hover:bg-white/10 transition-all cursor-pointer border-b border-gray-800"
                        onClick={closeMenu}
                    >
                        🍽️ Dishes
                    </HashLink>

                    <div className="bg-gray-800/50 py-2">
                        <HashLink
                            to="/dishes#afcspecial"
                            className="px-12 py-3 text-sm text-orange-300 hover:text-orange-400 hover:bg-white/5 transition-all cursor-pointer block"
                            onClick={closeMenu}
                        >
                            ⭐ AFC Special
                        </HashLink>
                        <HashLink
                            to="/dishes#vadapav"
                            className="px-12 py-3 text-sm text-orange-300 hover:text-orange-400 hover:bg-white/5 transition-all cursor-pointer block"
                            onClick={closeMenu}
                        >
                            🥔 Vada Pav
                        </HashLink>
                        <HashLink
                            to="/dishes#frenchfries"
                            className="px-12 py-3 text-sm text-orange-300 hover:text-orange-400 hover:bg-white/5 transition-all cursor-pointer block"
                            onClick={closeMenu}
                        >
                            🍟 French Fries
                        </HashLink>
                        <HashLink
                            to="/dishes#burger"
                            className="px-12 py-3 text-sm text-orange-300 hover:text-orange-400 hover:bg-white/5 transition-all cursor-pointer block"
                            onClick={closeMenu}
                        >
                            🍔 Burger
                        </HashLink>
                        <HashLink
                            to="/dishes#samosa"
                            className="px-12 py-3 text-sm text-orange-300 hover:text-orange-400 hover:bg-white/5 transition-all cursor-pointer block"
                            onClick={closeMenu}
                        >
                            🥟 Samosa
                        </HashLink>
                    </div>

                    <HashLink
                        to="/menu#topmenu"
                        className="px-8 py-4 hover:bg-white/10 transition-all cursor-pointer border-b border-gray-800"
                        onClick={closeMenu}
                    >
                        📋 Menu
                    </HashLink>

                    <HashLink
                        to="/home#googlemap"
                        className="px-8 py-4 hover:bg-white/10 transition-all cursor-pointer border-b border-gray-800"
                        onClick={closeMenu}
                    >
                        📍 Location
                    </HashLink>

                    <a
                        href="#contactus"
                        className="px-8 py-4 hover:bg-white/10 transition-all cursor-pointer"
                        onClick={closeMenu}
                    >
                        📞 Contact Us
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;