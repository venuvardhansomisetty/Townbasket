import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <div className="top-banner">
        <h5>Free Delivery Available for billing above 500/-</h5>
      </div>
      <nav className="nav1 sticky">
        <h1>TownBasket 🛍️</h1>
      </nav>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-2">
            <nav className="navbar container sticky-top">
              <ul className="navbar-nav" style={{ padding: 20 }}>
                <li className="nav-item mb-3">
                  <Link to="/" className="btn btn-primary btn-block">Shopping Page</Link>
                </li>
                <li className="nav-item mb-3">
                  <Link to="/cart" className="btn btn-primary btn-block">Cart Page</Link>
                </li>
                <li className="nav-item mb-3">
                  <Link to="/myorders" className="btn btn-primary btn-block">My Orders</Link>
                </li>
                <li className="nav-item mb-3">
                  <Link to="/login" className="btn btn-primary btn-block">Login</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-sm-10">

            <Outlet />
          </div>
        </div>
      </div>
      <hr style={{ backgroundColor: "green", width: "100%", height: 20 }} />
      <footer>
        <div style={{ textAlign: "center" }}>
          <h2>Email</h2>
          <p>townbasket@gmail.com</p>
        </div>
      </footer>
    </>
  );
}