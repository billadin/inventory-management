import React, { useState } from 'react'
import { FaCheck } from 'react-icons/fa6'

const PricingCard = ({handlePlanSelect}) => {
    const [isSelectedSilver, setIsSelectedSilver] = useState(false)
    const [isSelectedGold, setIsSelectedGold] = useState(false)
    const [isSelectedPlatinum, setIsSelectedPlatinum] = useState(false)

  return (
    <>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-16 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 xl:w-1/3 md:w-1/2 w-full">
              <div className="h-full p-6 rounded-lg border-2 border-warning flex flex-col relative overflow-hidden">
                <span className="bg-success text-gray-600 px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">
                  Startup
                </span>
                <h2 className="text-sm tracking-widest title-font mb-1 font-medium">
                  Silver
                </h2>
                <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                  <span>$10</span>
                </h1>
                <p className="flex items-center text-black mt-6">
                  <span className="w-4 h-4 p-1 mr-2 inline-flex items-center justify-center bg-primary text-white rounded-full flex-shrink-0">
                    <FaCheck />
                  </span>
                  Increase limit to 200
                </p>
                <p className="flex items-center text-black mb-6">
                  <span className="w-4 h-4 p-1 mr-2 inline-flex items-center justify-center bg-primary text-white rounded-full flex-shrink-0">
                    <FaCheck />
                  </span>
                  Lifetime Access
                </p>
                <button
                onClick={() => {
                    setIsSelectedGold(false);
                    setIsSelectedSilver(true);
                    setIsSelectedPlatinum(false);
                    handlePlanSelect('silver')
                }}
                disabled={isSelectedSilver}
                 className="btn btn-warning flex items-center">
                  Select this Plan
                </button>
              </div>
            </div>

            <div className="p-4 xl:w-1/3 md:w-1/2 w-full">
              <div className="h-full p-6 rounded-lg border-2 border-warning flex flex-col relative overflow-hidden">
                <span className="bg-error text-white px-5 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">
                  Mid-level
                </span>
                <h2 className="text-sm tracking-widest title-font mb-1 font-medium">
                  Gold
                </h2>
                <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                  <span>$20</span>
                </h1>
                <p className="flex items-center text-black mt-6">
                  <span className="w-4 h-4 p-1 mr-2 inline-flex items-center justify-center bg-primary text-white rounded-full flex-shrink-0">
                    <FaCheck />
                  </span>
                  Increase limit to 450
                </p>
                <p className="flex items-center text-black mb-6">
                  <span className="w-4 h-4 p-1 mr-2 inline-flex items-center justify-center bg-primary text-white rounded-full flex-shrink-0">
                    <FaCheck />
                  </span>
                  Lifetime Access
                </p>
                <button
                onClick={() => {
                    setIsSelectedGold(true);
                    setIsSelectedSilver(false);
                    setIsSelectedPlatinum(false);
                    handlePlanSelect('gold')
                }}
                disabled={isSelectedGold}
                 className="btn btn-warning flex items-center">
                  Select this Plan
                </button>
              </div>
            </div>

            <div className="p-4 xl:w-1/3 md:w-1/2 w-full">
              <div className="h-full p-6 rounded-lg border-2 border-warning flex flex-col relative overflow-hidden">
                <span className="bg-info text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">
                  Pro
                </span>
                <h2 className="text-sm tracking-widest title-font mb-1 font-medium">
                  Platinum
                </h2>
                <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                  <span>$50</span>
                </h1>
                <p className="flex items-center text-black mt-6">
                  <span className="w-4 h-4 p-1 mr-2 inline-flex items-center justify-center bg-primary text-white rounded-full flex-shrink-0">
                    <FaCheck />
                  </span>
                  Increase limit to 1500
                </p>
                <p className="flex items-center text-black mb-6">
                  <span className="w-4 h-4 p-1 mr-2 inline-flex items-center justify-center bg-primary text-white rounded-full flex-shrink-0">
                    <FaCheck />
                  </span>
                  Lifetime Access
                </p>
                <button
                onClick={() => {
                    setIsSelectedGold(false);
                    setIsSelectedSilver(false);
                    setIsSelectedPlatinum(true);
                    handlePlanSelect('platinum')
                }}
                disabled={isSelectedPlatinum}
                 className="btn btn-warning flex items-center">
                  Select this Plan
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PricingCard