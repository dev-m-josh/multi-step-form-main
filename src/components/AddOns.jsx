import React from 'react';

function AddOn({ title, description, price, isSelected, onSelect }) {
  return (
    <div
      className={`add-on ${isSelected ? 'selected' : ''}`}
      onClick={() => onSelect(title, price)} // When the add-on is clicked, toggle its selection
    >
      <div className="left">
        <input
          type="checkbox"
          id={title}
          checked={isSelected}
          onChange={() => onSelect(title, price)} // Toggle selection on checkbox change
        />
        <div className="add-on-type">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
      <span>{price}</span>
    </div>
  );
}

export default function AddOns({ goToPreviousStep, goToNextStep, isYearly, handleSelect, selectedAddOns }) {
  console.log(selectedAddOns);
  
  // Sample add-ons data
  const addOnsData = [
    {
      title: 'Online service',
      description: 'Access to multiplayer games', 
      monthlyPrice: '$1/mo',
      yearlyPrice: '$10/yr' 
    },
    {
      title: 'Larger storage', 
      description: 'Extra 1TB of cloud storage',
      monthlyPrice: '$2/mo',
      yearlyPrice: '$20/yr'
    },
    { 
      title: 'Customizable profile',
      description: 'Custom theme on your profile', 
      monthlyPrice: '$2/mo',
      yearlyPrice: '$20/yr' 
    },
  ];

  return (
    <div className="add-ons">
      <h1>Pick add-ons</h1>
      <p>Add-ons help enhance your gaming experience.</p>
      <div className="pick-add-on">
        {addOnsData.map((addOn) => {
          const price = isYearly ? addOn.yearlyPrice : addOn.monthlyPrice;
          const isSelected = selectedAddOns[addOn.title]?.selected || false;
          return (
            <AddOn
              key={addOn.title}
              title={addOn.title}
              description={addOn.description}
              price={price}
              isSelected={isSelected}
              onSelect={handleSelect} 
            />
          );
        })}
      </div>
      <div className="buttons">
        <button onClick={goToPreviousStep} className="go-back">Go Back</button>
        <button disabled={Object.keys(selectedAddOns).length === 0} onClick={goToNextStep} className="next-step">Next Step</button>
      </div>
    </div>
  );
}
