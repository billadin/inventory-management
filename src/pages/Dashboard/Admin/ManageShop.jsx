import React, { useEffect, useState } from 'react'
import { FormInput, Loading, SectionTitle, ShopsTable, SubmitBtn } from '../../../components'
import useAxios from '../../../hooks/useAxios'
import { nanoid } from 'nanoid'
import { Form } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Helmet } from 'react-helmet-async'

const ManageShop = () => {
const token = localStorage.getItem('token')
const axios = useAxios()
const [shops, setShops]= useState()
const [loading, setLoading] = useState()

const handleSendNotice = () => {
  document.getElementById('send_notice').showModal()
}
const handleSubmit = (e) => {
e.preventDefault()
const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    console.log(data)
  toast.success('Success sent the email')
  document.getElementById('send_notice').close()
}


  useEffect(()=> {
    setLoading(true)
    axios(`/store/admin`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res)=> {
      const data = res?.data
      setShops(data)
    })
    setLoading(false)

  },[])

if(loading) {
  return <Loading/>
}
  return (
    <>
    <Helmet>
      <title>Sphere Inventory | Admin - Manage Shop </title>
    </Helmet>
    {
      !loading &&
    <div className='my-10'>

    <SectionTitle text={'Manage Shop'}/>
    <div>
    <div className='mt-8'>
      <div className='overflow-x-auto'>
        <h1 className='my-6 text-primary font-bold'>{shops?.length > 0 ? shops.length : 0} shops found</h1>
        <table className='table table-zebra mb-16'>

          <thead>
            <tr className='text-center'>
              <th className='text-left'>Shop Name</th>
              <th>Shop Image</th>
              <th>Product Limit</th>
              <th>Shop description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
             shops?.length > 0 ? shops.map((shop) => { 
              return (
                <tr key={nanoid(8)} className='text-center'>
                  <td className='text-left'>{shop?.shopName}</td>
                  {/* <td>{shop?.image}</td> */}
                  <td>
                  <img
                  //   src={checkoutItem?.image}
                    src={shop?.logo}
                    alt={shop?.shopName}
                    className="h-14 w-14 rounded-full object-cover mx-auto"
                  />

                  </td>
                  <td>{shop?.shopLimit}</td>
                  <td>{shop?.description}</td>
                  <td>
                    <button
                    onClick={handleSendNotice}
                     className='btn btn-warning text-white'>
                      Send Notice
                    </button>
                  </td>
                </tr>
              );
            }) : 
            <tr className="mt-2 font-semibold">
              <td>No products found</td>
            </tr>
          } 
          </tbody>
        </table>
        <dialog id="send_notice" className="modal rounded">
          <div className="modal-box  rounded-md mx-auto">
            <div className="flex justify-between">
            <h3 className="font-bold text-2xl mb-2">Send email to shop admin</h3>
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
            </div>
            <Form
            onSubmit={handleSubmit}
            method='POST'>
            <div >       
            <FormInput type='email' label='email' name='email' required/>
            </div>
            <div className='mt-8 mx-auto w-40'>
              <SubmitBtn text='Send'/>
            </div>
            </Form>
          </div>
        </dialog>
      </div>
      
    </div>
    
    </div>
    </div>
    }
    </>
  )
}

export default ManageShop