import { GiHamburgerMenu } from 'react-icons/gi';
import { IoClose } from 'react-icons/io5';

const Button = ({
    text,
    disabled = false,
    variant = 'primary',
    rounded = false,
    icon = false,
    onClick,
}) => {
    return (
        <button
            className={variant === 'primary'
                ? `bg-red-500 hover:bg-red-700 transition ease-in-out text-white text-sm 
                ${rounded ? 'px-2 py-1 rounded' : 'w-40 h-8 shadow-custom font-semibold'}
                ${disabled && 'cursor-not-allowed bg-gray-300 hover:bg-gray-300'}`
                : variant === 'secondary'
                    ? `bg-gray-500 hover:bg-gray-700 transition ease-in-out text-white text-sm ${rounded ? 'px-2 py-1 rounded' : 'w-40 h-8 shadow-custom font-semibold'}`
                    : 'bg-transparent'}
            onClick={onClick}
            disabled={disabled}
        >
            {text}
            {icon && <span>
                {variant === "burger" && <GiHamburgerMenu className="h-10" />}
                {variant === "close" && <IoClose className="text-xl text-gray-600" />}
            </span>}
        </button>
    )
};

export default Button;