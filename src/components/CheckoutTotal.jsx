import React, { useState } from 'react'

const CheckoutTotal = ({currentPlan}) => {
  return (
    <>
    <div className='card bg-primary'>
      <div className='card-body text-white'>
        <p className='flex justify-between text-xs border-b border-base-300 pb-2'>
          <span className='text-lg font-semibold'>Selected Plan</span>
          <span className='font-bold uppercase text-2xl'>{currentPlan? currentPlan : 'No Plan'}</span>
        </p>
      </div>
    </div>
    </>
  )
}

export default CheckoutTotal