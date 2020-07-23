import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51H8AoQAwdFyHJlIQ23dLjwbsxvD7bbTq5hbJWvtv1DYYnEkbPjZ2x639UdLcXDL70mrW3ebXIanjFaBfgmqPvVt100Fujx7yxR';

    const onToken = token => {
        console.log(token);
        alert("Payment Succesful");
    }

    return (
        <StripeCheckout 
            label="Pay Now"
            name="CRWN Clothing Ltd."
            billingAddress
            shippingAddress
            image="https://sendeyo.com/up/d/f3eb2117da"
            description={`Your total is ${price}`}
            amount={priceForStripe}
            panelLabel="Pay now"
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;