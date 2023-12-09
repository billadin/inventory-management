import React, { useEffect, useState } from 'react'
import useAxios from '../../../hooks/useAxios'
import { nanoid } from 'nanoid'
import { CheckoutItem, Loading, SectionTitle } from '../../../components'
import { toast } from 'react-toastify'
import { Helmet } from 'react-helmet-async'
import Receipt from '../../../components/Receipt'
import { calculateTotalCost } from '../../../utils'
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer'
import PDFContainer from '../../../components/PDFContainer'
const Checkout = () => {

  const token = localStorage.getItem('token')
  const axios = useAxios()
  const [orders, setOrders] = useState()
  const [isPaid, setIsPaid] = useState(false)
  const [loading, setLoading]= useState()

  if(loading) {
    return <Loading/>
  }
  
  const handleGetPaid = async () => {

    try {
      await axios.post('/sales', orders, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      .then(res=> {
        console.log(res)
        const status = res?.status
        if(status=== 200 || status ===201) {
          toast.success('Success paid!')
          setIsPaid(true)
        } else {
          toast.error('Something went wrong, please try later')
        }
      })
    } catch (error) {
      console.log(error)
    }
}
  useEffect(()=>{
setLoading(true)
      axios("/products/checkout", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => {
        const items = res?.data
        setOrders(items)
      })
      .catch(e=> console.log(e))
      setLoading(false)
  },[])
  
  
  return (
    <>
      <Helmet>
        <title>Sphere Inventory | Manager - Checkout </title>
      </Helmet>
      <SectionTitle text={"Check Out"} />
      <div className="text-center md:text-right mb-10 mt-4">
         
            <PDFDownloadLink
              document={<PDFContainer orders={orders} />}
              fileName="receipt.pdf"
            >
              {({ blob, url, loading, error }) =>
                loading ? (
                  "Loading document..."
                ) : (
                  <button
                    onClick={() => setIsPaid(false)}
                    className="btn btn-error text-white normal-case"
                  >
                    Download the receipt
                  </button>
                )
              }
            </PDFDownloadLink>
        </div>
      <div>
        <h1 className="text-xl my-10">
          {orders && orders?.length > 0
            ? `${orders.length} product${orders?.length > 1 ? "s" : ""}
     add to checkout`
            : "No products added to checkout"}
        </h1>
        {/* <Receipt orders={orders}/> */}
      </div>
      {
        !loading &&
      <div className="py-16">
        {orders?.length > 0 &&
          orders?.map((item) => {
            return <CheckoutItem key={nanoid(8)} order={item} />;
          })}
      </div>
      }

      {orders?.length > 0 && (
        <div className="text-right pb-16">
          <button
            onClick={handleGetPaid}
            className="btn btn-warning text-white"
          >
            Get Paid{" "}
            <span className="text-lg inline-flex">
              ${calculateTotalCost(orders)}
            </span>
          </button>
        </div>
      )}
    </>
  );
}

export default Checkout