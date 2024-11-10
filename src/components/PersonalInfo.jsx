import React from 'react';

export default function PersonalInfo({ goToNextStep, handlePersonalInfoChange, personalInfo }) {
  const handleInput = (e) => {
    handlePersonalInfoChange({ [e.target.name]: e.target.value });
  };

  return (
    <div className="personal-info">
      <h1>Personal info</h1>
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
      </div>

      <button onClick={goToNextStep} className="next-step">
        Next Step
      </button>
    </div>
  );
}
