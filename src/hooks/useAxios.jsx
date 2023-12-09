import axios from "axios";
import auth from "../../firebase.config";
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";

const productionUrl = 'https://inventory-back-inky.vercel.app/api/v1';
// const productionUrl = 'http://localhost:5000/api/v1';

const customFetch = axios.create({
    baseURL: productionUrl,
})


const useAxios = () => {
  customFetch.interceptors.response.use(
    (res) => {
      console.log('from interceptor', res)
      return res;
    },
    (error) => {
      if (error.response.status === 401 || error.response.status === 403) {
        console.log(error)
        toast.success('Session expired, please re-login')
        signOut(auth)
          .then((res) => {
            localStorage.removeItem('token')
            localStorage.removeItem('userInfo')
          })
          .error((e) => console.log(e));
      }
      return error.response
    }
  );
  return customFetch;
};

export default useAxios;

