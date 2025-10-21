import { useState, useEffect } from 'react';
import DishesCard from "../layouts/DishesCard";

// Import AFC Special images
import afcSpecial1 from "../assets/img/afc-special/afcSpecial-1.jpeg";
import afcSpecial2 from "../assets/img/afc-special/afcSpecial-2.jpeg";
import afcSpecial3 from "../assets/img/afc-special/afcSpecial-3.jpeg";
import afcSpecial4 from "../assets/img/afc-special/afcSpecial-4.jpeg";
import afcSpecial5 from "../assets/img/afc-special/afcSpecial-5.jpeg";
import afcSpecial6 from "../assets/img/afc-special/afcSpecial-6.jpeg";
// Import vadapav
import img1 from "../assets/img/vada pav/vada pav - 1.png";
import img2 from "../assets/img/vada pav/vada pav - 2.png";
import img3 from "../assets/img/vada pav/vada pav - 3.png";
import img4 from "../assets/img/vada pav/vada pav - 4.png";
// Import French Fries
import img5 from "../assets/img/french fries/French Fries - 1.jpg";
import img6 from "../assets/img/french fries/French Fries - 2.jpg";
import img7 from "../assets/img/french fries/French Fries - 3.jpg";
import img8 from "../assets/img/french fries/French Fries - 5.jpg";
import img9 from "../assets/img/french fries/French Fries - 6.jpg";
import img10 from "../assets/img/french fries/French Fries - 7.jpg";
import img11 from "../assets/img/french fries/French Fries - 8.png";
import img12 from "../assets/img/french fries/French Fries - 9.png";
// Import Burger
import img13 from "../assets/img/burger/Burger-1.jpeg";
import img14 from "../assets/img/burger/Burger-2.jpeg";
import img15 from "../assets/img/burger/Burger-3.jpeg";
import img16 from "../assets/img/burger/Burger-4.jpeg";
// Import Samosa
import img17 from "../assets/img/samosa/Samosa - 1.jpg";
import img18 from "../assets/img/samosa/Samosa - 4.jpg";
import img19 from "../assets/img/samosa/Samosa - 5.jpg";
import img20 from "../assets/img/samosa/Samosa - 6.jpg";

// Section Header Component
const SectionHeader = ({ id, title, subtitle }) => {
    return (
        <section id={id} className="w-full text-center mb-12">
            <div className="inline-block">
                <div className="flex items-center justify-center gap-3 mb-3">
                    <div className="h-1 w-12 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full" />
                    <span className="text-orange-500 font-medium tracking-wider text-sm uppercase">{subtitle}</span>
                    <div className="h-1 w-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full" />
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
                    {title}
                </h2>
            </div>
        </section>
    );
};

const Dishes = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Placeholder images - replace with your actual imports
    const dishesData = {
        afcSpecial: [
            { img: afcSpecial1, title: "Cold Drink", category: "Beverages" },
            { img: afcSpecial2, title: "Cheese Garlic Bread", category: "Special" },
            { img: afcSpecial3, title: "Fresh Salad", category: "Healthy" },
            { img: afcSpecial4, title: "Vegetable Pizza", category: "Pizza" },
            { img: afcSpecial5, title: "Peri Peri Cheesy Pizza", category: "Pizza" },
            { img: afcSpecial6, title: "Sandwich", category: "Quick Bites" }
        ],
        vadaPav: [
            { img: img1, title: "Classic Vada Pav", category: "Traditional" },
            { img: img2, title: "Special Vada Pav", category: "Special" },
            { img: img3, title: "Cheese Vada Pav", category: "Cheesy" },
            { img: img4, title: "Mayo Vada Pav", category: "Creamy" }
        ],
        frenchFries: [
            { img: img5, title: "Classic French Fries", category: "Classic" },
            { img: img6, title: "Cheese Fries", category: "Cheesy" },
            { img: img7, title: "Chili Cheese Fries", category: "Spicy" },
            { img: img8, title: "Peri Peri Fries", category: "Spicy" },
            { img: img9, title: "Poutine Fries", category: "Loaded" },
            { img: img10, title: "Chutney Fries", category: "Fusion" },
            { img: img11, title: "Premium Poutine", category: "Premium" },
            { img: img12, title: "Cheese Butter Fries", category: "Rich" }
        ],
        burgers: [
            { img: img13, title: "Classic Burger", category: "Classic" },
            { img: img14, title: "Cheese Burger", category: "Cheesy" },
            { img: img15, title: "Veg-Patty Burger", category: "Veggie" },
            { img: img16, title: "Veggie Delight Burger", category: "Loaded" }
        ],
        samosas: [
            { img: img17, title: "Punjabi Samosa", category: "Traditional" },
            { img: img18, title: "Jalapeno Cheese Samosa", category: "Spicy" },
            { img: img19, title: "Cheese Lovers Samosa", category: "Cheesy" },
            { img: img20, title: "Cream Cheese Samosa", category: "Premium" }
        ]
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 py-20">
            {/* Floating background elements */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-orange-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s' }} />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-20">
                {/* Main Header */}
                <section id="topdishes" className="text-center mb-20 pt-16">
                    <div className="inline-block">
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <div className="h-1 w-16 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full animate-pulse" />
                            <span className="text-orange-500 font-semibold tracking-widest text-sm uppercase">Our Menu</span>
                            <div className="h-1 w-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full animate-pulse" />
                        </div>
                        <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 bg-clip-text text-transparent mb-4">
                            Delicious Dishes
                        </h1>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            Explore our handcrafted menu filled with mouthwatering delights
                        </p>
                    </div>
                </section>

                {/* AFC Special Section */}
                <SectionHeader
                    id="afcspecial"
                    title="AFC Special"
                    subtitle="Signature Collection"
                />
                <div className="flex flex-wrap -mx-4 mb-20">
                    {dishesData.afcSpecial.map((dish, index) => (
                        <DishesCard key={index} {...dish} />
                    ))}
                </div>

                {/* Vada Pav Section */}
                <SectionHeader
                    id="vadapav"
                    title="Vada Pav"
                    subtitle="Mumbai's Favorite"
                />
                <div className="flex flex-wrap -mx-4 mb-20">
                    {dishesData.vadaPav.map((dish, index) => (
                        <DishesCard key={index} {...dish} />
                    ))}
                </div>

                {/* French Fries Section */}
                <SectionHeader
                    id="frenchfries"
                    title="French Fries"
                    subtitle="Crispy & Golden"
                />
                <div className="flex flex-wrap -mx-4 mb-20">
                    {dishesData.frenchFries.map((dish, index) => (
                        <DishesCard key={index} {...dish} />
                    ))}
                </div>

                {/* Burger Section */}
                <SectionHeader
                    id="burger"
                    title="Burgers"
                    subtitle="Juicy & Satisfying"
                />
                <div className="flex flex-wrap -mx-4 mb-20">
                    {dishesData.burgers.map((dish, index) => (
                        <DishesCard key={index} {...dish} />
                    ))}
                </div>

                {/* Samosa Section */}
                <SectionHeader
                    id="samosa"
                    title="Samosas"
                    subtitle="Crispy & Flavorful"
                />
                <div className="flex flex-wrap -mx-4 mb-20">
                    {dishesData.samosas.map((dish, index) => (
                        <DishesCard key={index} {...dish} />
                    ))}
                </div>

                {/* Call to Action */}
                <div className="text-center py-16">
                    <div className="inline-block">
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full blur opacity-50 group-hover:opacity-75 transition duration-300" />
                            {/* Phone Link */}
                            <a href="tel:+917016145578">
                                <button className="relative px-10 py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-bold text-lg rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300">
                                    Order Your Favorites Now
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dishes;