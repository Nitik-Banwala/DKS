const Button = ({ text, className, onClick }) => {
    return (
        <button
            onClick={onClick}
            className={`cursor-pointer duration-500 transform ${className} `}
        >
            {text}
        </button>
    );
};

export default Button;