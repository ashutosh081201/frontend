
import {Product} from "./Product.jsx";

export function ProductsGrid({ products, loadCart }) {
 
  return (
    <div className="products-grid">
      {products.map((product) => {
         
        return (
          <Product product={product} key={product.id} loadCart={loadCart} />
        );
      })}
    </div>
  );
}
