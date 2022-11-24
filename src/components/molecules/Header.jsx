import React from 'react'
import Button from '../atoms/Button'
import Title from '../atoms/Title'

const Header = () => {
    return (
        <div className='sm:items-center w-full flex justify-between items-top'>
            <Title variant='uppercase' text='Stock Center' />
            <Title variant='red' text='Items in stock' />
            <Button icon variant='burger' />
        </div>
    )
};

export default Header;