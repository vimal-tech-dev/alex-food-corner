import DishesCard from "../layouts/DishesCard";
/* Menu Images */
import menu1 from "../assets/img/menu/AFC-Menu - 1.jpg";
import menu2 from "../assets/img/menu/AFC-Menu - 2.jpg";
import menu3 from "../assets/img/menu/AFC-Menu - 3.jpg";
import menu4 from "../assets/img/menu/AFC-Menu - 4.jpg";
import menu5 from "../assets/img/menu/AFC-Menu - 5.jpg";
import menu6 from "../assets/img/menu/AFC-Menu - 6.jpg";

const Menu = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center lg:px-32 px-5 bg-backgroundColor py-4">
      <section id="topmenu">
        <h1 className=" text-4xl font-bold text-center pt-24 pb-10">
          Menu
        </h1>
      </section>
      <div className=" flex flex-wrap gap-8 justify-center">
        <DishesCard img={menu1} title="Page-1" />
        <DishesCard img={menu2} title="Page-2" />
        <DishesCard img={menu3} title="Page-3" />
        <DishesCard img={menu4} title="Page-4" />
        <DishesCard img={menu5} title="Page-5" />
        <DishesCard img={menu6} title="Page-6" />
      </div>
    </div>
  );
};

export default Menu;