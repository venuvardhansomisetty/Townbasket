import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Login() {
  const [isRegister, setIsRegister] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { register, login } = useCart();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    const result = isRegister ? register(name, email, password) : login(email, password);
    if (!result.success) {
      setError(result.message);
      return;
    }
    navigate("/");
  };

  return (
    <>
      <h1 style={{ color: "white", backgroundColor: "green", textAlign: "center", width: "100%" }}>
        {isRegister ? "Create Account" : "Login"}
      </h1>
      <div className="login-card">
        <form onSubmit={handleSubmit}>
          {isRegister && (

            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text" id="name" className="form-control"
                value={name} onChange={(e) => setName(e.target.value)} required
              />
            </div>
          )}
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email" id="email" className="form-control"
              value={email} onChange={(e) => setEmail(e.target.value)} required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password" id="password" className="form-control"
              value={password} onChange={(e) => setPassword(e.target.value)} required
            />
          </div>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <br/>
          <button type="submit" className="btn btn-block" style={{ backgroundColor: "green", color: "white" }}>
            {isRegister ? "Register" : "Login"}
          </button>
        </form>
        <p className="text-center mt-3">
          {isRegister ? "Already have an account? " : "New to TownBasket? "}
          <a href="#" onClick={(e) => { e.preventDefault(); setIsRegister(!isRegister); setError(""); }}>
            {isRegister ? "Login" : "Create an account"}
          </a>

        </p>
      </div>
    </>
  );
}