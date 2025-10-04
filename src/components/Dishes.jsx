import DishesCard from "../layouts/DishesCard";
import img1 from "../assets/img/vada pav/vada pav - 1.png";
import img2 from "../assets/img/vada pav/vada pav - 2.png";
import img3 from "../assets/img/vada pav/vada pav - 3.png";
import img4 from "../assets/img/vada pav/vada pav - 4.png";
import img5 from "../assets/img/samosa/Samosa - 1.jpg";
import img8 from "../assets/img/samosa/Samosa - 4.jpg";
import img9 from "../assets/img/samosa/Samosa - 5.jpg";
import img10 from "../assets/img/samosa/Samosa - 6.jpg";
// Import Burger
import img11 from "../assets/img/burger/Burger - 1.jpg";
import img12 from "../assets/img/burger/Burger - 2.jpg";
import img13 from "../assets/img/burger/Burger - 3.jpg";
import img14 from "../assets/img/burger/Burger - 4.jpg";
// Import French Fries
import img17 from "../assets/img/french fries/French Fries - 1.jpg";
import img18 from "../assets/img/french fries/French Fries - 2.jpg";
import img19 from "../assets/img/french fries/French Fries - 3.jpg";
import img21 from "../assets/img/french fries/French Fries - 5.jpg";
import img22 from "../assets/img/french fries/French Fries - 6.jpg";
import img23 from "../assets/img/french fries/French Fries - 7.jpg";
import img24 from "../assets/img/french fries/French Fries - 8.png";
import img25 from "../assets/img/french fries/French Fries - 9.png";
// Import Miscellaneous
import img26 from "../assets/img/miscellaneous/Miscellaneous - 1.jpg";
import img27 from "../assets/img/miscellaneous/Miscellaneous - 2.jpg";
import img28 from "../assets/img/miscellaneous/Miscellaneous - 3.jpg";
import img29 from "../assets/img/miscellaneous/Miscellaneous - 4.jpg";
import img30 from "../assets/img/miscellaneous/Miscellaneous - 5.jpg";
import img31 from "../assets/img/miscellaneous/Miscellaneous - 6.jpg";
// Import Routing
import { Link } from "react-router-dom";

const Dishes = () => {
    return (
        <div className=" min-h-screen flex flex-col justify-center items-center lg:px-32 px-5 bg-backgroundColor py-4">
            <Link to="/dishes">
                <h1 className=" text-4xl font-bold text-center pt-24 pb-10">
                    Dishes
                </h1>
            </Link>
            {/* Alex Food Corner Special */}
            <section id="afcspecial" className=" flex flex-wrap gap-8 justify-center">
                <h2 className="text-2xl font-semibold text-center">Alex Food Corner Special</h2>
            </section><br />
            <div className=" flex flex-wrap gap-8 justify-center">
                <DishesCard img={img26} title="Cold Drink" />
                <DishesCard img={img27} title="Cheese Garlic Bread Dish" />
                <DishesCard img={img28} title="Salad Dish" />
                <DishesCard img={img29} title="Vegetable Pizza Dish" />
                <DishesCard img={img30} title="Peri Peri Cheesy Pizza Dish" />
                <DishesCard img={img31} title="Sandwich Dish" />
            </div><br />
            {/* Vada Pav Section */}
            <section id="vadapav" className=" flex flex-wrap gap-8 justify-center">
                <h2 className="text-2xl font-semibold text-center">Vada Pav Dishes</h2>
            </section><br />
            <div className=" flex flex-wrap gap-8 justify-center">
                <DishesCard img={img1} title="Vada Pav Dish" />
                <DishesCard img={img2} title="Vada Pav Dish" />
                <DishesCard img={img3} title="Cheese Vada Pav Dish" />
                <DishesCard img={img4} title="Mayonnaise Vada Pav Dish" />
            </div><br />

            {/* French Fries Section */}
            <section id="frenchfries" className=" flex flex-wrap gap-8 justify-center">
                <h2 className="text-2xl font-semibold text-center">French Fries Dishes</h2>
            </section><br />
            <div className=" flex flex-wrap gap-8 justify-center">
                <DishesCard img={img17} title="Classic French Fries Dish" />
                <DishesCard img={img18} title="Cheese Fries Dish" />
                <DishesCard img={img19} title="Chili Cheese Fries Dish" />
                <DishesCard img={img21} title="Peri Peri Fries Dish" />
                <DishesCard img={img22} title="Poutine Fries Dish" />
                <DishesCard img={img23} title="Chutney Fries Dish" />
                <DishesCard img={img24} title="Poutine Fries Dish" />
                <DishesCard img={img25} title="Cheese Butter Fries Dish" />
            </div><br />
            {/* Burger Section */}
            <section id="burger" className=" flex flex-wrap gap-8 justify-center">
                <h2 className="text-2xl font-semibold text-center">Burger Dishes</h2>
            </section><br />
            <div className=" flex flex-wrap gap-8 justify-center">
                <DishesCard img={img11} title="Classic Burger Dish" />
                <DishesCard img={img12} title="Cheese Burger Dish" />
                <DishesCard img={img13} title="Veg-Patty Burger Dish" />
                <DishesCard img={img14} title="Veggie Burger Dish" />
            </div><br />
            {/* Samosa Section */}
            <section id="samosa" className=" flex flex-wrap gap-8 justify-center">
                <h2 className="text-2xl font-semibold text-center">Samosa Dishes</h2>
            </section><br />
            <div className=" flex flex-wrap gap-8 justify-center">
                <DishesCard img={img5} title="Punjabi Samosa Dish" />
                <DishesCard img={img8} title="Jalapeno Cheese Samosa Dish" />
                <DishesCard img={img9} title="Cheese Lovers Samosa Dish" />
                <DishesCard img={img10} title="Cream Cheese Samosa Dish" />
            </div>
        </div>
    );
};

export default Dishes;