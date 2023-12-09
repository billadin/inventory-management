import { useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";
import { nanoid } from "nanoid";
import SubmitBtn from "./SubmitBtn";
import FormInput from "./FormInput";
import { Form, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useAdmin from "../hooks/useAdmin";
import Loading from "./Loading";



const AdminSalesCollectionTable = () => {
    const token = localStorage.getItem('token')
    const axios = useAxios()
    const [users, setUsers] = useState()
    const [page, setPage] = useState()
    const [pageCount, setPageCount] = useState()
    const [isPageChanged, setIsPageChanged] = useState(false)
    const [totalCount, setTotalCount] = useState()
    const [loading, setLoading] = useState(false)


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

    const handleSendButton = () => {
        document.getElementById('send_promo_notice').showModal()
    }

    const handleSend = (e) => {
        e.preventDefault()
const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    console.log(data)
  toast.success('Success sent the email')
  document.getElementById('send_promo_notice').close()
    }



  useEffect(()=> {
    setLoading(true)
    axios(`/sales/admin/users${search}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      .then((res)=> {
        const data = res?.data
        setPage(data?.page)
        setPageCount(data?.pageCount)
        setTotalCount(data?.totalCount)
        console.log(data)
        setUsers(data?.allUsers)
      })
      setIsPageChanged(false)
      setLoading(false)
  },[isPageChanged])

  

  return (
    <>
      {!loading && (
        <div>
          <div className="mt-8">
            <div className="overflow-x-auto">
              <h1 className="text-lg font-bold my-10">
                {totalCount ? totalCount : 0} users found
              </h1>
              <table className="table table-zebra">
                <thead>
                  <tr>
                    <th>User Name</th>
                    <th>Email</th>
                    <th>Shop Name</th>
                    <th>Role</th>
                    <th>Send Email</th>
                  </tr>
                </thead>
                <tbody>
                  {users?.length > 0 ? (
                    users.map((user) => {
                      return (
                        <tr key={nanoid(8)}>
                          <td>{user?.username}</td>
                          <td>{user?.email}</td>
                          <td>{user?.shopName}</td>
                          <td>{user?.role}</td>
                          <td>
                            {!user?.role || !user?.shopName ? (
                              ""
                            ) : (
                              <button
                                onClick={handleSendButton}
                                className="btn btn-warning text-white"
                              >
                                Send Email
                              </button>
                            )}
                          </td>
                        </tr>
                      );
                    })
                  ) : (
                    <tr className="mt-2 font-semibold">
                      <td>No user found</td>
                    </tr>
                  )}
                </tbody>
              </table>
              <dialog id="send_promo_notice" className="modal rounded">
                <div className="modal-box  rounded-md mx-auto">
                  <div className="flex justify-between">
                    <h3 className="font-bold text-2xl mb-2">
                      Send email to Shop Admin
                    </h3>
                    <form method="dialog">
                      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                        ✕
                      </button>
                    </form>
                  </div>
                  <Form onSubmit={handleSend} method="POST">
                    <div>
                      <FormInput
                        type="email"
                        label="email"
                        name="email"
                        required={true}
                      />
                    </div>
                    <div className="mt-8 mx-auto w-40">
                      <SubmitBtn text="Send" />
                    </div>
                  </Form>
                </div>
              </dialog>
            </div>
          </div>

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
              {pages &&
                pages.map((pageNumber) => {
                  return (
                    <button
                      key={pageNumber}
                      onClick={() => handlePageChange(pageNumber)}
                      className={`btn btn-xs sm:btn-md border-none join-item ${
                        pageNumber === page
                          ? "bg-base-300 border-base-300 "
                          : ""
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
        </div>
      )}
    </>
  );
};

export default AdminSalesCollectionTable;