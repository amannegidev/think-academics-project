import React from 'react';
import { Link } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: 'Linen clothing: light and sustainable style for the summer.',
    image: 'https://www.cimmino.com/wp-content/uploads/2024/03/completi-di-lino.jpg',
    tag: 'New',
  },
  {
    id: 2,
    name: 'kids wear, Ethically Sourced Products for the Modern Family.',
    image: 'https://cissywears.com/cdn/shop/files/bobo-choses-ss25-2.jpg?v=1740396151&width=1500',
    tag: 'New',
  },
  {
    id: 3,
    name: ' Professional and Stylish Attire for the Modern Workplace',
    image: 'https://png.pngtree.com/thumb_back/fh260/background/20230406/pngtree-laptop-work-adult-women-in-formal-attire-indoors-photo-image_51208320.jpg',
    tag: 'New',

  },
  {
    id: 4,
    name: 't-shirt, Comfortable and Stylish T-Shirts for Everyday Wear',
    image: 'https://m.media-amazon.com/images/I/81HR6gzWH8L._AC_UY1100_.jpg',
    tag: 'New',
  },
];

const JustArrivedProducts = () => {
  return (
    <section className="px-4 py-12 bg-" >
      <div className="max-w-full font-[helvetica]">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-10 ">
          Just Arrived
        </h2>
        <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6 overflow-x-auto scroll-smooth ">
          {products.map((product) => (
            <div
              key={product.id}
              className="min-w-[100%]  rounded-xl bg-white overflow-hidden shadow-sm hover:shadow-md transition duration-300"
            >
              <div className="relative">
                <Link to={`/product/${product.id}`}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover"
                  />
                </Link>
                {product.tag && (
                  <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                    {product.tag}
                  </span>
                )}
              </div>
              <div className="p-4 bg-[#B80000]">
                <h3 className="text-lg font-semibold text-white">{product.name}</h3>
                <p className="text-white mt-1">
                  <span className="text-black">{product.price}</span>
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default JustArrivedProducts;
