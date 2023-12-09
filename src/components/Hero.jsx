import { nanoid } from 'nanoid';
import { AiOutlineShop } from 'react-icons/ai';
import { Link } from 'react-router-dom';



const carouselImages = ["https://i.ibb.co/fH9nWJK/careosel2.jpg",
 "https://i.ibb.co/4PVvLrM/carousel-1.jpg",
  "https://i.ibb.co/2gr4F5q/carousel3.jpg",
   "https://i.ibb.co/p13SpZG/carousel4.jpg"];

const Hero = () => {
  return (
    <div className='grid lg:grid-cols-2 gap-24 items-center' data-aos="fade-left">
      <div className='place-items-center mx-auto lg:'>
        <h1 className='text-center max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl font-["Caveat"]'>
          Changing the way how people track products
        </h1>
        <p className='mt-8 max-w-xl text-lg leading-8'>
        Ensure consistent stock availability by implementing intelligent replenishment strategies such as min-max rules, MTO (Make to Order), or the master production schedule.
        </p>
        <div className='mt-10 text-center xl:text-left'>
          <Link to='/create-shop' className='btn btn-primary text-white '>
          <span><AiOutlineShop className="text-lg text-white"/></span>Create Shop Now
          </Link>
        </div>
      </div>
      <div className='hidden h-[28rem] lg:carousel carousel-center p-4 space-x-4 bg-neutral rounded-box '>
        {carouselImages.map((image) => {
          return (
            <div key={nanoid(10)} className='carousel-item'>
              <img
                src={image}
                className='rounded-box h-full w-80 object-cover'
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Hero;
