import React from 'react'
import PersonalInfo from './PersonalInfo'

export default function HomePage() {
  return (
    <div className='home'>
      <div className='steps'>
        <div className='step-number'>
            <span>1</span>
            <div className='step-info'>
                <p>STEP 1</p>
                <h4>YOUR INFO</h4>
            </div>
        </div>
        <div className='step-number'>
            <span>2</span>
            <div className='step-info'>
                <p>STEP 2</p>
                <h4>SELECT PLAN</h4>
            </div>
        </div>
        <div className='step-number'>
            <span>3</span>
            <div className='step-info'>
                <p>STEP 3</p>
                <h4>ADD-ONS</h4>
            </div>
        </div>
        <div className='step-number'>
            <span>4</span>
            <div className='step-info'>
                <p>STEP 4</p>
                <h4>SUMMARY</h4>
            </div>
        </div>
      </div>
      <div className='right'>
      {<PersonalInfo/>}
      </div>
    </div>
  )
}
