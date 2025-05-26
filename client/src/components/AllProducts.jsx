import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const products = [
  {
    id: 1,
    name: 't-shirt',
    image: 'https://ignisdrago.in/cdn/shop/products/tigers-leap-t-shirt-black_800x.jpg?v=1617282055',
    tag: 'New',
    price: '$49.99',
  },
  {
    id: 2,
    name: 't-shirt',
    image: 'https://www.ekadwi.com/cdn/shop/files/EKA-DWI-MENS-PRINTED-COTTON--TEE_5-22-04-2024.jpg?v=1737706627&width=1080',
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
    name: 'half-shirt',
    image: 'https://duders.in/cdn/shop/files/MenShirts_3.png?v=1702724615',
    tag: 'New',
    price: '$19.99',
  },
  {
    id: 5,
    name: 't-shirt',
    image: 'https://m.media-amazon.com/images/I/81HR6gzWH8L._AC_UY1100_.jpg',
    tag: 'New',
    price: '$19.99',
  },
  {
    id: 6,
    name: 'leather-skirt',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRANjkzVNJ8VogC_cTgWVT_lQPJO0pZyvFB9g&s',
    tag: 'New',
    price: '$49.99',
  },
  {
    id: 7,
    name: 'dress',
    image: 'https://static.vecteezy.com/system/resources/thumbnails/042/409/617/small_2x/ai-generated-beautiful-red-woman-dress-isolated-on-transparent-background-png.png',
    tag: 'New',
    price: '$29.99',
  },
  {
    id: 8,
    name: 'dress',
    image: 'https://images.vexels.com/media/users/3/129408/isolated/preview/729a1419381b9d6572742b4ae641c7d6-black-ladies-dress.png',
    tag: 'New',
    price: '$59.99',
  },
  {
    id: 9,
    name: 'shirt ',
    image: 'https://duders.in/cdn/shop/files/MenShirts_3.png?v=1702724615',
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

const AllProducts = () => {
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
    <section className="px-4 bg-white">
      <div className="w-full mx-auto font-[helvetica]">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-5">All Products</h2>
        <hr className="mb-10 text-red-950" />

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
  );
};

export default AllProducts;
