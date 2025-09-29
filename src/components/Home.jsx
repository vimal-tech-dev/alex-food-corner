import React from "react";

const Home = () => {
    return (
        <div className=" min-h-screen flex flex-row justify-between items-center lg:px-32 px-5 bg-[url('./assets/img/hero.jpg')] bg-cover bg-no-repeat ">
            <div className=" w-full lg:w-2/3 space-y-5">
                <h1 className=" text-backgroundColor font-semibold text-6xl">
                    Feel Each and Every Moment of Bite by doing Uplift Your Inner Foodie.

                </h1>
                <p className=" text-backgroundColor">
                    waking up at 7am with warm air unlocks 3hrs of delicious time in the morning. Eat up your breakfast now at Alex Food Corner.
                </p>
            </div>
        </div>
    );
};
export default Home;