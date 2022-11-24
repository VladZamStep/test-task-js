const DateInput = ({
    id,
    value,
    readonly = false,
    onChange
}) => {

    return (
        <>
            <input
                value={value}
                id={id}
                type="datetime-local"
                onChange={onChange}
                className="font-normal border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-gray-500 block w-full p-2.5 outline-none"
                disabled={readonly}
            >
            </input>
        </>
    )
};

export default DateInput;