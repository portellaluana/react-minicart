import { Shipping } from "../checkout/components/shipping/Shipping";
import { Contact } from "./components/contact/Contact";
import { OrderSummary } from "./components/orderSummary/OrderSummary";
import { Navbar } from "../checkout/components/navbar/Navbar";

export const Checkout = () => {
  return (
    <>
      <Navbar />
      <div className="checkout-container">
        <div className="contact-info">
          <Shipping />
          <Contact />
        </div>
        <div className="order-summary-content">
        <OrderSummary />
        </div>
      </div>
   </>
  );
};
