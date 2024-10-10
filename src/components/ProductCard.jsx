import React from 'react';
import Button from "./Button";
import { useNavigate } from 'react-router';

function ProductCard({ healthProducts }) { 
  const navigate = useNavigate();
  const handleProductClick = (id) => {
    navigate(`/productPage/${id}`);
  };

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {healthProducts.map((product) => (
              <div key={product.id} className="lg:w-1/4 md:w-1/2 p-4 w-full"
                onClick={() => handleProductClick(product.id)}
              >
                <a className="block relative h-48 rounded overflow-hidden">
                  <img
                    alt={product.title}
                    className="object-cover h-48 w-48  object-center block"
                    src={product.img} 
                  />
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    {product.category}
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    {product.title}
                  </h2>
                  <p className="mt-1">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductCard;
