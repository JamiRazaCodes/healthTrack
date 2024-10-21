import React, { useContext} from 'react';
import { useParams } from 'react-router-dom';
import landingPageData from '../Webdata/webdata';
import Button from '../components/Button';


function ProductDetail() {
  const { id } = useParams(); 
  const product = landingPageData.healthProducts.find((p) => p.id === parseInt(id)); 

  if (!product) {
    return <div className='text-8xl font-bold text-red-800 text-center m-11'>Product not found</div>;
  }

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt="ecommerce"
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            src={product.img || "https://dummyimage.com/400x400"}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">{product.category}</h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{product.title}</h1>
            <p className="leading-relaxed">{product.description}</p>
            <div className="flex">
              <span className="title-font font-medium text-2xl text-gray-900">${product.price}</span>
              <div className="flex ml-auto py-2 px-6">
              <Button
               label="Add to cart"
               onClick={() => {
              addItemToCart(product); 
              console.log('Product added:', product); 
              }}
              /> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetail;
