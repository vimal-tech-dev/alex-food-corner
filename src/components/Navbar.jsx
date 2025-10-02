import React from "react";
<<<<<<< HEAD
=======
// import { Link } from "react-scroll";
>>>>>>> 38e710a (Navbar Section wise link completed)
import { Link } from "react-router-dom";
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
                        <Link to={"/"}>
                            <img src={logo} alt="Alex Food Corner Logo" className="h-8 w-auto rounded-lg" />
                        </Link>
                        <Link to={"/"}>
                            <h1 className=" text-3xl font-bold text-red-500 mix-blend-multiply italic">
                                AFC
                            </h1>
                        </Link>
                    </div>
                    <nav className="hidden md:flex flex-row items-center text-lg font-medium gap-8">
                        <Link
                            to="/home"
                            className='hover:text-brightColor transition-all cursor-pointer'>Home
                        </Link>
                        <div className="relative group">
                            <div className=" flex items-center gap-1">
                                <Link
                                    to="/dishes"
                                    className='hover:text-brightColor transition-all cursor-pointer'>Dishes
                                </Link>
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
                        <Link
                            to="/menu"
                            className='hover:text-brightColor transition-all cursor-pointer'>Menu
                        </Link>
                        <Link
                            to="/contact us"
                            className='hover:text-brightColor transition-all cursor-pointer'>Contact Us
                        </Link>
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
                    <Link
                        to="/home"
                        className="hover:text-brightColor transition-all cursor-pointer"
                        onClick={closeMenu}
                    ></Link>
                    <Link
                        to="/dishes"
                        className='hover:text-brightColor transition-all cursor-pointer'
                        onClick={closeMenu}>Dishes
                    </Link>
                    <HashLink
                        to="/dishes#afcspecial"
                        className='hover:text-brightColor transition-all cursor-pointer text-xs text-center'
                        onClick={closeMenu}>AFC Special
                    </HashLink>
                    <HashLink
                        to="/dishes#vadapav"
                        className='hover:text-brightColor transition-all cursor-pointer text-xs text-center'
                        onClick={closeMenu}>Vada Pav
                    </HashLink>
                    <HashLink
                        to="/dishes#frenchfries"
                        className='hover:text-brightColor transition-all cursor-pointer text-xs text-center'
                        onClick={closeMenu}>French Fries
                    </HashLink>
                    <HashLink
                        to="/dishes#burger"
                        className='hover:text-brightColor transition-all cursor-pointer text-xs text-center'
                        onClick={closeMenu}>Burger
                    </HashLink>
                    <HashLink
                        to="/dishes#samosa"
                        className='hover:text-brightColor transition-all cursor-pointer text-xs text-center'
                        onClick={closeMenu}>Samosa
                    </HashLink>
                    <Link
                        to="menu"
                        className='hover:text-brightColor transition-all cursor-pointer'>Menu
                    </Link>
                    <Link
                        to="contact us"
                        className='hover:text-brightColor transition-all cursor-pointer'>Contact Us
                    </Link>
                </div>
            </di>
        </div>
    )
}
export default Navbar;
