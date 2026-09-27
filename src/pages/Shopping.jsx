import { Link } from "react-router-dom";

const tiles = [
  { slug: "vegetables", title: "Vegetables", image: "/images/veg1.jpg" },
  { slug: "milk", title: "Milk Products", image: "/images/milk.jpeg" },
  { slug: "kirana", title: "Kirana Items", image: "/images/kirana.jpeg" },
  { slug: "fancy", title: "Fancy Items", image: "/images/fancy items.jpeg" },
  { slug: "cooldrinks", title: "Cool Drinks", image: "/images/cooldrinks.jpeg" },
  { slug: "pickles", title: "Pickle Items", image: "/images/pickles.jpeg" },
];

export default function Shopping() {
  return (
    <>
      <img src="images/home1.jpeg" width="100%" height="400px" alt="TownBasket" />
      <marquee direction="left" scrollAmount="8" style={{ color: "green", background: "white" }}>
        <b>100% fresh and quality items with best offers</b>
      </marquee>
      <br /><br />
      <div className="container row">
        {tiles.map((tile) => (
          <div className="col-sm-4 mb-4" key={tile.slug}>
            <div className="card">
              <img src={tile.image} width="100%" height="250px" alt={tile.title} />
              <h4 className="card-title text-center">{tile.title}</h4>
              <Link
                to={`/category/${tile.slug}`}
                className="btn btn-block"
                style={{ backgroundColor: "green", color: "white" }}
              >
                Check
              </Link>

            </div>
          </div>
        ))}
      </div>
    </>
  );
}