import React, { useEffect, useState } from 'react'
import FormInput from '../../../components/FormInput'
import { Form, Link } from 'react-router-dom'
import SectionTitle from '../../../components/SectionTitle'
import useAxios from '../../../hooks/useAxios'
import {  SalesProductTable } from '../../../components'
import { toast } from 'react-toastify'
import { Helmet } from 'react-helmet-async'

const Sales = () => {
    const [products, setProducts] = useState()
    const [reset, setReset] = useState(false)
    const axios = useAxios()
    const token = localStorage.getItem('token')
    const [loading, setLoading]= useState()

    const handleSearch = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        const searchText = data?.search;

        if(searchText === "") {
            toast.warning('Please enter search text');
            return;
        }

        if (searchText.length  <24) {
            toast.warning('Please make sure enter full product ID');
            return;
        }
        try {
            await axios.get(`/products/search?id=${searchText}`, {
              headers: {
                'Authorization': `Bearer ${token}`
              }
            })
            .then(res=> {
            const products = res?.data
            setProducts(products)
            })
          } catch (error) {
            console.log(error)
          }
          e.target.reset();
    }

    const handleReset = async () => {
        setReset(true)
    }


useEffect(() => {
  setLoading(true)
  axios("/products", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => {
    const products = res?.data;
    setProducts(products);
  });
  setReset(false)
  setLoading(false)
}, [reset]);

  return (
    <>
    <Helmet>
      <title>Sphere Inventory | Manager - Sales Collection </title>
    </Helmet>
    
    <SectionTitle text={'Sales Collection'}/>
    <div className='py-20'>

    
    <Form
    onSubmit={handleSearch}
     className='bg-base-200 rounded-md px-8 py-4 grid gap-x-4  gap-y-8 sm:grid-cols-2 md:grid-cols-1 justify-center items-center mb-8'>
      {/* SEARCH */}
      <FormInput
        type='search'
        label='search by product ID'
        name='search'
        size='input-sm'
        placeholder={'Search by ID'}
      />
      {/* BUTTONS */}
      <div className='flex gap-4'>
      <button
       type='submit' className='btn btn-primary btn-sm text-white'>
        search
      </button>
      <Link >
        <button
        onClick={handleReset}
         className='btn btn-warning text-white btn-sm'>
        reset
        </button>
      </Link>
      </div>
    </Form>
    
    {
      !loading && <>
       <div className='my-16'>
    <SalesProductTable products={products}/>
    </div>
    <div className='text-right my-16'>
        <Link to={'/dashboard/manager/checkout'}>
            <button className='btn btn-primary text-white'>Proceed to checkout</button>
        </Link>
    </div>
      </>
    }
   
    </div>
    </>
  )
}

export default Sales