import { Helmet } from "react-helmet-async";
import { Banner, Featured, Hero, Testimonial } from "../components";
import Bill from "../components/Bill";
import GetStarted from "../components/GetStarted";
import Footer from "../components/Footer";


const Landing = () => {
  return (
    <>
     <Helmet>
      <title>Sphere Inventory | Home </title>
    </Helmet>
      <Banner/>
      <div className="my-10 lg:my-20"> 
      <Hero />
      </div>
      <Featured />
      <Testimonial/>
      <Bill/>
      <GetStarted/>
    </>
  );
};
export default Landing;
