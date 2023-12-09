import React from 'react'
import { AiOutlineShop } from 'react-icons/ai'
import { BsChatLeftQuoteFill } from 'react-icons/bs'

const GetStarted = () => {
  return (
    <>
    <div className="py-40" data-aos="fade-up">
  <div className="container m-auto space-y-8  text-gray-500 md:px-12 lg:px-20">
    <div className="flex items-center justify-center -space-x-2">
      <img
        loading="lazy"
        width={220}
        height={220}
        src="https://odoocdn.com/openerp_website/static/src/img/snippets/s_wd_persona/bob.png"
        alt="member photo"
        className="h-16 w-16 rounded-full object-cover"
      />
      <img
        loading="lazy"
        width={220}
        height={220}
        src="https://odoocdn.com/openerp_website/static/src/img/snippets/s_wd_testimonials/avatar/jeremy_b.webp"
        alt="member photo"
        className="h-16 w-16 rounded-full object-cover"
      />
      <img
        loading="lazy"
        width={220}
        height={220}
        src="https://i.ibb.co/JBnKdv4/profile.jpg"
        alt="member photo"
        className="z-10 h-16 w-16 rounded-full object-cover"
      />
    </div>
    <div className="m-auto space-y-6 md:w-8/12 lg:w-10/12">
      <h1 className="text-center text-4xl font-bold text-gray-800  md:text-6xl font-['Caveat']">
        Be organized, <span className='text-primary'>fast forward</span> your business
      </h1>
      <p className="text-center text-xl  ">
        Be a part of smart movement
      </p>
      <div className="flex flex-wrap justify-center gap-6">
        <button
        className='btn btn-primary text-white'>
            <span><AiOutlineShop className="text-lg text-white"/></span>Create Shop
        </button>
        <button
        className='btn btn-neutral text-white'>
            <span className='text-xl text-warning inline-flex'><BsChatLeftQuoteFill/></span>Get A Quote
        </button>
        
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default GetStarted