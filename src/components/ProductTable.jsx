import { nanoid } from "nanoid";
import UpdateProduct from "./UpdateProduct";
import DeleteProduct from "./DeleteProduct";


const ProductTable = ({products, setIsProductUpdated, setIsProductDeleted}) => {
  

  const handleDeleteModal = async (id) => {
    document.getElementById('delete_product').showModal()
  }
  
  return (
    <div className='mt-8'>
      <div className='overflow-x-auto'>
        <table className='table table-zebra'>
          {/* head */}
          <thead>
            <tr className="text-center">
              <th className="text-center">Name</th>
              <th>Image</th>
              <th>Sku</th>
              <th>Purchase</th>
              <th>Sell</th>
              <th>Quantity</th>
              <th>Sale</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {
             products?.length > 0 ? products.map((product) => {
              const { name, image, quantity, location, cost, profit, discount,
            description, manufacturer, category, weight, is_available, sku, purchasingPrice, 
                sellingPrice, saleCount, shopName, shopId} = product;
 
              return (
                <tr key={nanoid(8)} className="text-center">
                  <td>{name}</td>
                  <td>
                    <img
                      src={image}
                      className="w-16 h-12 md:w-24 md:h-24 rounded-lg"
                    />
                  </td>
                  <td>{sku}</td>
                  <td>${cost}</td>
                  <td>${sellingPrice}</td>
                  <td>{quantity}</td>
                  <td>{saleCount}</td>
                  <td className="flex flex-col md:flex-row gap-4 md:gap-0 items-center justify-center mx-auto my-auto">
                    <button
                      onClick={() => {
                        document
                          .getElementById(`update-modal-${product?.name}`)
                          .showModal();
                      }}
                      className="btn btn-xs btn-warning text-white"
                    >
                      Update
                    </button>
                    <dialog
                    id={`update-modal-${product?.name}`}
                    className="modal rounded"
                  >
                    <div className="modal-box w-11/12 max-w-5xl rounded-md mx-auto">
                      <UpdateProduct
                        product={product}
                        buttonText={"Update Product"}
                        heading={"Update Product"}
                        setIsProductUpdated={setIsProductUpdated}
                      />
                    </div>
                  </dialog>

                    <button
                      onClick={handleDeleteModal}
                      className="btn btn-xs ml-2 btn-error text-white"
                    >
                      Delete
                    </button>

                    <dialog
                      id={`delete_product`}
                      className="modal modal-middle"
                    >
                      <DeleteProduct id={product?._id} product={product} setIsProductDeleted={setIsProductDeleted}/>
                    </dialog>

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
export default ProductTable;
