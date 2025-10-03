
const DishesCard = (props) => {
    return (
        <div className=" w-full lg:w-1/4 p-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg">
            <img className=" rounded-xl" src={props.img} alt="img" />
            <div className=" space-y-4">
                <h3 className=" font-4xl text-center text-xl pt-6">{props.title}</h3>
            </div>
        </div>
    );
};

export default DishesCard;