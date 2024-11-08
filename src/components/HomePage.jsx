import React, { useState } from 'react';
import PersonalInfo from './PersonalInfo';
import Plan from './Plan';
import AddOns from './AddOns';

export default function HomePage() {
  // State to track the current step
  const [currentStep, setCurrentStep] = useState(1);

  // Function to go to the next step
  const goToNextStep = () => {
    setCurrentStep(prevStep => prevStep + 1);
  };

  // Function to go back to the previous step
  const goToPreviousStep = () => {
    setCurrentStep(prevStep => prevStep - 1);
  };

  return (
    <div className="home">
      <div className="steps">
        <div className="step-number">
          <span>1</span>
          <div className="step-info">
            <p>STEP 1</p>
            <h4>YOUR INFO</h4>
          </div>
        </div>
        <div className="step-number">
          <span>2</span>
          <div className="step-info">
            <p>STEP 2</p>
            <h4>SELECT PLAN</h4>
          </div>
        </div>
        <div className="step-number">
          <span>3</span>
          <div className="step-info">
            <p>STEP 3</p>
            <h4>ADD-ONS</h4>
          </div>
        </div>
        <div className="step-number">
          <span>4</span>
          <div className="step-info">
            <p>STEP 4</p>
            <h4>SUMMARY</h4>
          </div>
        </div>
      </div>

      <div className="right">
        {/* {currentStep === 1 && <PersonalInfo goToNextStep={goToNextStep} />}
        {currentStep === 2 && <Plan goToPreviousStep={goToPreviousStep} />} */}
        <AddOns/>
      </div>
    </div>
  );
}
