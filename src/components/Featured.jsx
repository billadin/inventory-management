import { BsFillPlayCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Featured = () => {
  return (
    <>
    <div className='pt-28' data-aos="fade-right">
      <div className=' pb-5 text-center'>
      <h2 className='text-3xl md:text-6xl font-medium tracking-wider font-["Caveat"]'>How
       <span className='text-primary'> SPHERE</span> will help you</h2>
        </div>
      <div className='pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3'>

          <Link
            className='card  w-full shadow-xl hover:shadow-2xl transition duration-300'
          >
            <figure className='px-4 pt-4'>
              <img
                src="https://i.ibb.co/XJzQL3N/pos3.jpg"
                className='rounded-xl h-64  w-full object-cover'
              />
            </figure>
            <div className='card-body items-center text-center'>
              <h2 className='text-xl font-semibold  tracking-wider'>Enhance order</h2>
              <p className='mb-4 tracking-wider text-left text-gray-500'>Enhance order accuracy and efficiency through automated picking processes with SPHERE</p>
              <button className="btn btn-md btn-primary text-white"><span><BsFillPlayCircleFill className="text-lg text-white"/></span>Watch Demo</button>
            </div>
          </Link>
          <Link
            className='card  w-full shadow-xl hover:shadow-2xl transition duration-300'
          >
            <figure className='px-4 pt-4'>
              <img
                src="https://i.ibb.co/QCv2xwG/pos2.jpg"
                className='rounded-xl h-64  w-full object-cover'
              />
            </figure>
            <div className='card-body items-center text-center'>
              <h2 className='text-xl font-semibold  tracking-wider'>Online Invoice</h2>
              <p className='mb-4 tracking-wider text-left text-gray-500'>Boost productivity with real-time inventory tracking, ensuring timely reordering and minimizing disruptions in your supply chain.</p>
              <button className="btn btn-md btn-primary text-white"><span><BsFillPlayCircleFill className="text-lg text-white"/></span>Watch Demo</button>
            </div>
          </Link>
          <Link
            className='card  w-full shadow-xl hover:shadow-2xl transition duration-300'
          >
            <figure className='px-4 pt-4'>
              <img
                src="https://i.ibb.co/Z125Bjg/pos1.jpg"
                className='rounded-xl h-64  w-full object-cover'
              />
            </figure>
            <div className='card-body items-center text-center'>
              <h2 className='text-xl font-semibold  tracking-wider'>Real Time KPI</h2>
              <p className='mb-4 tracking-wider text-left text-gray-500'>Monitor and analyze key performance indicators (KPIs) to make informed decisions</p>
              <button className="btn btn-md btn-primary text-white"><span><BsFillPlayCircleFill className="text-lg text-white"/></span>Watch Demo</button>
            </div>
          </Link>
    </div>
    </div>
    

    </>
  )
}

export default Featured;