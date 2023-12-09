import axios from "axios";

export const FirebaseErrorMessage = (error) => {
    let errorMessageText = error.message.split("auth/")[1]?.split(")")[0]?.split("-")?.join(" ")
    const message = errorMessageText?.charAt(0)?.toUpperCase() + errorMessageText?.slice(1) || 'Something went wrong, please try again later'
    return message;
}

// const productionUrl = 'https://inventory-back-inky.vercel.app/api/v1';
const productionUrl = 'http://localhost:5000/api/v1';

export const customFetch = axios.create({
    baseURL: productionUrl,
})

export const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    };
  
    return date.toLocaleString('en-US', options);
  }


  export const calculateTotalCost = (products) =>  {
    return products.reduce((totalCost, product) => totalCost + parseFloat(product.sellingPrice), 0);
}