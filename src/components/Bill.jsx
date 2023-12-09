import React from 'react'
import { AiOutlineMonitor } from 'react-icons/ai';
import { SiArkecosystem } from "react-icons/si";
import { TbCirclesRelation } from "react-icons/tb";
import { GrShieldSecurity } from "react-icons/gr";

const Bill = () => {
  return (
    <>
    
  <div className="xl:container m-auto space-y-16 md:px-12" data-aos="fade-right">
    <div>
      <h2 className="mt-4 text-3xl font-bold   md:text-6xl text-center font-['Caveat']">
        A <span className='text-primary'>technology-first</span> approach to payments
      </h2>
    </div>
    <div className=" mt-20 grid gap-8 lg:gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

      <div className="group relative p-8 rounded-3xl bg-gray-100 order border-primary hover:border-gray-100  hover:bg-primary hover:text-white  shadow-2xl shadow-primary lg:shadow-lg lg:hover:shadow-primary sm:gap-8 sm:flex transition duration-200">
        <div className="relative hover:text-white ">
          <SiArkecosystem className='text-5xl mx-auto text-neutral'/>
          <h3 className="mt-8 mb-4 text-2xl font-semibold transition hover:text-white">
          Automated Reordering System
          </h3>
          <p className=" hover:text-white ">
          Adapt to changing demand patterns with ease by utilizing SPHERE's dynamic inventory adjustment tools, preventing overstock or stockouts.
          </p>
        </div>
      </div>
      <div className="group relative p-8 rounded-3xl bg-gray-100 order border-primary hover:border-gray-100  hover:bg-primary hover:text-white  shadow-2xl shadow-primary lg:shadow-lg lg:hover:shadow-primary sm:gap-8 sm:flex transition duration-200">
        <div className="relative hover:text-white ">
          <AiOutlineMonitor className='text-6xl mx-auto text-neutral'/>
          <h3 className="mt-8 mb-4 text-2xl font-semibold transition hover:text-white">
            Inventory Monitoring
          </h3>
          <p className=" hover:text-white ">
          Monitor your inventory levels in real time, providing accurate and up-to-date information to prevent stockouts and overstock situations
          </p>
        </div>
      </div>
      <div className="group relative p-8 rounded-3xl bg-gray-100 order border-primary hover:border-gray-100  hover:bg-primary hover:text-white  shadow-2xl shadow-primary lg:shadow-lg lg:hover:shadow-primary sm:gap-8 sm:flex transition duration-200">
        <div className="relative hover:text-white ">
        <TbCirclesRelation className='text-6xl mx-auto text-neutral'/>
          <h3 className="mt-8 mb-4 text-2xl font-semibold transition hover:text-white">
            Relationship
          </h3>
          <p className=" hover:text-white ">
          Maintain a comprehensive database of suppliers, track performance, and manage communication efficiently to ensure a reliable and efficient supply chain.
          </p>
        </div>
      </div>
      <div className="group relative p-8 rounded-3xl bg-gray-100 order border-primary hover:border-gray-100  hover:bg-primary hover:text-white  shadow-2xl shadow-primary lg:shadow-lg lg:hover:shadow-primary sm:gap-8 sm:flex transition duration-200">
        <div className="relative  hover:text-white ">
        <GrShieldSecurity className='text-6xl mx-auto text-neutral'/>
          <h3 className="mt-8 mb-4 text-2xl font-semibold transition hover:text-white">
            Security
          </h3>
          <p className=" hover:text-white ">
          Implement user-specific permissions to control access levels, safeguarding sensitive inventory data and ensuring accountability within the system.
          </p>
        </div>
      </div>
    </div>
  </div>

                                    
    </>
  )
}

export default Bill