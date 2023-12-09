import { toast } from 'react-toastify';
import { FormInput, SubmitBtn } from '../components';
import { Form, Link, useNavigate } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { AuthContext } from '../Auth/AuthProvider';
import { FirebaseErrorMessage } from '../utils';
import { Helmet } from 'react-helmet-async';



const Login = () => {
    const {user, signInUser, loggingWithGoogle, setLoading} = useContext(AuthContext);
    const navigate = useNavigate()
    console.log(user)


  const handleLogin = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    const { email, password} = data;

    try {
      await signInUser(email, password)
      toast.success('Logged in successfully');
      navigate(location?.state ? location?.state : '/')
    } catch (error) {
      toast.error(FirebaseErrorMessage(error));
      setLoading(false)
      navigate('/login')
    }
  }

  const handleGoogleLogin = async () => {
    try {
      const res = await loggingWithGoogle()
      console.log(res)
      toast.success('Llogged in successfully');
      navigate(location?.state ? location?.state : '/')
    } catch (error) {
      toast.error(FirebaseErrorMessage(error));
      setLoading(false)
      navigate('/login')
    } 
  }

  useEffect(()=>{
    if (user) {
      navigate(location?.state ? location?.state : '/')
    } 
  },[])

  return (
    <>
    <Helmet>
      <title>Sphere Inventory | Login </title>
    </Helmet>
    <section className="h-screen grid place-items-center">
      <div className='card w-96 shadow-lg  '>
      <Form
        onSubmit={handleLogin}
        method="post"
        className=" px-8 pt-8 bg-base-100 flex flex-col gap-y-4"
      >
        <h4 className="text-center text-3xl font-bold">Login</h4>
        <FormInput type="email" label="email" name="email" />
        <FormInput type="password" label="password" name="password" />
        <div className="mt-4">
          <SubmitBtn text="login" />
        </div>
      </Form>
      

      <div className='w-96 px-8 mt-4'>
      <div>
        <button
          onClick={handleGoogleLogin}
          type="submit"
          className="btn btn-warning text-white btn-block"
        >
          Sign in with google
        </button>
      </div>
      <p className="text-center my-4">
        Not a member yet?{" "}
        <Link
          to="/register"
          className="ml-2 link link-hover link-primary capitalize"
        >
          register
        </Link>
      </p>
      </div>
      </div>
    </section>
    </>
  );
};
export default Login;
