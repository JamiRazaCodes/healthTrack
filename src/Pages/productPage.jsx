import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import landingPageData from '../Webdata/webdata';
import { Pagination, Slider } from 'antd';

function ProductPage() {
  const [loading, setLoading] = useState(true); 
  const { healthProducts } = landingPageData;
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', 'Supplements', 'Fitness Equipment', 
  'Gadgets', 'Beverages', 'Wellness', 'Snacks', 'Accessories', 'Beauty' ]
  const [currentPage, setCurrentPage] = useState(1); 
  const [productsPerPage] = useState(8);
  const [priceRange, setPriceRange] = useState([0, 199]);

  const filteredProducts = landingPageData.healthProducts.filter((product) => {
    const productPrice = parseFloat(product.price);
    const isWithinPriceRange = productPrice >= priceRange[0] && productPrice <= priceRange[1];
    return (selectedCategory === 'All' || product.category === selectedCategory) && isWithinPriceRange;
  });

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct); 
  
  const handleChangePage = (page) => {
    setCurrentPage(page); 
  };

  useEffect(() => {
   
    setTimeout(() => {
      setLoading(false); 
    }, 1000);
  }, []);

  return (
    <div className='container mx-auto py-12' >
      <div className="flex justify-center space-x-4 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)} 
            className={`px-4 py-2 rounded-md text-white ${
              selectedCategory === category ? 'bg-indigo-600' 
                : 'bg-indigo-400 hover:bg-indigo-500'
            }`}
          >
            {category}
          </button>
        ))}
      </div> 
      <div className="flex justify-end mr-15 mb-8">
        <div className="w-1/1">
          <h2 className="text-xl font-bold mb-4 text-center">Filter by Price</h2>
          <Slider
            range
            min={0}
            max={199}
            defaultValue={[0, 199]}
            onChange={(value) => setPriceRange(value)}
           
          />
          <div className="flex justify-between mt-2">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </div>
        </div>
      </div>


      <h1 className="text-4xl font-bold text-center my-10">Health Products</h1>
      
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-36 w-36 border-t-4 border-blue-500">
            <h1 className='text-center text-2xl m-8'>Loading</h1></div>
        </div>
      ) : (
        <>
        <ProductCard healthProducts={currentProducts} />
        <div className="flex justify-center mt-8">
            <Pagination
              current={currentPage} 
              total={filteredProducts.length} 
              pageSize={productsPerPage} 
              onChange={handleChangePage} 
            />
          </div>
       
        </>
      )}
    </div>
  );
}

export default ProductPage;
