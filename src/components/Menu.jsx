import { useState, useEffect } from 'react';
import { ZoomIn, Download, ChevronLeft, ChevronRight } from 'lucide-react';
/* Menu Images */
import menu1 from "../assets/img/menu/AFC-Menu - 1.jpg";
import menu2 from "../assets/img/menu/AFC-Menu - 2.jpg";
import menu3 from "../assets/img/menu/AFC-Menu - 3.jpg";
import menu4 from "../assets/img/menu/AFC-Menu - 4.jpg";
import menu5 from "../assets/img/menu/AFC-Menu - 5.jpg";
import menu6 from "../assets/img/menu/AFC-Menu - 6.jpg";
import menu7 from "../assets/img/menu/AFC-Menu - 7.jpg";
import menu8 from "../assets/img/menu/AFC-Menu - 8.jpg";
import menu9 from "../assets/img/menu/AFC-Menu - 9.jpg";

// MenuCard Component - Optimized for vertical menu images
const MenuCard = ({ img, title, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), index * 100);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div
      className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative group">
        {/* Gradient glow effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 rounded-3xl blur-xl opacity-0 group-hover:opacity-60 transition duration-500" />

        <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
          {/* Image container - Optimized for vertical menu cards */}
          <div className="relative overflow-hidden">
            <img
              src={img}
              alt={title}
              className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105"
            />

            {/* Overlay with actions */}
            <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
              <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-300"
                style={{ transform: isHovered ? 'translateY(0)' : 'translateY(20px)' }}>
                <h3 className="text-white text-2xl font-bold mb-4">{title}</h3>
              </div>
            </div>

            {/* Page number badge */}
            <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-bold px-4 py-2 rounded-full shadow-lg">
              {title}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Menu = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Menu images data - Replace these URLs with your actual menu images
  const menuPages = [
    { img: menu1, title: "Page 1" },
    { img: menu2, title: "Page 2" },
    { img: menu3, title: "Page 3" },
    { img: menu4, title: "Page 4" },
    { img: menu5, title: "Page 5" },
    { img: menu6, title: "Page 6" },
    { img: menu7, title: "Page 7" },
    { img: menu8, title: "Page 8" },
    { img: menu9, title: "Page 9" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 py-20">
      {/* Floating background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s' }} />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-pink-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '7s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-200/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '9s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-20">
        {/* Header Section */}
        <section id="topmenu" className="text-center mb-16 pt-16">
          <div className="inline-block">
            {/* Decorative line */}
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-1 w-16 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full animate-pulse" />
              <span className="text-orange-500 font-semibold tracking-widest text-sm uppercase">Our Complete Menu</span>
              <div className="h-1 w-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full animate-pulse" />
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Menu
            </h1>

            <p className="text-gray-600 text-lg max-w-2xl mx-auto mt-4">
              Browse through our full menu and discover all the delicious options we have to offer
            </p>

            {/* Quick stats */}
            <div className="flex flex-wrap justify-center gap-6 mt-8">
              <div className="flex items-center gap-2 text-gray-700">
                <div className="w-10 h-10 bg-orange-500/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <span className="text-xl">📋</span>
                </div>
                <span className="text-sm font-medium">{menuPages.length} Pages</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <div className="w-10 h-10 bg-pink-500/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <span className="text-xl">🍽️</span>
                </div>
                <span className="text-sm font-medium">50+ Items</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <div className="w-10 h-10 bg-purple-500/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <span className="text-xl">⭐</span>
                </div>
                <span className="text-sm font-medium">Premium Quality</span>
              </div>
            </div>
          </div>
        </section>

        {/* Menu Grid - Optimized for vertical menu cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {menuPages.map((page, index) => (
            <MenuCard key={index} {...page} index={index} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center py-12">
          <div className="bg-gradient-to-r from-orange-50 via-pink-50 to-purple-50 rounded-3xl p-12 shadow-xl">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Ready to Order?
            </h3>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Contact us now to place your order or visit us at our location for a delightful dining experience
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <div className="relative group inline-block">
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full blur opacity-50 group-hover:opacity-75 transition duration-300" />
                {/* Phone Link */}
                <a href="tel:+917016145578">
                  <button className="relative px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-bold rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2">
                    <span>📞</span>
                    <span>Call to Order</span>
                  </button>
                </a>
              </div>

              <a
                href="https://maps.app.goo.gl/xPyqUg9RhsaCiQvA7"
                target="_blank"
                rel="noopener noreferrer">
                <button className="px-8 py-4 bg-white text-gray-700 font-semibold rounded-full border-2 border-gray-200 hover:border-orange-500 hover:text-orange-500 hover:scale-105 transition-all duration-300 flex items-center gap-2">
                  <span>📍</span>
                  <span>Visit Us</span>
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">🕐</span>
            </div>
            <h4 className="font-bold text-gray-800 mb-2">Opening Hours</h4>
            <p className="text-gray-600 text-sm">Daily: 9AM - 9PM</p>
          </div>

          <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">🏍️</span>
            </div>
            <h4 className="font-bold text-gray-800 mb-2">Two Wheeler</h4>
            <p className="text-gray-600 text-sm">Free Parking Available</p>
          </div>

          <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">📞</span>
            </div>
            <h4 className="font-bold text-gray-800 mb-2">Confirm Available Items</h4>
            <p className="text-gray-600 text-sm">Call for Book Your Order</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;