import { useState } from "react";
import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  const [qty, setQty] = useState(1);
  const { addToCart } = useCart();

  const handleAdd = () => {
    addToCart(product.name, product.price, product.unit, qty);
    alert(product.name + " added to cart!");
  };

  return (
    <div className="col-sm-4 mb-4">
      <div className="card" style={{ backgroundColor: "blanchedalmond" }}>
        <img src={product.image} width="100%" height="250px" alt={product.name} />
        <h4 className="card-title text-center">{product.name}</h4>
        <div style={{ textAlign: "center" }}>
          Price
          <input type="text" readOnly value={`₹ ${product.price}`} style={{ textAlign: "center" }} />
          {" "}/{product.unit}
          <br /><br />
          <input
            type="number"
            min="1"
            max="10"
            value={qty}
            onChange={(e) => setQty(Number(e.target.value))}
            style={{ textAlign: "center" }}
          />
          {" "}{product.unit}
          <br /><br />

          <button
            type="button"
            className="btn btn-block"
            style={{ backgroundColor: "green", color: "white" ,textAlign:"center"}}
            onClick={handleAdd}
          >
            ADD
          </button>
        </div>
      </div>
    </div>
  );
}