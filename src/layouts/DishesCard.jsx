import { useState, useEffect } from 'react';

const DishesCard = ({ img, title, category }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className={`w-full lg:w-1/4 md:w-1/3 sm:w-1/2 p-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative group">
                {/* Gradient glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition duration-500" />
                
                <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:scale-105">
                    {/* Image container */}
                    <div className="relative overflow-hidden h-64">
                        <img 
                            src={img} 
                            alt={title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        {/* Overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        
                        {/* Category badge */}
                        {category && (
                            <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg">
                                {category}
                            </div>
                        )}
                    </div>
                    
                    {/* Content */}
                    <div className="p-5">
                        <h3 className="text-lg font-bold text-gray-800 group-hover:text-orange-600 transition-colors duration-300">
                            {title}
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DishesCard;