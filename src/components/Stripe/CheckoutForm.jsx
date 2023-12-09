import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Auth/AuthProvider";
import useAxios from "../../hooks/useAxios";
import { toast } from "react-toastify";


const CheckoutForm = ({currentPlan}) => {
    const [error, setError] = useState('');
    const [clientSecret, setClientSecret] = useState('')
    const [transactionId, setTransactionId] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const axios = useAxios();
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const token = localStorage.getItem('token')

    let totalPrice;
    if(currentPlan==='silver') {
      totalPrice = 10
    }else if (currentPlan==='gold') {
      totalPrice = 20
    }
    else if (currentPlan==='platinum') {
      totalPrice = 50
    }

    useEffect(() => {
      if (totalPrice > 0) {axios.post("/plan/stripe",
            { amount: totalPrice },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          )
          .then((res) => {
            setClientSecret(res?.data?.clientSecret);
          });
      }
    }, [totalPrice]);

    const handleSubmit = async (event) => {
      event.preventDefault();

      if (!stripe || !elements) {
        return;
      }


      const card = elements.getElement(CardElement);

      if (card === null) {
        return;
      }

      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card,
      });

      if (error) {
        console.log("payment error", error);
        setError(error.message);
      } else {
        console.log("create payment", paymentMethod);
        setError("");
      }

      // Payment process start
      const { paymentIntent, error: confirmError } =
        await stripe.confirmCardPayment(clientSecret, {
          payment_method: {
            card: card,
          },
        });

      if (confirmError) {
        console.log("confirm error", confirmError);
      } else {
        console.log("confirm Payment", paymentIntent);
        if (paymentIntent.status === "succeeded") {
          setTransactionId(paymentIntent.id);
          const paymentInfo = {
            email: user.email,
            price: totalPrice,
            transactionId: paymentIntent.id,
            plan: currentPlan,
          };

          const paymentRes = await axios.post("/plan/payment", paymentInfo, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          
          if (paymentRes.status === 200 || paymentRes.status === 201) {
            const selectedPlan = { plan : currentPlan }
            axios.post("/plan", selectedPlan, {
              headers: {
                Authorization: `Bearer ${token}`,
              },
              }).then((res) => {
                console.log(res)
                const data = res?.data
                console.log(data)
                toast.success("Payment success!");
                navigate("/dashboard/manager/products");
              })
              .catch(e=> console.log(e))
          }
        }
      }
    };

    
    return (
      <form onSubmit={handleSubmit}>
        <CardElement options={{
          style: {
            base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                    color: 'gray',
                },
            },
            invalid: {
                color: '#9e2146',
            },
        },
        }}/>
        <button
          className="btn btn-warning my-12"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Buy Your Plan
        </button>
      </form>
    );
};

export default CheckoutForm;