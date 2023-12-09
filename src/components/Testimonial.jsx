import React from 'react'

const Testimonial = () => {
  return (
    <>
      <div className="pt-20 lg:pt-40 pb-20 lg:pb-32">
        <div className=" pb-5 text-center">
          <h2 className='text-4xl lg:text-6xl font-medium tracking-wider font-["Caveat"]'>
            Proudly served businesses worldwide
          </h2>
        </div>

        <div className='mx-auto text-center my-16'>
        <div className="stats stats-vertical lg:stats-horizontal w-[70%] lg:shadow-lg rounded-md">


        <div className="stat border-0 bg-primary text-white">
            <div className="stat-title text-white">Customer</div>
            <div className="stat-value text-white text-2xl md:text-4xl" data-aos="flip-up">400+</div>
            {/* <div className="stat-desc text-white">Jan 1st - Feb 1st</div> */}
          </div>

          
          <div className="stat border-0 bg-primary text-white">
            <div className="stat-title text-white">Total Shops</div>
            <div className="stat-value text-white text-2xl md:text-4xl" data-aos="flip-up">660</div>
            <div className="stat-desc text-white">Jan 1st - Nov 30</div>
          </div>
          <div className="stat border-0 bg-primary text-white">
            <div className="stat-title text-white">Total transcation</div>
            <div className="stat-value text-white text-2xl md:text-4xl" data-aos="flip-up">Over 31K</div>
            {/* <div className="stat-desc text-white">Jan 1st - Feb 1st</div> */}
          </div>

          <div className="stat border-0 bg-primary text-white">
            <div className="stat-title text-white">Products</div>
            <div className="stat-value text-white text-2xl md:text-4xl" data-aos="flip-up">20000+</div>
            {/* <div className="stat-desc text-white">Jan 1st - Feb 1st</div> */}
          </div>

          

        </div>
        </div>
      </div>
    </>
  );
}

export default Testimonial