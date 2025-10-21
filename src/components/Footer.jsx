import logo from '/footer-icon.png';

const Footer = () => {
    // Simulated HashLink - replace with actual react-router-hash-link in your project
    const HashLink = ({ to, children, className }) => (
        <a href={to} className={className}>
            {children}
        </a>
    );

    return (
        <div className="bg-gradient-to-b from-gray-900 to-black text-white rounded-t-3xl mt-16">
            <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-10 gap-8">
                {/* Brand Section */}
                <div className="w-full md:w-1/3">
                    <HashLink to="/home#tophome" className="inline-block">
                        <div className="flex items-center gap-3 mb-4 group cursor-pointer">
                            <div>
                                <img src={logo} alt="Alex Food Corner Logo" className="h-10 w-auto rounded-lg" />
                            </div>
                            <div>
                                <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                                    AFC
                                </h1>
                                <p className="text-xs text-gray-400">Alex Food Corner</p>
                            </div>
                        </div>
                    </HashLink>
                    <p className="text-orange-300 font-medium leading-relaxed">
                        At. Saidham Apartment Kosamba Road, Dadiya Falia - Valsad.
                    </p>

                    {/* Social Links or Additional Info */}
                    <div className="mt-6 flex gap-4">
                        <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-orange-500 transition-all cursor-pointer">
                            <span className="text-xl">🍕</span>
                        </div>
                        <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-pink-500 transition-all cursor-pointer">
                            <span className="text-xl">🍔</span>
                        </div>
                        <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-purple-500 transition-all cursor-pointer">
                            <span className="text-xl">🍟</span>
                        </div>
                    </div>
                </div>

                {/* Quick Links Section */}
                <div className="w-full md:w-1/4">
                    <h2 className="font-bold text-xl mb-4 bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
                        Quick Links
                    </h2>
                    <nav className="flex flex-col gap-3">
                        <HashLink
                            to="/home#tophome"
                            className="text-gray-300 hover:text-orange-400 transition-all cursor-pointer flex items-center gap-2 group"
                        >
                            <span className="w-0 h-0.5 bg-orange-400 group-hover:w-4 transition-all duration-300"></span>
                            Home
                        </HashLink>
                        <HashLink
                            to="/dishes#topdishes"
                            className="text-gray-300 hover:text-orange-400 transition-all cursor-pointer flex items-center gap-2 group"
                        >
                            <span className="w-0 h-0.5 bg-orange-400 group-hover:w-4 transition-all duration-300"></span>
                            Dishes
                        </HashLink>
                        <HashLink
                            to="/menu#topmenu"
                            className="text-gray-300 hover:text-orange-400 transition-all cursor-pointer flex items-center gap-2 group"
                        >
                            <span className="w-0 h-0.5 bg-orange-400 group-hover:w-4 transition-all duration-300"></span>
                            Menu
                        </HashLink>
                        <HashLink
                            to="/home#googlemap"
                            className="text-gray-300 hover:text-orange-400 transition-all cursor-pointer flex items-center gap-2 group"
                        >
                            <span className="w-0 h-0.5 bg-orange-400 group-hover:w-4 transition-all duration-300"></span>
                            Location
                        </HashLink>
                    </nav>
                </div>

                {/* Contact Section */}
                <div className="w-full md:w-1/3">
                    <section id="contactus">
                        <h2 className="font-bold text-xl mb-4 bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
                            Contact Us
                        </h2>
                    </section>
                    <nav className="flex flex-col gap-4">
                        {/* Phone Link */}
                        <a
                            href="tel:+917016145578"
                            className="text-orange-300 hover:text-orange-400 font-medium transition-all flex items-center gap-3 group"
                        >
                            <div className="w-10 h-10 bg-orange-500/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-orange-500/30 transition-all">
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
                            </div>
                            <div>
                                <span className="text-xs text-gray-400 block">Tap to order</span>
                                <span className="text-sm">+91 70 161 455 78</span>
                            </div>
                        </a>

                        {/* WhatsApp Button */}
                        <a
                            href="https://wa.me/917016145578?text=Hello!%20I%20want%20to%20order%20a%20food%20item."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-5 h-5"
                                viewBox="0 0 32 32"
                                fill="currentColor"
                            >
                                <path d="M16 .1C7.2.1.1 7.2.1 16c0 2.8.7 5.5 2.1 7.9L0 32l8.3-2.1c2.3 1.2 4.9 1.8 7.6 1.8 8.8 0 15.9-7.1 15.9-15.9S24.8.1 16 .1zm0 29.2c-2.4 0-4.7-.6-6.8-1.7l-.5-.3-4.9 1.2 1.3-4.8-.3-.5c-1.3-2-2-4.3-2-6.6C2.8 8.2 8.7 2.3 16 2.3c7.3 0 13.2 5.9 13.2 13.2 0 7.2-5.9 13-13.2 13zm7.5-9.8c-.4-.2-2.3-1.1-2.6-1.2-.3-.1-.5-.2-.8.2-.3.4-1 1.2-1.2 1.5-.2.3-.5.3-.9.1s-1.8-.7-3.4-2.1c-1.3-1.1-2.1-2.4-2.3-2.8-.2-.4 0-.6.1-.8.1-.2.3-.5.4-.7.1-.2.2-.3.3-.5.1-.2.1-.4 0-.6-.1-.2-.8-1.9-1.1-2.6-.3-.8-.6-.7-.8-.7h-.7c-.2 0-.6.1-.9.4-.3.4-1.1 1.1-1.1 2.6s1.1 3 1.3 3.2c.2.3 2.1 3.2 5.1 4.5 3.1 1.3 3.7 1.1 4.4 1 .7-.1 2.3-.9 2.6-1.8.3-.9.3-1.6.2-1.8-.1-.3-.3-.4-.7-.6z" />
                            </svg>
                            Order on WhatsApp
                        </a>
                    </nav>
                </div>
            </div>

            {/* Divider */}
            <div className="mx-8 md:mx-32 border-t border-gray-800"></div>

            {/* Bottom Section */}
            <div className="py-6 text-center">
                <p className="text-gray-400 text-sm">
                    © {new Date().getFullYear()} Alex Food Corner. All rights reserved.
                </p>
                <p className="text-gray-500 text-xs mt-2">
                    Developed with ❤️ by{" "}
                    <a
                        href="https://vimaltech.dev/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-orange-400 hover:text-orange-300 font-medium transition-all"
                    >
                        Vimal Tech
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Footer;