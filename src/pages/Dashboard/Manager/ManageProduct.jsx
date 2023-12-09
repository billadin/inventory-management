
import { FormInput, ProductTable, SectionTitle, SubmitBtn } from "../../../components";
import { Form, useNavigate} from "react-router-dom";
import { toast } from "react-toastify";
import useAxios from "../../../hooks/useAxios";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";




const ManageProduct = () => {

  const [products, setProducts] = useState()
  const axios = useAxios()
  const navigate = useNavigate()
  const token = localStorage.getItem('token')
  const [loading, setLoading]= useState()
  const [isProductAdded, setIsProductAdded] =useState(false)
  const [isProductUpdated, setIsProductUpdated] =useState(false)
  const [isProductDeleted, setIsProductDeleted] =useState(false)

  const handleAddProduct= () => {
    document.getElementById('add_product').showModal()
  }


  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    const productObject = {
      category: data?.category,
      cost: data?.cost,
      description: data?.description,
      discount: data?.discount,
      image: data?.image,
      location: data?.location,
      name: data?.name,
      profit: data?.profit,
      quantity: data?.quantity,
      sellingPrice: data?.sellingPrice,
      sku: data?.sku,
      unit: data?.unit,
    }
    
    

    try {
      await axios.post('/products', productObject, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      .then(res=> {
        const status = res?.status
        if(status=== 200 || status ===201) {
          document.getElementById('add_product').close()
          toast.success('Product added successfully')
          setIsProductAdded(true)
        }
        if(status === 400) {
          document.getElementById('add_product').close()
          const msg= res?.data?.msg
          navigate('/dashboard/subscriptions')
          toast.warning(`${msg}`)
        }
        if(status === 500) {
          toast.warning(`Please make sure you have a shop`)
          document.getElementById('add_product').close()
        }
      })
    } catch (error) {
      console.log(error)
    }
}
useEffect(()=>{
      setLoading(true)
  axios('/products', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then((res)=>{
      const products = res?.data
      console.log(products)
      setProducts(products)
    })
    setLoading(false)
    setIsProductAdded(false)
    setIsProductUpdated(false)
    setIsProductDeleted(false)

  },[isProductAdded, isProductUpdated, isProductDeleted])

  return (
    <>
    
    <Helmet>
      <title>Sphere Inventory | Manager - Manage Products </title>
    </Helmet>
      <SectionTitle text={'Manage Products '}/>
      
      {
        !loading && <>
        <div className="flex w-full text-center justify-between my-16">

          {
            products?.length > 0 ? <>
            <div className="pb-5 ">
              <h2 className="text-xl font-medium tracking-wider">
              {/* Total {products?.length > 0 : products.length} product{products?.length>1 && 's'} added */}
              {
                products?.length > 0 ?
                `Total ${products?.length} 
                 product${products?.length > 1 ? 's' : ''} added` :
                `Add your first product`
              }
              </h2>
            </div>
            <div className=" text-left">
               <button
                onClick={handleAddProduct}
                 className="btn btn-warning text-white">Add Your product</button> 
              
            </div>
              </> : 
              <>
            <div className="text-left mx-auto">
               <button
                onClick={handleAddProduct}
                 className="btn btn-warning text-white">Add Your First product</button> 
              
            </div>
              </>
          }
          

        {/* Modal */}
        {/* You can open the modal using document.getElementById('ID').showModal() method */}

        <dialog id="add_product" className="modal rounded">
          <div className="modal-box w-11/12 max-w-5xl rounded-md mx-auto">
            <div className="flex justify-between">
            <h3 className="font-bold text-2xl mb-2">Add Product</h3>
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
            </div>
            <Form
            onSubmit={handleSubmit}
            method='POST'>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mx-auto">
            
            <FormInput type='text' label='name' name='name' />
            <FormInput type='text' label='image' name='image' />
            <FormInput type='text' label='quantity' name='quantity'/>
            <FormInput type='text' label='location' name='location'/>
            <FormInput type='text' label='Production Cost' name='cost'/>
            <FormInput type='text' label='profit' name='profit'/>
            <FormInput type='text' label='discount' name='discount'/>
            <FormInput type='text' label='description' name='description'/>
            <FormInput type='text' label='sku' name='sku'/>
            <FormInput type='text' label='unit' name='unit'/>
            <FormInput type='text' label='selling Price' name='sellingPrice'/>
            <FormInput type='text' label='category' name='category'/>
            </div>
            <div className='mt-8 mx-auto w-40'>
              <SubmitBtn text='Add Product'/>
            </div>
            </Form>
          </div>
        </dialog>
        

      </div>
      <ProductTable products={products} setIsProductUpdated={setIsProductUpdated}/>
        </>
      }
      
      
    </>
  );
}

export default ManageProduct