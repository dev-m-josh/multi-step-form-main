import React from 'react'

export default function AddOns() {
  return (
    <div className='add-ons'>
      <h1>Pick add-ons</h1>
      <p>Add-ons help enhance your gaming experience.</p>
      <div className='pick-add-on'>
        <div className='add-on'>
          <div className='left'>
            <input type='checkbox'/>
            <div className='add-on-type'>
                <h3>Online service</h3>
                <p>Access to multiplayer games</p>
            </div>
          </div>
          <span>
            +$1/mo
          </span>
        </div>
        <div className='add-on'>
          <div className='left'>
            <input type='checkbox'/>
            <div className='add-on-type'>
                <h3>Online service</h3>
                <p>Access to multiplayer games</p>
            </div>
          </div>
          <span>
            +$1/mo
          </span>
        </div>
        <div className='add-on'>
          <div className='left'>
            <input type='checkbox'/>
            <div className='add-on-type'>
                <h3>Online service</h3>
                <p>Access to multiplayer games</p>
            </div>
          </div>
          <span>
            +$1/mo
          </span>
        </div>
      </div>
      <div className='buttons'>
        <button className='go-back'>Go Back</button>
        <button className='next-step'>Next Step</button>
      </div>
    </div>
  )
}

