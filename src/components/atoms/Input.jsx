import React from 'react'

const Input = ({
    onChange,
    id,
    value,
    invalid,
    type = 'text',
    placeholder
}) => {
    return (
        <input
            className={`font-normal border border-gray-300 text-gray-900 text-sm rounded-lg
             focus:border-gray-500 block w-full p-2.5 outline-none
              ${invalid && 'focus:border-red-500'}`}
            type={type}
            id={id}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
        />
    )
};

export default Input;