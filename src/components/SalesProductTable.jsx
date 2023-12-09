import { nanoid } from "nanoid";
import useAxios from "../hooks/useAxios";
import { toast } from "react-toastify";


const SalesProductTable = ({products}) => {
    const token = localStorage.getItem('token')
    const axios = useAxios()

  const handleAddToCheckout = async (product) => {
    console.log(product, 'clicked')
    try {
        await axios.post('/products/checkout', product, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        })
        .then(res=> {
            console.log(res)
          const status = res?.status
          if(status=== 200 || status ===201) {
            toast.success('Successfully added to checkout!')
          }else {
            toast.error('Something went wrong, please try later')
          }
        })
      } catch (error) {
        console.log(error)
      }
  }
  
  return (
    <div className='mt-8'>
      <div className='overflow-x-auto'>
        <table className='table table-zebra'>
          {/* head */}
          <thead>
            <tr className="text-center">
              <th>Product ID</th>
              <th>Name</th>
              <th>Image</th>
              <th>Quantity</th>
              <th>Discount</th>
              <th>Selling Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
             products?.length > 0 ? products.map((product) => {
              const { _id, name, image, quantity,  discount, sellingPrice} = product;
 
              return (
                <tr key={nanoid(8)} className="text-center">
                  <td className="text-xs font-medium">{_id}</td>
                  <td>{name}</td>
                  <td className="mx-auto">
                    <img
                      src={image}
                      className="w-16 h-12 md:w-24 md:h-24 rounded-lg mx-auto"
                    />
                  </td>
                  <td>{quantity}</td>
                  <td>{discount}</td>
                  <td>{sellingPrice}</td>
                  <td>
                    <button
                      onClick={() => handleAddToCheckout(product)}
                      className="btn btn-sm btn-warning  text-white"
                    >
                      Add For Check-Out
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
      </div>
      
    </div>
  );
};
export default SalesProductTable;
