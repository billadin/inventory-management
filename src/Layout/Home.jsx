import { Outlet, useNavigation } from 'react-router-dom';
import { Header, Loading, Navbar } from '../components';
import Footer from '../components/Footer';



const Home = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === 'loading';
  return (
    <>
      <Header />
      <Navbar />
      {isPageLoading ? (
        <Loading />
      ) : (
        <section className='align-element py-20 min-h-screen'>
          <Outlet />
        </section>
      )}
      <Footer/>
    </>
  );
};
export default Home;
