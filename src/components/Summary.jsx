import React from 'react'

export default function Summary({goToPreviousStep, goToNextsStep}) {
  return (
    <div className='summary'>
        <h1>Finishing Up</h1>
        <p>Double-check everything looks OK before confirming.</p>
        <div className='selected-data'>
            <div className='duration'>
                <div>
                    <h3>Arcade (Monthly)</h3>
                    <p>change</p>
                </div>
                <h4>$9/mo</h4>
            </div>
            <hr />
            <div className='selected-add-ons'>
                <div className='add-ons-data'>
                    <p>Online service</p>
                    <h4>+$1/mo</h4>
                </div>
                <div className='add-ons-data'>
                    <p>Larger storage</p>
                    <h4>+$2/mo</h4>
                </div>
            </div>
        </div>
        <div className='totals'>
            <p>Total (per month)</p>
            <h3>+$12/mo</h3>
        </div>
        <div className="buttons">
        <button onClick={goToPreviousStep} className="go-back">Go Back</button>
        <button onClick={goToNextsStep} className="confirm">Confirm</button>
      </div>
    </div>
  )
}
