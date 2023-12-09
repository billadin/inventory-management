import React from 'react'
import SubmitBtn from './SubmitBtn';
import FormInput from './FormInput';
import { Form, unstable_HistoryRouter, useNavigate } from 'react-router-dom';
import useAxios from '../hooks/useAxios';
import { toast } from 'react-toastify';

const UpdateProduct = ({product, heading, buttonText, setIsProductUpdated}) => {
    const {shopName, shopId, _id} = product;
    const axios = useAxios()
    const token = localStorage.getItem('token')
    const navigate = useNavigate()

      const handleUpdate = async (event) => {
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
          _id,
          shopName,
          shopId
        }
        
        console.log(productObject)
    
        try {
          await axios.patch('/products', productObject, {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          })
          .then(res=> {
            const result = res?.data?.result
            if(result?.acknowledged=== true || result?.modifiedCount ===1) {
              document.getElementById(`update-modal-${product?.name}`).close()
              toast.success('Product updated successfully')
              setIsProductUpdated(true)
              
            }
          })
        } catch (error) {
          console.log(error)
        }
    }

  return (
    <>
    
          <div className="flex justify-between">
            <h3 className="font-bold text-2xl mb-2">{heading}</h3>
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
          </div>
          <Form 
          onSubmit={handleUpdate}
          method="POST">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mx-auto">
              <FormInput
                type="text"
                label="name"
                name="name"
                
              />
              <FormInput
                type="text"
                label="image"
                name="image"
                
              />
              <FormInput
                type="text"
                label="quantity"
                name="quantity"
                
              />
              <FormInput
                type="text"
                label="location"
                name="location"
                
              />
              <FormInput
                type="text"
                label="Production Cost"
                name="cost"
               
              />
              <FormInput
                type="text"
                label="profit"
                name="profit"
               
              />
              <FormInput
                type="text"
                label="discount"
                name="discount"
               
              />
              <FormInput
                type="text"
                label="description"
                name="description"
                
              />
              <FormInput
                type="text"
                label="sku"
                name="sku"
                defaultValue={product?.sku}
                readOnly={true}
              />
              <FormInput
                type="text"
                label="unit"
                name="unit"
                
              />
              <FormInput
                type="text"
                label="selling Price"
                name="sellingPrice"
                
              />
              <FormInput
                type="text"
                label="category"
                name="category"
                
              />
            </div>
            <div className="mt-8 mx-auto w-40">
              <SubmitBtn text={buttonText} />
            </div>
          </Form>
    </>
  );
}

export default UpdateProduct