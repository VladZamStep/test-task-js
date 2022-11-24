const Title = ({
    text,
    variant = 'primary'
}) => {
    return (
        <h1 className={
            variant === 'primary'
                ? 'font-semibold'
                : variant === 'error'
                    ? "font-semibold text-xs text-red-600"
                    : variant === 'red' ? 'text-red-500 font-semibold'
                        : variant === 'uppercase' && 'sm:w-fit sm:text-base w-[40px] uppercase text-sm'}
        >
            {text}
        </h1>
    )
};

export default Title;