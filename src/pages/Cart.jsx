import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart, removeFromCart, cartTotal, placeOrder } = useCart();
  const navigate = useNavigate();

  const handlePlaceOrder = () => {
    const success = placeOrder();
    if (!success) {
      alert("Your cart is empty!");
      return;
    }
    alert("Order placed successfully!");
    navigate("/myorders");
  };

  return (
    <>
      <h1 style={{ color: "white", backgroundColor: "green", textAlign: "center", width: "100%" }}>
        Your Cart
      </h1>
      <br />
      <table className="table table-bordered bg-white">
        <thead style={{ backgroundColor: "green", color: "white" }}>
          <tr><th>Item</th><th>Price</th><th>Qty</th><th>Subtotal</th><th>Action</th></tr>
        </thead>
        <tbody>
          {cart.length === 0 ? (
            <tr><td colSpan="5" className="text-center text-muted">Your cart is empty!</td></tr>
          ) : (
            cart.map((item) => (
              <tr key={item.name}>
                <td>{item.name}</td>
                <td>₹ {item.price}</td>
                <td>{item.qty}</td>
                <td>₹ {item.price * item.qty}</td>
                <td>
                  <button className="btn btn-sm btn-danger" onClick={() => removeFromCart(item.name)}>
                    Remove
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      <div className="d-flex justify-content-between align-items-center flex-wrap">
        <h4>Total: ₹ {cartTotal}</h4>
        {cart.length > 0 && (
          cartTotal >= 500 ? (
            <p style={{ fontWeight: "bold", color: "green" }}>
              🎉 Congratulations! We offer FREE delivery!
            </p>
          ) : (
            <p style={{ fontWeight: "bold", color: "red" }}>
              Add ₹ {500 - cartTotal} more to get Free Delivery!
            </p>
          )
        )}
      </div>
      <button
        className="btn btn-block"
        style={{ backgroundColor: "green", color: "white" }}
        onClick={handlePlaceOrder}
      >
        Place Order
      </button>
    </>
  );
}