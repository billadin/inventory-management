import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import SectionTitle from "../SectionTitle";


const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK);

const StripeForm = ({currentPlan}) => {

    return (
        <div>
          <SectionTitle text={'Enter your card information'}/>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm currentPlan={currentPlan}></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default StripeForm;