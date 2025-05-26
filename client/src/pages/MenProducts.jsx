import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import FilterSidebar from "../components/FilterSidebar";
import Layout from "../components/layouts/Layout";


const products = [
  {
    id: 1,
    name: 't-shirt ',
    image: 'https://ignisdrago.in/cdn/shop/products/tigers-leap-t-shirt-black_800x.jpg?v=1617282055',
    tag: 'New',
    price: '$49.99',
  },
  {
    id: 2,
    name: 'shirt',
    image: 'https://tiimg.tistatic.com/fp/1/007/621/men-s-full-sleeves-casual-formal-wear-checked-blue-white-shirt-965.jpg',
    tag: 'New',
    price: '$29.99',
  },
  {
    id: 3,
    name: 'perfume',
    image: 'https://pierreguillaumeparis.com/app/uploads/2024/09/Pierre-Guillaume-Paris-Staelios-Bouteille-Parfum-100ml-Sillage-Tenue-1.png',
    tag: 'New',
    price: '$59.99',
  },
  {
    id: 4,
    name: 't-shirt Everyday Wear',
    image: 'https://duders.in/cdn/shop/files/MenShirts_3.png?v=1702724615',
    tag: 'New',
    price: '$19.99',
  },
  {
    id: 5,
    name: 'shirt',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzOeu83I1ou4aSaZ_yQDUHIGRO8S2UHw62toOefTZFaRY6m-mWzBQPYXfu1R7m-HgpLGc&usqp=CAU',
    tag: 'New',
    price: '$19.99',
  },
  {
    id: 6,
    name: 'jeans',
    image: 'https://img.freepik.com/premium-photo/men-s-blue-jeans-white-background_254845-27954.jpg',
    tag: 'New',
    price: '$49.99',
  },
  {
    id: 7,
    name: 'shoes',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTim_hTbd1tTCfEiHy0nwBIoMNvgtkUf3gzXw&s',
    tag: 'New',
    price: '$29.99',
  },
  {
    id: 8,
    name: 'jeans',
    image: 'https://static.vecteezy.com/system/resources/previews/024/569/953/large_2x/blue-jeans-denim-pants-composition-modern-women-s-and-men-s-fashion-pants-texture-isolated-on-white-background-photo.jpg',
    tag: 'New',
    price: '$59.99',
  },
  {
    id: 9,
    name: 'shorts',
    image: 'https://img.freepik.com/premium-photo/black-men-shorts-isolated-white-background-with-clipping-path_281691-4365.jpg',
    tag: 'New',
    price: '$19.99',
  },
  {
    id: 10,
    name: 'sunglasses',
    image: 'https://png.pngtree.com/element_our/png/20181129/sunglasses-graphic-design-template-vector-png_248576.jpg',
    tag: 'New',
    price: '$19.99',
  },
];

const NewProducts = () => {
  const [wishlist, setWishlist] = useState([]);

  const toggleWishlist = (productId) => {
    setWishlist((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  const handleAddToCart = () => {
    toast('Item added to cart!');
  };

    return (
        <Layout>
            <div className="flex flex-col lg:flex-row mb-5">
                {/* Sidebar */}
                <div className=''>
                    <FilterSidebar />
                </div>
         <section className="px-4 bg-white md:border-l-1 mt-5">
              <div className="w-full mx-auto font-[helvetica]">
        
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                  {products.map((product) => (
                    <div
                      key={product.id}
                      className="relative rounded-t-xl overflow-hidden shadow-sm hover:shadow-md transition duration-300 bg-white flex flex-col"
                    >
                      <button
                        onClick={() => toggleWishlist(product.id)}
                        className={`absolute top-2 right-2 z-10 text-xl transition-colors ${
                          wishlist.includes(product.id) ? 'text-red-600' : 'text-gray-500'
                        }`}
                      >
                        <i className="bi bi-heart-fill"></i>
                      </button>
        
                      <Link to={`/product/${product.id}`}>
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-64 object-contain"
                        />
                      </Link>
        
                      <div className="p-4 flex-1 flex flex-col justify-between bg-gray-100">
                        <div className="sm:block md:flex items-center justify-between">
                          <h3 className="text-lg font-semibold text-gray-700">{product.name}</h3>
                          <p className="text-red-700 font-bold">{product.price}</p>
                        </div>
        
                        <button
                          onClick={handleAddToCart}
                          className="mt-4 w-full hidden md:block  bg-[#fba418d0] text-white py-2 rounded-md hover:bg-red-700 transition"
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
        
                <div className="mx-auto flex justify-center">
                  <Link
                    to="/products"
                    className="mt-8 bg-white border text-black px-6 py-3 rounded-md transition hover:bg-gray-300"
                  >
                    View All Products
                  </Link>
                </div>
              </div>
            </section>
            </div>
        </Layout>
    );
}
export default NewProducts;