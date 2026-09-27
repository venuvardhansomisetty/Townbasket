import { useParams, Link } from "react-router-dom";
import { categories } from "../data/products";
import ProductCard from "../components/ProductCard";

export default function CategoryPage() {
  const { slug } = useParams();
  const category = categories[slug];

  if (!category) {
    return <h3>Category not found.</h3>;
  }

  return (
    <>
      <img src={category.banner} width="100%" height="400px" alt={category.title} />
      <marquee direction="left" scrollAmount="8" style={{ color: "green", background: "white" }}>
        <b>100% fresh and quality items with Best Offers</b>
      </marquee>
      <br /><br />
      <h1 style={{ color: "white", backgroundColor: "green", textAlign: "center", width: "100%" }}>
        {category.title}
      </h1>
      <div className="container row">
        {category.items.map((product) => (
          <ProductCard key={product.name} product={product} />
        ))}
      </div>
      <br /><br />
      <Link to="/" className="btn container btn-primary btn-block ">Back</Link>
    </>
  );
}