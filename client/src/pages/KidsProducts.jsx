import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import FilterSidebar from "../components/FilterSidebar";
import Layout from "../components/layouts/Layout";


const products = [
  {
    id: 1,
    name: 't-shirt',
    image: 'https://joyya.com/cdn/shop/files/joyya-t-shirt-kids-short-sleeve-t-shirt-black-made-to-order-mtk1c16-na-190303-197161.jpg?v=1724082699&width=1080',
    tag: 'New',
    price: '$49.99',
  },
  {
    id: 2,
    name: 't-shirt',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ-vLQssBrJPO0dtO4lPU7y3Mr4OIRFvKPAA&s',
    tag: 'New',
    price: '$29.99',
  },
  {
    id: 3,
    name: 't-shirt',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlO_VB7Y9EZDNGeETgKqyyPsTOzFHoU9R_FQ&s',
    tag: 'New',
    price: '$59.99',
  },
  {
    id: 4,
    name: 't-shirt',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpGDKnbIRoHw7vFgS73Z49K5WatT2SShP6ltAhmLTceSAiYk_FIuTx6_hNM5TaCY27DfE&usqp=CAU',
    tag: 'New',
    price: '$19.99',
  },
  {
    id: 5,
    name: 't-shirt ',
    image: 'https://m.media-amazon.com/images/I/81HR6gzWH8L._AC_UY1100_.jpg',
    tag: 'New',
    price: '$19.99',
  },
  {
    id: 6,
    name: 'shoes',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9aSQbPqavKKvQYdqmSKoSlP2HKZuYk6GqflMkF83QdpmtHxszTATMGi0ZVDMQAZlubAI&usqp=CAU',
    tag: 'New',
    price: '$49.99',
  },
  {
    id: 7,
    name: 'shorts',
    image: 'https://st.depositphotos.com/1317892/57088/i/450/depositphotos_570885540-stock-photo-swimming-shorts-for-boy-in.jpg',
    tag: 'New',
    price: '$29.99',
  },
  {
    id: 8,
    name: 'shorts',
    image: 'https://img.freepik.com/premium-photo/children-s-wear-shorts-isolated-white-background_483040-11431.jpg?w=360',
    tag: 'New',
    price: '$59.99',
  },
  {
    id: 9,
    name: 'slippers',
    image: 'https://loox.in/cdn/shop/files/blueshraky2_1.png?v=1713869219',
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
                    className={`absolute top-2 right-2 z-10 text-xl transition-colors ${wishlist.includes(product.id) ? 'text-red-600' : 'text-gray-500'
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

                  <div className="p-1 md:p-4 flex-1 flex md:flex-col justify-between  items space-x-1 bg-gray-100">
                    <div className="sm:block md:flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-gray-700">{product.name}</h3>
                      <p className="text-red-700 font-bold">{product.price}</p>
                    </div>
                    <button
                      onClick={handleAddToCart}
                      className=" w-[30%] md:hidden bg-[#fba418d0] text-white py-2 rounded-md hover:bg-red-700 transition"
                    >
                      <i class="bi bi-cart-plus"></i>
                    </button>

                    <button
                      onClick={handleAddToCart}
                      className="mt-4 w-full hidden md:block bg-[#fba418d0] text-white py-2 rounded-md hover:bg-red-700 transition"
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