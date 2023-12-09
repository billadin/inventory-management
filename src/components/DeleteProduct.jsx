import React from 'react'
import useAxios from '../hooks/useAxios'
import { toast } from 'react-toastify'

const DeleteProduct = ({id, product, setIsProductDeleted}) => {
    const axios = useAxios()
    const token = localStorage.getItem('token')

    const handleDelete = async () => {
        try {
      await axios
        .post(`/products/delete/${id}`, product,  {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          const result = res?.data?.result;
          if (result?.acknowledged === true || result?.modifiedCount === 1) {
            toast.success("Product deleted successfully");
            document.getElementById(`delete_product`).close()
            
          }
          setIsProductDeleted(true)
        });
    } catch (error) {
      console.log(error);
    }}

    const handleClose = async () => {
        document.getElementById(`delete_product`).close()
    }
  
  return (
    <>
      <div className="modal-box text-center">
        <h3 className="font-bold text-2xl mb-2">Delete Product</h3>
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <p className="py-4">Are you sure you want to delete this product?</p>
        <div className='flex justify-center gap-4'>
            <button
            onClick={handleDelete}
             className="btn btn-error text-white">Delete</button>
            <button
            onClick={handleClose}
             className="btn btn-info">Cancel</button>
        </div>
      </div>
    </>
  );
}

export default DeleteProduct