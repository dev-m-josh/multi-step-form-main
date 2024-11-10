import React from 'react'

export default function Summary({goToPreviousStep, goToNextStep, handlePlanChange, selectedPlan}) {

    console.log(selectedPlan)
  return (
    <div className='summary'>
        <h1>Finishing Up</h1>
        <p>Double-check everything looks OK before confirming.</p>
        <div className='selected-data'>
            <div className='duration'>
                <div style={{marginLeft: '15px'}}>
                    <h3>Arcade (Monthly)</h3>
                    <p onClick={handlePlanChange}>change</p>
                </div>
                <h4>{selectedPlan.monthlyPrice}</h4>
            </div>
            <hr />
            <div className='selected-add-ons'>
                <div className='add-ons-data'>
                    <p>Online service</p>
                    <h4>+$1/mo</h4>
                </div>
            </div>
        </div>
        <div className='totals'>
            <p>Total (per month)</p>
            <h3>+$12/mo</h3>
        </div>
        <div className="buttons">
        <button onClick={goToPreviousStep} className="go-back">Go Back</button>
        <button onClick={goToNextStep} className="confirm">Confirm</button>
      </div>
    </div>
  )
}
