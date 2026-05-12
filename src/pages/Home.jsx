import ProductCard from "../components/ProductCard"
import { getProducts } from "../data/products"


const Home = () => {
    const products = getProducts()
    
  return (
   <div className="page">
    <div className="home-hero">
        <h1 className="home-title">welcome to FK stores</h1>
        <p className="home-subtitle">discover amazing products at great prices</p>
    </div>

    <div className="container">
        <h2 className="page-title">our products</h2>
        <div className="product-grid">{products.map((product) => (
            <ProductCard product={product} key={product.id}/>
        ))}
        </div>
    </div>
   </div>
  )
}

export default Home
