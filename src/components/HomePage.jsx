import React, { useState } from 'react';
import PersonalInfo from './PersonalInfo';
import Plan from './Plan';
import AddOns from './AddOns';
import Summary from './Summary';
import FinalStep from './FinalStep';

export default function HomePage() {
  // States to track personal information, selected plan, and add-ons
  const [personalInfo, setPersonalInfo] = useState({ name: '', email: '', phone: '' });
  const [selectedPlan, setSelectedPlan] = useState(null);
  // State to manage if the user selected "yearly" or "monthly" plan
  const [isYearly, setIsYearly] = useState(false);
  // Track selected add-ons in state
  const [selectedAddOns, setSelectedAddOns] = useState([]);
  console.log(selectedAddOns)

  

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

  // Function to update personal information
  const handlePersonalInfoChange = (newInfo) => {
    setPersonalInfo((prevInfo) => ({ ...prevInfo, ...newInfo }));
  };

  // Function to toggle between monthly and yearly plans
  const handleToggle = () => {
    setIsYearly((prevState) => !prevState);
  };
  
  // Function to handle the selection of a plan
  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
  };

  // function to change the plan
  function handlePlanChange() {
    setCurrentStep(prevStep => prevStep - 2);
  };

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
    <div className="home">
      <div className="steps">
        {/* Steps UI */}
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
        {/* Step 1: Personal Info */}
        {currentStep === 1 && <PersonalInfo goToNextStep={goToNextStep} handlePersonalInfoChange={handlePersonalInfoChange} personalInfo={personalInfo} />}

        {currentStep === 2 && <Plan goToPreviousStep={goToPreviousStep} goToNextStep={goToNextStep} handlePlanSelect={handlePlanSelect} selectedPlan={selectedPlan} handleToggle={handleToggle} isYearly={isYearly} setIsYearly={setIsYearly}/>}

        {currentStep === 3 && <AddOns goToPreviousStep={goToPreviousStep} goToNextStep={goToNextStep}  isYearly={isYearly} handleSelect={handleSelect} selectedAddOns={selectedAddOns}/>}

        {currentStep === 4 && <Summary goToPreviousStep={goToPreviousStep} goToNextStep={goToNextStep} handlePlanChange={handlePlanChange} selectedPlan={selectedPlan} isYearly={isYearly}/>}

        {/* Final Step (Confirmation) */}
        {currentStep === 5 && <FinalStep />}
      </div>
    </div>
  );
}
