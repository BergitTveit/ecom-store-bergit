import { useNavigate } from 'react-router-dom';

const CheckoutPage = () => {
  const navigate = useNavigate();

  const handleCheckout = () => {
    // Here you'll add cart clearing logic later
    navigate('/checkout-success');
  };

  return (
    <div>
      <h1>Checkout</h1>
      <div className="checkout-summary">
        <h2>Order Summary</h2>
        <div className="order-items">
          <p>Your items will appear here</p>
        </div>
        <div className="order-total">
          <p>Total: $0.00</p>
        </div>
        <button onClick={handleCheckout}>Complete Purchase</button>
      </div>
    </div>
  );
};

export default CheckoutPage;