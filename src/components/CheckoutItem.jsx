import { nanoid } from 'nanoid';
import React from 'react'


const order = ({order}) => {

   
  return (
    <>
      <article
        key={nanoid(8)}
        className="mb-12 flex flex-col justify-between gap-y-4 sm:flex-row flex-wrap border-b border-base-300 pb-6 last:border-b-0"
      >
        {/* IMAGE */}
        <img
          src={order?.image}
          alt={order?.name}
          className="h-24 w-24 rounded-lg sm:h-32 sm:w-32 object-cover"
        />
        {/* INFO */}
        <div className="sm:ml-16 sm:w-48 ">
          {/* TITLE */}
          <h3 className="capitalize font-medium">{order?.name}</h3>
          <p className="mt-4 text-sm capitalize flex items-center gap-x-2">
            Cost: ${order?.cost}
          </p>
          <p className="mt-4 text-sm capitalize flex items-center gap-x-2">
            Profit: ${order?.profit}
          </p>
          <p className="mt-4 text-sm capitalize flex items-center gap-x-2">
            Discount: ${order?.discount}
          </p>
        </div>
        <div className="sm:ml-16 sm:w-48 ">
          <h3 className="capitalize font-medium">SKU: {order?.sku}</h3>
          <p className="mt-4 text-sm capitalize flex items-center gap-x-2">
            category: {order?.category}
          </p>
          <p className="mt-4 text-sm capitalize flex items-center gap-x-2">
            location: {order?.location}
          </p>
        </div>
        <p className="font-medium ">Selling Price: ${order?.sellingPrice}</p>
         <div className="sm:ml-12 ">
          <button
            className="btn btn-md btn-primary mt-2 link-hover text-sm text-white"
          >
            View Details
          </button>
        </div> 
      </article>
    </>
  );
}

export default order