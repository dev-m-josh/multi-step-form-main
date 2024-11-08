import React, { useState } from 'react';

export default function Plan({goToPreviousStep}) {
  // State to manage if the user selected "yearly" or "monthly" plan
  const [isYearly, setIsYearly] = useState(false);

  // State to store the selected plan object
  const [selectedPlan, setSelectedPlan] = useState(null);

  // Function to toggle between monthly and yearly plans
  const handleToggle = () => {
    setIsYearly((prevState) => !prevState);
  };

  // Function to handle the selection of a plan
  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
  };

  // Array of available plans with their prices and icons
  const plans = [
    {
      name: 'Arcade',
      monthlyPrice: '$9/mo', 
      yearlyPrice: '$90/yr',
      freeMonths: '2 months free',
      imageUrl: '/images/icon-arcade.svg',
    },
    {
      name: 'Advanced',
      monthlyPrice: '$12/mo',
      yearlyPrice: '$120/yr',
      freeMonths: '2 months free',
      imageUrl: '/images/icon-advanced.svg',
    },
    {
      name: 'Pro',
      monthlyPrice: '$15/mo',
      yearlyPrice: '$150/yr',
      freeMonths: '2 months free',
      imageUrl: '/images/icon-pro.svg',
    },
  ];

  return (
    <section className="plan">
      <header className="top">
        <h1>Select your plan</h1>
        <p>You have the option of monthly or yearly billing.</p>

        <div className="options">
          {/* Map through each plan in the 'plans' array */}
          {plans.map((plan) => (
            <div
              key={plan.name} // Each plan should have a unique 'key'
              className={`payment-option ${selectedPlan?.name === plan.name ? 'selected' : ''}`}
              onClick={() => handlePlanSelect(plan)}
            >
              <img src={plan.imageUrl} alt={`${plan.name} plan icon`} />
              <div className="payment-level">
                <h4>{plan.name}</h4>
                {/* display the price based on whether the user has selected the yearly option */}
                <p>{isYearly ? plan.yearlyPrice : plan.monthlyPrice}</p>
                {/* If yearly is selected, show the '2 months free' message */}
                {isYearly && <span>{plan.freeMonths}</span>}
              </div>
            </div>
          ))}
        </div>

        {/* Toggle for monthly or yearly selection */}
        <div className="payment-term">
          <button
            onClick={() => setIsYearly(false)} // Set to monthly
            className={!isYearly ? 'active' : ''}
          >
            Monthly
          </button>
          <input
            type="checkbox"
            checked={isYearly}
            onChange={handleToggle}
            aria-label="Toggle billing period"
          />
          <button
            onClick={() => setIsYearly(true)} // Set to yearly
            className={isYearly ? 'active' : ''} // Add active class to yearly button when it's selected
          >
            Yearly
          </button>
        </div>
      </header>

      <div className="buttons">
        <button onClick={goToPreviousStep} className="go-back">Go Back</button>
        <button className="next-step">Next Step</button>
      </div>
    </section>
  );
}
