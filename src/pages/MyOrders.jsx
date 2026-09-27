import { useCart } from "../context/CartContext";

export default function MyOrders() {
  const { orders, removeOrder } = useCart();

  return (
    <>
      <h1 style={{ color: "white", backgroundColor: "green", textAlign: "center", width: "100%" }}>
        My Orders
      </h1>
      <br />
      {orders.length === 0 ? (
        <div className="alert alert-info text-center">You haven't placed any orders yet.</div>
      ) : (
        orders.map((order) => (
          <div className="card mb-4 border-success" key={order.id}>
            <div className="card-header bg-success text-white d-flex justify-content-between align-items-center">
              <span><strong>Order ID:</strong> {order.id}</span>
              <span><strong>Date:</strong> {order.date}</span>
            </div>
            <div className="card-body bg-white text-dark">
              <h5>Items Purchased:</h5>
              <ul>
                {order.items.map((item) => (
                  <li key={item.name}>{item.name} x {item.qty} = ₹ {item.price * item.qty}</li>
                ))}
              </ul>
              <hr />
              <div className="d-flex justify-content-between align-items-center flex-wrap">
                <button className="btn btn-sm btn-outline-danger" onClick={() => removeOrder(order.id)}>
                  Cancel / Delete Order
                </button>

                <h5 className="text-success mb-0">Total Bill Paid: ₹ {order.total}</h5>
              </div>
            </div>
          </div>
        ))
      )}
    </>
  );
}