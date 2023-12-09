import React, { useEffect, useState } from 'react'
import useAxios from '../../../hooks/useAxios'
import { Form } from 'react-router-dom'
import {  CheckoutTotal, FormInput, SectionTitle, SubmitBtn } from '../../../components'
import PricingCard from '../../../components/PricingCard'
import Stripe from '../../../components/Stripe/StripeForm'
import StripeForm from '../../../components/Stripe/StripeForm'
import { Helmet } from 'react-helmet-async'

const Subscription = () => {
  const [currentPlan, setCurrentPlan] = useState()

  const handlePlanSelect = (planType) => {
    console.log(planType)
    setCurrentPlan(planType)
  }

  return (
    <>
    <Helmet>
      <title>Sphere Inventory | Subscription </title>
    </Helmet>
      <SectionTitle text="Select Your Plan" />
      <p className='text-2xl font-semibold text-warning text-center mt-6'>Buy Once, Enjoy Lifetime</p>
      <PricingCard handlePlanSelect={handlePlanSelect} />
      <div className="grid gap-8 md:grid-cols-2 items-start mt-4 ">
        <div>
        <StripeForm currentPlan={currentPlan}/>
        </div>
        <CheckoutTotal currentPlan={currentPlan} />
      </div>
      <div className='w-[90%]'>
      </div>
    </>
  );
}

export default Subscription