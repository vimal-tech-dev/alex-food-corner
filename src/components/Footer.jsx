import { HashLink } from "react-router-hash-link";

const Footer = () => {
    return (
        <div className=" bg-black text-white rounded-t-3xl ">
            <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-10">
                <div className=" w-full md:w-1/4">
                    <HashLink to={"/home#tophome"}>
                        <h1 className=" font-semibold text-xl pb-4 hover:text-brightColor transition-all cursor-pointer">
                            Alex Food Corner
                        </h1>
                    </HashLink>
                    <p className=" font-medium text-yellow-400">
                        At. Saidham Apartment Kosamba Road, Dadiya Falia - Valsad.
                    </p>
                </div>
                <div>
                    <section id="contactus">
                        <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">
                            Contact Us
                        </h1>
                    </section>
                    <nav className=" flex flex-col gap-2">
                        {/* Contact info */}
                        <div className="flex flex-col md:flex-col gap-4">
                            <a
                                href="tel:+917016145578"
                                className="text-yellow-400 hover:text-brightColor font-medium transition flex gap-2"
                            >
                                {/* Optional phone icon */}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-5 h-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3 5.5a2 2 0 012-2h3.6a2 2 0 011.9 1.5l.7 3a2 2 0 01-.45 1.8l-2.1 2.1a16.3 16.3 0 006.6 6.6l2.1-2.1a2 2 0 011.8-.45l3 .7a2 2 0 011.5 1.9V19a2 2 0 01-2 2H5.5A2 2 0 013 19V5.5z"
                                    />
                                </svg>
                                +91 70 161 455 78
                            </a>
                            {/* WhatsApp Button */}
                            <a
                                href="https://wa.me/917016145578?text=Hello!%20I%20want%20to%20order%20a%20food%20item."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                                            flex items-center justify-center gap-1.5 
                                            bg-green-500 hover:bg-green-700 
                                            text-white 
                                            text-xs sm:text-sm md:text-base
                                            px-2.5 py-1 sm:px-3 sm:py-1.5 
                                            rounded-full shadow-sm 
                                            transition-all duration-300
                                        "
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5"
                                    viewBox="0 0 32 32"
                                    fill="currentColor"
                                >
                                    <path d="M16 .1C7.2.1.1 7.2.1 16c0 2.8.7 5.5 2.1 7.9L0 32l8.3-2.1c2.3 1.2 4.9 1.8 7.6 1.8 8.8 0 15.9-7.1 15.9-15.9S24.8.1 16 .1zm0 29.2c-2.4 0-4.7-.6-6.8-1.7l-.5-.3-4.9 1.2 1.3-4.8-.3-.5c-1.3-2-2-4.3-2-6.6C2.8 8.2 8.7 2.3 16 2.3c7.3 0 13.2 5.9 13.2 13.2 0 7.2-5.9 13-13.2 13zm7.5-9.8c-.4-.2-2.3-1.1-2.6-1.2-.3-.1-.5-.2-.8.2-.3.4-1 1.2-1.2 1.5-.2.3-.5.3-.9.1s-1.8-.7-3.4-2.1c-1.3-1.1-2.1-2.4-2.3-2.8-.2-.4 0-.6.1-.8.1-.2.3-.5.4-.7.1-.2.2-.3.3-.5.1-.2.1-.4 0-.6-.1-.2-.8-1.9-1.1-2.6-.3-.8-.6-.7-.8-.7h-.7c-.2 0-.6.1-.9.4-.3.4-1.1 1.1-1.1 2.6s1.1 3 1.3 3.2c.2.3 2.1 3.2 5.1 4.5 3.1 1.3 3.7 1.1 4.4 1 .7-.1 2.3-.9 2.6-1.8.3-.9.3-1.6.2-1.8-.1-.3-.3-.4-.7-.6z" />
                                </svg>
                                WhatsApp
                            </a>


                        </div>
                    </nav>
                </div>
            </div>
            {/* --- Bottom Section --- */}
            <div>
                <p className=" text-center py-4">
                    © {new Date().getFullYear()} developed by&nbsp;
                    <span className=" text-yellow-400 hover:text-brightColor">
                        <a href="https://vimaltech.dev/" target="_blank">
                            Vimal Tech
                        </a>
                    </span> | All rights reserved.
                </p>
            </div>
        </div>
    );
};

export default Footer;