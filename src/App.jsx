import './App.css'
import ProductCard from './components/productCard'

function App() {


  return (
    <div>
      <ProductCard name="coca-cola" price="999999" description="this is top badu bn" img="https://www.promotionproducts.com.au/blog/wp-content/uploads/2020/10/Product-Sample-Blog-post.jpg"/>


      <ProductCard 
      name="apple i phone 34" 
      price="2300" 
      description="dontn buy this machan" 
      img="https://static-obg.tcl.com/content/dam/brandsite/region/global/products/product-card/tcl30.png"/>
    </div>
  )
}

export default App
