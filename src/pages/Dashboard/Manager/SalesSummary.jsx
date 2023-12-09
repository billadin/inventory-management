import React, { useContext, useEffect, useState } from 'react'
import { Loading, Pagination, SalesCollectionTable, SectionTitle } from '../../../components'
import useAxios from '../../../hooks/useAxios'
import {FcSalesPerformance} from 'react-icons/fc'
import {GiTakeMyMoney} from 'react-icons/gi'
import {AiFillThunderbolt} from 'react-icons/ai'
import { useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../../Auth/AuthProvider'
import { Helmet } from 'react-helmet-async'

const SalesSummary = () => {
    const axios = useAxios()
    const [loading, setLoading] = useState()
    const token = localStorage.getItem('token')
    const [totalSales, setTotalSales] = useState()
    const [totalInvest, setTotalInvest] = useState()
    const [totalProfit, setTotalProfit] = useState()
    const [products, setProducts] = useState()
    const [isPageChanged, setIsPageChanged] = useState(false)
    const [pageCount, setPageCount] = useState()
    const [totalCount, setTotalCount] = useState()
    const [page, setPage] = useState()

   
    const pages = Array.from({ length: pageCount }, (_, index) => {
        return index + 1;
    });
    const { search, pathname } = useLocation();
    const navigate = useNavigate();

      const handlePageChange = (pageNumber) => {
        const searchParams = new URLSearchParams(search);
        searchParams.set('page', pageNumber);
        navigate(`${pathname}?${searchParams.toString()}`);
        setIsPageChanged(true)
      };
    
   
      if(loading) {
        return <Loading/>
      }
      

    useEffect(()=> {
      
        axios(`/sales/search${search}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }).then((res)=> {
            setLoading(true)
            const data = res?.data
            const {totalSales, totalInvest, totalProfit} = data?.salesObject;
            setTotalSales(totalSales)
            setTotalInvest(totalInvest)
            setTotalProfit(totalProfit)
            setPage(data?.page)
            setPageCount(data?.pageCount)
            setTotalCount(data?.totalCount)
            setProducts(data?.result)
            setLoading(false)
          })

          
          setIsPageChanged(false)
    },[isPageChanged])

    // if (pageCount < 2) return null;
    
  return (
    <>
    <Helmet>
      <title>Sphere Inventory | Manager - sales summary </title>
    </Helmet>
      <div>
        <SectionTitle text={"Sales Count"} />
        <div className='text-center my-14'>
          <div className="stats shadow">
            <div className="stat">
              <div className="stat-figure text-secondary">
              <AiFillThunderbolt className='text-4xl font-bold'/>
              </div>
              <div className="stat-title text-warning font-semibold text-2xl">Total Sales</div>
              <div className="stat-value text-primary">{totalSales ? totalSales : 0 }</div>
            </div>

            <div className="stat">
              <div className="stat-figure text-secondary">
              <GiTakeMyMoney className='text-5xl font-bold'/>
              </div>
              <div className="stat-title text-warning font-semibold text-2xl">Total Profit</div>
              <div className="stat-value text-primary">${totalProfit ? totalProfit : 0}</div>
            </div>

            <div className="stat place-items-center">
              <div className="stat-figure text-secondary">
              <FcSalesPerformance className='text-5xl font-bold'/>
              </div>
              <div className="stat-title text-warning font-semibold text-2xl">Total Invest</div>
              <div className="stat-value text-primary">${totalInvest ? totalInvest : 0}</div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <SectionTitle text={"Sales History"} />
        {
          !loading &&
        <SalesCollectionTable products={products} totalCount={totalCount} />
        }
        
        <>
      <div className="mt-16 flex justify-end">
        <div className="join">
          <button
            className="btn btn-xs sm:btn-md join-item"
            onClick={() => {
              let prevPage = page - 1;
              if (prevPage < 1) prevPage = pageCount;
              handlePageChange(prevPage);
            }}
          >
            Prev
          </button>
          {pages && pages.map((pageNumber) => {
            return (
              <button
                key={pageNumber}
                onClick={() => handlePageChange(pageNumber)}
                className={`btn btn-xs sm:btn-md border-none join-item ${
                  pageNumber === page ? "bg-base-300 border-base-300 " : ""
                }`}
              >
                {pageNumber}
              </button>
            );
          })}
          <button
            className="btn btn-xs sm:btn-md join-item"
            onClick={() => {
              let nextPage = page + 1;
              if (nextPage > pageCount) nextPage = 1;
              handlePageChange(nextPage);
            }}
          >
            Next
          </button>
        </div>
      </div>
    </>
      </div>
    </>
  );
}

export default SalesSummary