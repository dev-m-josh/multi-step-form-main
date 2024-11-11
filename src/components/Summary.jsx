import React from 'react';

export default function Summary({ goToPreviousStep, goToNextStep, handlePlanChange, selectedPlan, isYearly, selectedAddOns }) {
  // Render the selected add-ons
  const renderAddOns = () => {
    return Object.keys(selectedAddOns).map((title) => {
      const { selected, price } = selectedAddOns[title];
      if (selected) {
        return (
          <div className="add-ons-data" key={title}>
            <p>{title}</p>
            <h4>{price}</h4>
          </div>
        );
      }
      return null;
    });
  };

  return (
    <div className="summary">
      <h1>Finishing Up</h1>
      <p>Double-check everything looks OK before confirming.</p>
      <div className="selected-data">
        <div className="duration">
          <div style={{ marginLeft: '15px' }}>
            <h3>{selectedPlan.name} ({isYearly ? 'Yearly' : 'Monthly'})</h3>
            <p onClick={handlePlanChange}>change</p>
          </div>
          <h4>{isYearly ? selectedPlan.yearlyPrice : selectedPlan.monthlyPrice}</h4>
        </div>
        <hr />
        <div className="selected-add-ons">
          {renderAddOns()}
        </div>
      </div>
      <div className="totals">
        <p>Total ({isYearly ? 'per year' : 'per month'})</p>
      </div>
      <div className="buttons">
        <button onClick={goToPreviousStep} className="go-back">Go Back</button>
        <button onClick={goToNextStep} className="confirm">Confirm</button>
      </div>
    </div>
  );
}
