import React, { useEffect, useState } from "react";
import { NewFooter, NewHeader } from "../../components/system";
import { loadStripe } from "@stripe/stripe-js";

const Payment = () => {
  const [stripePromis, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    setStripePromise(
      loadStripe(
        "pk_test_51K24jPDlUTLGsrm9wEpWIjbCe7ZwdU3G0EQoMKL1L8aeRYDiYZQ1qxjZS8Lfem3QIjLEPDTE3RzR3mdZoUHk8lEq005wTXQPgt"
      )
    );
  }, []);
  return (
    <>
      <NewHeader />
      {/* Main Content */}
      <main></main>
      <NewFooter />
    </>
  );
};

export default Payment;
