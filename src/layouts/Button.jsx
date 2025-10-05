
const Button = (props) => {
    return (
        <div>
            <button className="px-6 py-3 border-2 border-brightColor text-brightColor hover:bg-blue-800 bg-blue-600 hover:text-white transition rounded-xl shadow-2xl hover:scale-105 duration-300 ease-in-out">
                <a href="https://maps.app.goo.gl/xPyqUg9RhsaCiQvA7"
                    target="_blank"
                    rel="noopener noreferrer">
                    {props.title}
                </a>
            </button>
        </div>
    );
};

export default Button;