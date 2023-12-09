import { useContext } from 'react';
import { FormInput, SubmitBtn } from '../components';
import { Form, Link, redirect, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Auth/AuthProvider';
import { toast } from 'react-toastify';
import { FirebaseErrorMessage } from '../utils';
import useAxios from '../hooks/useAxios';
import { Helmet } from 'react-helmet-async';

const Register = () => {
    const {createUser, updatingUser, setLoading} = useContext(AuthContext);
    const navigate = useNavigate()
    const axios = useAxios()


    const handleRegister = async (event) => {
        event.preventDefault();

        const specialCharacter = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/;
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData);
        const { username, email, password, img } = data;

        //Validations
        if(!username || !email|| !password) {
          toast.error('Please complete the form');
          return;
        }
        if (password.length < 6) {
          toast.error('Password cannot be less than 6 characters');
          return;
        }
        else if (!/[A-Z]/.test(password)) {
          toast.error('Please add at least one uppercase letter in password');
          return;
        }
        else if(!specialCharacter.test(password)){
          toast.error('Please add at least one special character in password');
          return;
        }

        const userObject = { username, email, img}

        //Creating user in database
        try {
          await axios.post('/auth/register', userObject)
        } catch (error) {
          const msg = error?.response?.data?.msg;
          toast.error(msg)
          return;
        }


        //Creating user in firebase
        try {
          await createUser(email, password);
          try {
            await updatingUser(username, img)
          } catch (error) {
            toast.error(FirebaseErrorMessage(error));
          }
          toast.success('Account created successfully');
          navigate('/');
        } catch (error) {
            toast.error(FirebaseErrorMessage(error));
            setLoading(false)
            navigate('/register')
        }
    }

  return (
    <>
    <Helmet>
      <title>Sphere Inventory | Register </title>
    </Helmet>
    <section className='h-screen grid place-items-center'>
      <Form
        onSubmit={handleRegister}
        method='POST'
        className='card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-2'
      >
        <h4 className='text-center text-3xl font-bold'>Register</h4>
        <FormInput type='text' label='username' name='username' />
        <FormInput type='email' label='email' name='email' />
        <FormInput type='text' label='Photo URL' name='img' />
        <FormInput type='password' label='password' name='password' />
        <div className='mt-4'>
          <SubmitBtn text='register'/>
        </div>
        <p className='text-center'>
          Already a member?
          <Link
            to='/login'
            className='ml-2 link link-hover link-primary capitalize'
          >
            login
          </Link>
        </p>
      </Form>
    </section>
    </>
  );
};
export default Register;
