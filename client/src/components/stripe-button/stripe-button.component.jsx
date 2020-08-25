import React from 'react';
import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price*100; //cent into dollar
    const publishableKey = 'pk_test_51H0vPFLqCJvAfUDEnE7svCACf2I3E3E8l1CvFMa9NCHtff7LFxVJGqnw2FbCCqIwM2TTQGsjt1m8dk9FBZh4SCSc00hxWh9rMr';
    const onToken = token => {
        console.log(token);
    }

    return(
        <StripeCheckout
            label="Pay Now"
            name="Crown Clothing"
            billingAddress=""
            shippingAddress=""
            image="https://svgshare.com/i/CUz.svg"
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    );

}

export default StripeCheckoutButton;