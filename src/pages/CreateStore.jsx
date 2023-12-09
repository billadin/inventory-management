import React, { useContext, useEffect, useState } from 'react'
import { FormInput, Loading, SubmitBtn } from '../components'
import { Form, useNavigate } from 'react-router-dom'
import { AuthContext } from '../Auth/AuthProvider'
import useAxios from '../hooks/useAxios'
import { toast } from 'react-toastify'
import { Helmet } from 'react-helmet-async'


const CreateStore = () => {
  const [loading, setLoading] = useState(false);
  const axios = useAxios()
  const {user} = useContext(AuthContext)
  const navigate = useNavigate()

  const handleCreateStore = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        const shopInfo = {
          shopName: data?.shopName,
          logo: data?.logo,
          description: data?.description,
          location: data?.location,
          email: data?.email,
          username: data?.name
        }
        console.log(shopInfo)

      const token = localStorage.getItem('token')
      await axios.post('/store', shopInfo, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      .then((res => {
        if(res?.status===201) {
          toast.success('Store created successfully!');
          navigate('/dashboard/manager/products')
        }
        else {
          toast.error('You already have created store!');
          navigate('/dashboard/manager/products')
        }
      }))

  }


  useEffect(()=>{
    setLoading(true)
    const localUser = localStorage.getItem('userInfo')
    if(localUser) {
      const userObject = JSON.parse(localUser)
      const role = userObject?.role
      if(role=== "admin") {
        navigate("/dashboard/admin/manage")
      }
      if(role === "manager") {
        navigate("/dashboard/manager/products")
        toast.success('You already have an store!');
      }
    }
    setLoading(false)
  },[])
  

  if(loading) {
    return <Loading />
  }


  return (
    <>
    <Helmet>
      <title>Sphere Inventory | Create Shop </title>
    </Helmet>
    {
      !loading && 
    <section className='grid place-items-center'>
      <Form
        onSubmit={handleCreateStore}
        method='POST'
        className='card w-[60%] p-8 bg-base-100 shadow-2xl flex flex-col gap-y-4'
      >
        <h4 className='text-center text-3xl font-bold'>Create Shop</h4>
        <FormInput type='text' label='shop name' name='shopName' />
        <FormInput type='text' label='logo' name='logo' />
        <FormInput type='text' label='description' name='description' />
        <FormInput type='text' label='location' name='location' />
        <FormInput type='email' label='email' name='email' defaultValue={user && `${user.email}`} readOnly={true}/>
        <FormInput type='name' label='name' name='name' defaultValue={user && `${user.displayName}`} readOnly={true}/>
        <div className='mt-4'>
          <SubmitBtn text='Create Shop'/>
        </div>
      </Form>
    </section>
    }
    </>
  )
}

export default CreateStore