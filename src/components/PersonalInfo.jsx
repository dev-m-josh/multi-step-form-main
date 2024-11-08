import React, { useState } from 'react';
import Validator from './validator';

export default function PersonalInfo() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const [errors, setErrors] = useState({});

  function handleInput(e) {
    setValues({ ...values, [e.target.name]: e.target.value });
  }

  function handleValidation(e) {
    e.preventDefault();
    setErrors(Validator(values));

    // If there are no errors, move to the next step
    if (Object.keys(errors).length === 0) {
    }
  }

  return (
    <div className="personal-info">
      <h1>Personal info</h1>
      <p>Please provide your name, email address, and phone number.</p>
      <div className="info-input">
        <h4>Name:</h4>
        <input
          type="text"
          placeholder="John Doe"
          name="name"
          onChange={handleInput}
        />
        {errors.Name && <p style={{ color: 'red', margin: 0 }}>{errors.Name}</p>}
      </div>
      <div className="info-input">
        <h4>Email Address:</h4>
        <input
          type="email"
          placeholder="emailexample@gmail.com"
          name="email"
          onChange={handleInput}
        />
        {errors.Email && <p style={{ color: 'red', margin: 0 }}>{errors.Email}</p>}
      </div>
      <div className="info-input">
        <h4>Phone Number:</h4>
        <input
          type="number"
          placeholder="eg: 0712345678"
          name="phone"
          onChange={handleInput}
        />
        {errors.Phone && <p style={{ color: 'red', margin: 0 }}>{errors.Phone}</p>}
      </div>
      <button onClick={handleValidation} type="submit" className="next-step">
        Next Step
      </button>
    </div>
  );
}
