import React, { useState } from 'react';

function AddOn({ title, description, price, isSelected, onSelect }) {
  return (
    <div
      className={`add-on ${isSelected ? 'selected' : ''}`}
      onClick={() => onSelect(title)} // When the add-on is clicked, toggle its selection
    >
      <div className="left">
        <input
          type="checkbox"
          id={title}
          checked={isSelected}
          onChange={() => onSelect()} // Toggle selection on checkbox change
        />
          <div className="add-on-type">
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
      </div>
      <span>+${price}/mo</span>
    </div>
  );
}

export default function AddOns({ goToPreviousStep, goToNextStep }) {
  // Track selected add-ons in state
  const [selectedAddOns, setSelectedAddOns] = useState([]);
  console.log(selectedAddOns)

  // Sample add-ons data
  const addOnsData = [
    {
      title: 'Online service',
      description: 'Access to multiplayer games', 
      price: 1 
    },
    {
      title: 'Larger storage', 
      description: 'Extra 1TB of cloud storage',
      price: 2 
    },
    { 
      title: 'Customizable profile',
      description: 'Custom theme on your profile', 
      price: 2 
    },
  ];

  // Toggle the selection of an add-on
  const handleSelect = (title) => {
    setSelectedAddOns((prevSelected) => {
      if (prevSelected.includes(title)) {
        return prevSelected.filter((item) => item !== title); // Deselect if already selected
      } else {
        return [...prevSelected, title]; // Select the add-on
      }
    });
  };

  return (
    <div className="add-ons">
      <h1>Pick add-ons</h1>
      <p>Add-ons help enhance your gaming experience.</p>
      <div className="pick-add-on">
        {addOnsData.map((addOn) => (
          <AddOn
            key={addOn.title}
            title={addOn.title}
            description={addOn.description}
            price={addOn.price}
            isSelected={selectedAddOns.includes(addOn.title)} // Check if the add-on is selected
            onSelect={handleSelect} // Pass the handleSelect function to toggle the selection
          />
        ))}
      </div>
      <div className="buttons">
        <button onClick={goToPreviousStep} className="go-back">Go Back</button>
        <button disabled={selectedAddOns.length === 0} onClick={goToNextStep} className="next-step">Next Step</button>
      </div>
    </div>
  );
}
