import GoogleMap from "./GoogleMap";
import { useState, useEffect } from 'react';
import heroImage from '../assets/img/hero.jpeg';

const Home = () => {
    const [scrollY, setScrollY] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="bg-gradient-to-b from-slate-50 to-white">
            <section id="tophome" className="relative overflow-hidden pt-32">
                {/* Animated gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-pink-500/20 to-orange-500/20 animate-pulse pointer-events-none" style={{ animationDuration: '8s' }} />

                {/* Hero section */}
                <div
                    className="min-h-screen flex flex-row justify-between items-center lg:px-32 px-5 bg-cover bg-no-repeat relative"
                    style={{
                        transform: `translateY(${scrollY * 0.5}px)`,
                        backgroundImage: `url(${heroImage})`
                    }}
                >
                    {/* Dark overlay for better text contrast */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />

                    {/* Content */}
                    <div className={`w-full lg:w-2/3 space-y-8 relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        {/* Decorative element */}
                        <div className="flex items-center gap-3 mb-6">
                            <div className="h-1 w-12 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full animate-pulse" />
                            <span className="text-orange-400 font-medium tracking-wider text-sm uppercase">Welcome to Alex Food Corner</span>
                        </div>

                        <h1 className="text-white font-bold text-5xl lg:text-6xl leading-tight">
                            Uplift Your Inner Foodie with{' '}
                            <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 bg-clip-text text-transparent animate-pulse">
                                Every Moment
                            </span>{' '}
                            of Bite.
                        </h1>
                        <div className="h-1 w-100 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full animate-pulse" />
                        <p className="text-gray-200 text-lg leading-relaxed max-w-2xl">
                            Waking up early with the cool air unlocks hours of delicious time in the morning.
                            Eat up your breakfast now at Alex Food Corner.
                        </p>

                    </div>
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2 animate-bounce">
                        <div className="w-1 h-3 bg-white/70 rounded-full" />
                    </div>
                </div>
            </section>

            {/* Map section with elegant framing */}
            <div id="googlemap" className="relative py-16 lg:py-24">
                {/* Background decoration */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-50/30 to-transparent pointer-events-none" />

                <div className="max-w-7xl mx-auto px-5 lg:px-32 relative z-10">
                    {/* Section header */}
                    <div className="text-center mb-12">
                        <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 bg-clip-text text-transparent mb-4">
                            Visit Us Today
                        </h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            Find us on the map and experience the perfect blend of taste and ambiance
                        </p>
                    </div>

                    {/* Map container with shadow and border */}
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition duration-500" />
                        <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
                            {/* Replace this div with your GoogleMap component */}
                            <div>
                                <GoogleMap />
                            </div>
                        </div>
                    </div>

                    {/* Button section */}
                    <div className="text-center mt-12">
                        <div className="inline-block">
                            <div className="relative group">
                                <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full blur opacity-50 group-hover:opacity-75 transition duration-300" />
                                <div className="relative">
                                    <a
                                        href="https://maps.app.goo.gl/xPyqUg9RhsaCiQvA7"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center gap-2"
                                    >
                                        <span>📍</span>
                                        <span>Open in Google Maps</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;