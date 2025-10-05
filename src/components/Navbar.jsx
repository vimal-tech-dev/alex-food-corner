import { AiOutlineMenuUnfold, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import logo from '/logo-square.jpg';
import { HashLink } from "react-router-hash-link";

const Navbar = () => {

    const [menu, setMenu] = useState(false);

    const handleChange = () => {
        setMenu(!menu);
    };

    const closeMenu = () => {
        setMenu(false);
    };

    return (
        <div className=" fixed w-full">
            <div>
                <div className=" flex flex-row justify-between p-5 md:px-32 px-5 bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                    <div className=" flex flex-row items-center space-x-2 cursor-pointer" >
                        <HashLink to={"/home#tophome"}>
                            <img src={logo} alt="Alex Food Corner Logo" className="h-8 w-auto rounded-lg" />
                        </HashLink>
                        <HashLink to={"/home#tophome"}>
                            <h1 className=" text-3xl font-bold text-red-500 mix-blend-multiply italic">
                                AFC
                            </h1>
                        </HashLink>
                    </div>
                    <nav className="hidden md:flex flex-row items-center text-lg font-medium gap-8">
                        <HashLink
                            to="/home#tophome"
                            className='hover:text-brightColor transition-all cursor-pointer'>Home
                        </HashLink>
                        <div className="relative group">
                            <div className=" flex items-center gap-1">
                                <HashLink
                                    to="/dishes#topdishes"
                                    className='hover:text-brightColor transition-all cursor-pointer'>Dishes
                                </HashLink>
                                <BiChevronDown className="cursor-pointer" size={25} />
                            </div>

                            <ul className="absolute hidden space-y-2 group-hover:block bg-white border border-gray-300 rounded-lg p-5">
                                <li>
                                    <HashLink
                                        to="/dishes#afcspecial"

                                        smooth={true}
                                        duration={500}
                                        className="text-gray-800 hover:text-brightColor transition-all cursor-pointer"
                                        style={{ whiteSpace: 'nowrap' }}
                                    >
                                        AFC Special
                                    </HashLink>
                                </li>
                                <li>
                                    <HashLink
                                        to="/dishes#vadapav"

                                        smooth={true}
                                        duration={500}
                                        className="text-gray-800 hover:text-brightColor transition-all cursor-pointer"
                                        style={{ whiteSpace: 'nowrap' }}
                                    >
                                        Vada Pav
                                    </HashLink>
                                </li>
                                <li>
                                    <HashLink
                                        to="/dishes#frenchfries"

                                        smooth={true}
                                        duration={500}
                                        className="text-gray-800 hover:text-brightColor transition-all cursor-pointer"
                                        style={{ whiteSpace: 'nowrap' }}
                                    >
                                        French Fries
                                    </HashLink>
                                </li>
                                <li>
                                    <HashLink
                                        to="/dishes#burger"

                                        smooth={true}
                                        duration={500}
                                        className="text-gray-800 hover:text-brightColor transition-all cursor-pointer"
                                    >
                                        Burger
                                    </HashLink>
                                </li>
                                <li>
                                    <HashLink
                                        to="/dishes#samosa"

                                        smooth={true}
                                        duration={500}
                                        className="text-gray-800 hover:text-brightColor transition-all cursor-pointer"
                                    >
                                        Samosa
                                    </HashLink>
                                </li>
                            </ul>
                        </div>
                        <HashLink
                            to="/menu#topmenu"
                            className='hover:text-brightColor transition-all cursor-pointer'>Menu
                        </HashLink>
                        <HashLink
                            to="/home#googlemap"
                            className='hover:text-brightColor transition-all cursor-pointer'>Google Map
                        </HashLink>
                        <div>
                            <a
                                href="#contactus"
                                className='hover:text-brightColor transition-all cursor-pointer'
                            >
                                Contact Us
                            </a>
                        </div>
                    </nav>
                    <div className="md:hidden flex items-center">
                        {menu ?
                            (<AiOutlineClose size={25} onClick={handleChange} />) :
                            (<AiOutlineMenuUnfold size={25} onClick={handleChange} />)
                        }
                    </div>
                </div>
                <div className={` ${menu ? "translate-x-0" : "-translate-x-full"
                    } lg:hidden flex flex-col absolute bg-black text-white left-0 top-25 font-semibold text-xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300 ease-in-out z-10 `}>
                    <HashLink
                        to="/home#tophome"
                        className="hover:text-brightColor transition-all cursor-pointer bg-gray-400 text-black"
                        onClick={closeMenu}>Home
                    </HashLink>
                    <HashLink
                        to="/dishes#topdishes"
                        className='hover:text-brightColor transition-all cursor-pointer bg-gray-400 text-black'
                        onClick={closeMenu}>Dishes
                    </HashLink>
                    <HashLink
                        to="/dishes#afcspecial"
                        className='hover:text-brightColor transition-all cursor-pointer text-xs text-center text-yellow-400'
                        onClick={closeMenu}>AFC Special
                    </HashLink>
                    <HashLink
                        to="/dishes#vadapav"
                        className='hover:text-brightColor transition-all cursor-pointer text-xs text-center text-yellow-400'
                        onClick={closeMenu}>Vada Pav
                    </HashLink>
                    <HashLink
                        to="/dishes#frenchfries"
                        className='hover:text-brightColor transition-all cursor-pointer text-xs text-center text-yellow-400'
                        onClick={closeMenu}>French Fries
                    </HashLink>
                    <HashLink
                        to="/dishes#burger"
                        className='hover:text-brightColor transition-all cursor-pointer text-xs text-center text-yellow-400'
                        onClick={closeMenu}>Burger
                    </HashLink>
                    <HashLink
                        to="/dishes#samosa"
                        className='hover:text-brightColor transition-all cursor-pointer text-xs text-center text-yellow-400'
                        onClick={closeMenu}>Samosa
                    </HashLink>
                    <HashLink
                        to="/menu#topmenu"
                        className='hover:text-brightColor transition-all cursor-pointer bg-gray-400 text-black' onClick={closeMenu}>Menu
                    </HashLink>
                    <HashLink
                        to="/home#googlemap"
                        className='hover:text-brightColor transition-all cursor-pointer bg-gray-400 text-black' onClick={closeMenu}>Google Map
                    </HashLink>
                    <a
                        href="#contactus"
                        className='hover:text-brightColor transition-all cursor-pointer bg-gray-400 text-black' onClick={closeMenu}
                    >
                        Contact Us
                    </a>
                </div>
            </div>
        </div>
    )
}
export default Navbar;
