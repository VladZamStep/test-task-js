import React, { useState } from 'react'
import { isEmpty, isNegative } from '../../services/validation';
import { dateFormatter } from '../../utils/dateFormatter';
import Button from '../atoms/Button';
import DateInput from '../atoms/DateInput';
import ErrorMessage from '../atoms/ErrorMessage';
import Input from '../atoms/Input';
import Label from '../atoms/Label';
import Title from '../atoms/Title';

const ItemModel = ({ onCreateElement }) => {

  const [show, setShow] = useState(false);

  const initialState = {
    title: '',
    price: 0,
    date: dateFormatter(),
  }

  const initialValid = {
    title: false,
    price: true,
  }

  const initialErrors = {
    title: '',
    price: '',
  };

  const [element, setElement] = useState(initialState);
  const [isValid, setIsValid] = useState(initialValid);
  const [formErrors, setFormErrors] = useState(initialErrors);

  const handleShow = () => {
    setShow(!show)
  }

  const handleChange = (e) => {
    let newformErrors = formErrors;
    switch (e.target.id) {
      case 'title':
        if (isEmpty(e.target.value)) {
          setIsValid(prev => ({ ...prev, title: false }));
          newformErrors.title = 'Empty field';
        }
        else {
          setIsValid(prev => ({ ...prev, title: true }));
          setElement(prev => ({ ...prev, [e.target.id]: e.target.value }));
          newformErrors.title = '';
        }
        break;
      case 'price':
        if (isNegative(e.target.value)) {
          setIsValid(prev => ({ ...prev, price: false }));
          newformErrors.price = 'Invalid price';
        }
        else {
          setIsValid(prev => ({ ...prev, price: true }));
          setElement(prev => ({ ...prev, [e.target.id]: (Number(e.target.value) === 0) ? "" : Number(e.target.value) }));
          newformErrors.price = '';
        }
        break;
      default:
        setElement(prev => ({ ...prev, [e.target.id]: e.target.value }));
        break;
    }
    setFormErrors(newformErrors);
  }
  const handleSubmit = () => {
    fetch('http://localhost:8800/products', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(element)
    }).then(response => {
      return response.json();
    })
      .then(data => {
        onCreateElement(data);
      });
    setShow(false);
  }

  return (
    <>
      <div className="fixed bottom-3 left-2/4 translate-x-[-50%]">
        <Button text="New item" onClick={handleShow} />
      </div>
      {show &&
        <div className="fixed top-0 left-0 w-full h-full bg-black/25 z-10 flex justify-center items-center">
          <div className="relative bg-white max-w-lg w-11/12 flex justify-center items-center flex-col rounded-md">
            <div className="p-3 w-full flex justify-between items-center border-b">
              <Title text="New item" />
              <Button
                icon
                variant="close"
                rounded
                onClick={handleShow}
              />
            </div>
            <div className="p-5 w-full">
              <form>
                <div className="flex flex-col">
                  <Label text="Title" />
                  <Input
                    id="title"
                    invalid={!isValid.title}
                    onChange={handleChange}
                    placeholder="Title"
                  />
                  <ErrorMessage text={formErrors.title} />
                  <Label text="Price" />
                  <Input
                    invalid={!isValid.price}
                    type="number"
                    id="price"
                    onChange={handleChange}
                    placeholder="12"
                  />
                  <ErrorMessage text={formErrors.price} />
                  <Label text="Date and time" />
                  <DateInput
                    id="date"
                    value={element.date}
                    onChange={handleChange}
                  />
                </div>
              </form>
            </div>
            <div className="p-5 w-full flex justify-end gap-2 border-t">
              <Button
                variant="secondary"
                text="Close"
                rounded
                onClick={handleShow}
              />
              <Button
                variant="primary"
                text="Add"
                rounded
                onClick={handleSubmit}
                disabled={!isValid.title || !isValid.price}
              />
            </div>
          </div>
        </div >
      }
    </>
  )
};

export default ItemModel;