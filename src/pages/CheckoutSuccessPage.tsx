import { Link } from "react-router-dom";

const CheckoutSuccessPage = () => {
  return (
    <div>
      <h1>Checkout Success!</h1>
      <p>Thank you for your order</p>
      <Link to="/">Back to Shop</Link>
    </div>
  );
};

export default CheckoutSuccessPage;
