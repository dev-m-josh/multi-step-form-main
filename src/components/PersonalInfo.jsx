import React, { useState } from 'react'
import Validator from './validator';

export default function PersonalInfo() {
    const [values, setValues] =useState({
        name: '',
        email: '',
        phone: ''
    });

    const [errors, setErrors] = useState({});

    function handleInput(e) {
        setValues({...values, [e.target.name]: e.target.value})
    }

  return (
    <div className='personal-info'>
      <h1>Personal info</h1>
      <p>Please provide your name, email address, and phone number.</p>
      <div className='info-input'>
        <h4>Name:</h4>
        <input
            type="text"
            placeholder='John Doe' 
            name='name'
            onChange={handleInput}
        />
      </div>
      <div className='info-input'>
        <h4>Email Address:</h4>
        <input
            type="email" 
            placeholder='emailexample@gmail.com'
            name='email'
            onChange={handleInput}
        />
      </div>
      <div className='info-input'>
        <h4>Phone Number:</h4>
        <input
         type="number"
          placeholder='eg: 0712345678'
          name='phone'
          onChange={handleInput}
        />
      </div>
      <button type='submit'>Next Step</button>
    </div>
  )
}
