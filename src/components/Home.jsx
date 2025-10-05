import GoogleMap from "./GoogleMap";
import Button from "../layouts/Button";

const Home = () => {
    return (
        <div className="bg-backgroundColor">
            <section id="tophome">
                <div className=" min-h-screen flex flex-row justify-between items-center lg:px-32 px-5 bg-[url('./assets/img/hero.jpg')] bg-cover bg-no-repeat">
                    <div className=" w-full lg:w-2/3 space-y-5">
                        <h1 className=" text-backgroundColor font-semibold text-4xl">
                            Uplift Your Inner Foodie with Every Moment of Bite.
                        </h1>
                        <p className=" text-backgroundColor">
                            Waking up early with the cool air unlocks an hours of delicious time in the morning. Eat up your breakfast now at Alex Food Corner.
                        </p>
                    </div>
                </div>
            </section>
            <div>
                <GoogleMap />
            </div>
            <div className="text-center pt-4 pb-10">
                <Button title="📍 Open in Google Maps" />
            </div>
        </div>
    );
};
export default Home;