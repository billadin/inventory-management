import { AiOutlineShop } from "react-icons/ai";
import { BsFillPlayCircleFill } from "react-icons/bs";


const Banner = () => {
  return (
    <>
      <section className="bg-white " data-aos="fade-up">
  <div className="container px-6  lg:py-20 mx-auto text-center">
    <div className="mx-auto">
      <h1 className=" mb-10 text-4xl lg:text-7xl font-bold font-['Caveat'] text-gray-800">
      An <span className="text-warning">inventory</span> system that you dream!
      </h1>
      <p className="my-8 text-xl text-gray-500 lg:w-[60%] mx-auto">
      Minimize inventory shortages, enhance operational efficiency, and achieve immediate visibility through the use of SPHERE's management application..
      </p>
      <div className='flex gap-6 justify-center mt-10'>
        <button className='btn btn-primary text-base-200'>
            <span><AiOutlineShop className="text-lg text-white"/></span>Open Shop
        </button>
        <button className='btn btn-neutral text-white'>
            <span><BsFillPlayCircleFill className="text-lg text-warning"/></span>Watch Demo
        </button>
      </div>

      <p className="mt-3 text-sm text-gray-500 ">Add first five products for <span className='text-warning font-bold text-lg'>Free!</span></p>
    </div>
  </div>
</section>

    </>
  );
}

export default Banner