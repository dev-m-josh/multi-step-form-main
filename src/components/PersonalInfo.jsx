import React, { useState } from 'react';
import Validator from './validator'; // import the validator function

export default function PersonalInfo({ goToNextStep, handlePersonalInfoChange, personalInfo }) {
  const [errors, setErrors] = useState({}); // Track validation errors

  // Handle input change
  const handleInput = (e) => {
    handlePersonalInfoChange({ [e.target.name]: e.target.value });
  };

  // Handle form submission (click "Next Step")
  const handleNextStep = () => {
    const validationErrors = Validator(personalInfo); // Run the validation function

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors); // If errors, set them in the state
    } else {
      goToNextStep(); // If no errors, proceed to the next step
    }
  };

  return (
    <div className="personal-info">
      <h1>Personal Info</h1>
      <p>Please provide your name, email address, and phone number.</p>
      
      <div className="info-input">
        <h4>Name:</h4>
        <input
          type="text"
          name="name"
          placeholder="John Doe"
          value={personalInfo.name}
          onChange={handleInput}
        />
        {errors.Name && <p className="error">{errors.Name}</p>} {/* Display error */}
      </div>
      
      <div className="info-input">
        <h4>Email Address:</h4>
        <input
          type="email"
          name="email"
          placeholder="emailexample@gmail.com"
          value={personalInfo.email}
          onChange={handleInput}
        />
        {errors.Email && <p className="error">{errors.Email}</p>} {/* Display error */}
      </div>

      <div className="info-input">
        <h4>Phone Number:</h4>
        <input
          type="tel"
          name="phone"
          placeholder="eg: 0712345678"
          value={personalInfo.phone}
          onChange={handleInput}
        />
        {errors.Phone && <p className="error">{errors.Phone}</p>} {/* Display error */}
      </div>

      <button onClick={handleNextStep} className="next-step">
        Next Step
      </button>
    </div>
  );
}
