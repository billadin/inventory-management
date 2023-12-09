import { PDFDownloadLink } from '@react-pdf/renderer'
import React from 'react'
import PDFContainer from './PDFContainer'
import { calculateTotalCost, formatDate } from '../utils'
import { nanoid } from 'nanoid'

const Receipt = ({orders}) => {

  return (
    <>
      <div>
      <table className="table table-zebra">
        <thead>
          <tr>
            <th>Name</th>
            <th>cost</th>
            <th>Profit</th>
            <th>Selling Date</th>
            <th>Selling Price</th>
          </tr>
        </thead>
        <tbody>
          {orders?.length > 0 ? (
            orders.map((product) => {
              const { name, cost, profit, soldDate, quantity, sellingPrice } = product;

              return (
                <tr key={nanoid(8)}>
                  <td>{name}</td>
                  <td>${cost}</td>
                  <td>{parseInt(profit)}</td>
                  <td>{quantity}</td>
                  <td>${sellingPrice}</td>
                </tr>
              );
            })
          ) : (
            <tr className="mt-2 font-semibold">
              <td>No products found</td>
            </tr>
          )}
        </tbody>
      </table>
      <p className='text-right my-4'>Total: ${calculateTotalCost(orders)}</p>
     </div>
    </>
  );
}

export default Receipt