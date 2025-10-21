const Button = (props) => {
    return (
        <div className="inline-block">
            <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full blur opacity-50 group-hover:opacity-75 transition duration-300" />
                <div className="relative">
                    <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300">
                        <a
                            href="https://maps.app.goo.gl/xPyqUg9RhsaCiQvA7"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2"
                        >
                            {props.title}
                        </a>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Button;