import React, { useContext, useEffect, useState } from 'react'
import { AdminSalesCollectionTable, SectionTitle } from '../../../components'
import { Helmet } from 'react-helmet-async'
import { AuthContext } from '../../../Auth/AuthProvider'
import useAxios from '../../../hooks/useAxios'
import { setPersistence } from 'firebase/auth'
import { FaMoneyBillTrendUp } from 'react-icons/fa6'
import { MdOutlineProductionQuantityLimits } from 'react-icons/md'
import { GiMoneyStack } from 'react-icons/gi'

const AdminSalesSummary = () => {
  const {setLoading, user} = useContext(AuthContext)
  const token = localStorage.getItem('token')
  const [income, setIncome] = useState()
  const [products, setProducts]= useState()
  const [totalSales, setTotalSales] = useState()
  const axios = useAxios()

  useEffect(()=>{
    setLoading(true)
    if(user) {
    const localUser = localStorage.getItem('userInfo')
    const userObject = JSON.parse(localUser)
    setIncome(userObject?.income)
  }
  axios('/products/all', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  .then(res => {
    const data = res?.data
    setProducts(data)
  })

  axios(`/sales/all`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => {
    const data  = res?.data
    setTotalSales(data?.totalSales)
  });
  
  setLoading(false)
  },[])

  return (
    <>
    <Helmet>
      <title>Sphere Inventory | Admin - Sales Summary </title>
    </Helmet>
    <SectionTitle text={'Sales Summary'}/>

  <section className="text-gray-600 body-font my-10">
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-wrap -m-4 text-center">
        <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
          <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
          <FaMoneyBillTrendUp className='text-5xl mx-auto mb-2 text-primary'/>
            <h2 className="title-font font-medium text-3xl text-gray-900">
              {income}
            </h2>
            <p className="leading-relaxed">Total Income</p>
          </div>
        </div>
        <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
          <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
          <MdOutlineProductionQuantityLimits className='text-5xl mx-auto mb-2 text-primary'/>
            <h2 className="title-font font-medium text-3xl text-gray-900">
              {products ? products.length : 0}
            </h2>
            <p className="leading-relaxed">Total Products</p>
          </div>
        </div>
        <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
          <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
          <GiMoneyStack className='text-5xl mx-auto mb-2 text-primary'/>
            <h2 className="title-font font-medium text-3xl text-gray-900">
              {totalSales ? totalSales : 0}
            </h2>
            <p className="leading-relaxed">Total Sales</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <SectionTitle text={'Users'}/>
  <AdminSalesCollectionTable/>
    </>
  )
}

export default AdminSalesSummary