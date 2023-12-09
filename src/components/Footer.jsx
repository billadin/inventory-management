import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiUpwork } from 'react-icons/si'

const Footer = () => {
  return (
    <>
    <footer className="text-gray-600 body-font text-center border-t-primary border">
  <div className="container px-5 py-24 mx-auto flex md:items-center md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
      <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
        <img src="https://i.ibb.co/vkhdL3G/logo.png" alt="" />
      </a>
    </div>
    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center ">
      <div className="lg:w-1/3 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
          Home
        </h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-600 hover:text-gray-800">Sign Up</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Login</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">About</a>
          </li>
         
        </nav>
      </div>
      <div className="lg:w-1/3 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
          Demo
        </h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-600 hover:text-gray-800">Watch Videos</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Tutorials</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Knowledge Base</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/3 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
          Create Shop
        </h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-600 hover:text-gray-800">How it works</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">FAQ</a>
          </li>
        </nav>
      </div>
    </div>
  </div>
  <div className='bg-primary'>
    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row bg-primary">
      <p className="text-white text-sm text-center sm:text-left">
        © 2024 Sphere Inventory - <a href="https://github.com/billadin" target='_blank'>Mir.B</a>
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
        <a href='https://linkedin.com/in/mirb' className="ml-3 text-white" target='_blank'>
        <FaLinkedin className='text-xl text-neutral'/>
        </a>
        <a href='https://github.com/billadin' className="ml-3 text-white" target='_blank'>
        <FaGithub className='text-xl text-neutral'/>
        </a>
        <a href='https://www.upwork.com/freelancers/~01449a1f318b43c81d' className="ml-3 text-white" target='_blank'>
        <SiUpwork className='text-xl text-neutral'/>
        </a>
      </span>
    </div>
  </div>
</footer>

    </>
  )
}

export default Footer