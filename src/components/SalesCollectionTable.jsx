import React, { useEffect } from 'react'
import useAxios from '../hooks/useAxios';
import UpdateProduct from './UpdateProduct';
import DeleteProduct from './DeleteProduct';
import { nanoid } from 'nanoid';
import { formatDate } from '../utils';

const SalesCollectionTable = ({products, totalCount}) => {

  return (
    <>
    <div className='mt-8'>
      <div className='overflow-x-auto'>
        <h1 className='my-6'>{totalCount ? totalCount : 0} Products Sold</h1>
        <table className='table table-zebra text-center'>

          <thead>
            <tr>
              <th className='text-left'>Name</th>
              <th>Image</th>
              <th>Profit</th>
              <th>Selling Date</th>
            </tr>
          </thead>
          <tbody>
            {
             products?.length > 0 ? products.map((product) => {
              const { name, image, profit, soldDate} = product;
 
              return (
                <tr key={nanoid(8)}>
                  <td className='text-left'>{name}</td>
                  <td>
                  <img
                      src={image}
                      className="w-16 h-12 md:w-24 md:h-24 rounded-lg mx-auto"
                    />
                  </td>
                  <td>{parseInt(profit)}</td>
                  <td>{formatDate(soldDate)}</td>
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
    </>
  )
}

export default SalesCollectionTable