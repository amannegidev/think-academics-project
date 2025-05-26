import React from 'react';
import Layout from '../components/layouts/Layout';

const wishlistItems = [
  {
    id: 1,
    name: 'Hollow Port',
    description: 'Awesome yellow t-shirt',
    image: 'https://ignisdrago.in/cdn/shop/products/tigers-leap-t-shirt-black_800x.jpg?v=1617282055',
    price: 39.11,
    inStock: true,
  },
  {
    id: 2,
    name: 'Circular Sienna',
    description: 'Awesome white t-shirt',
    image: 'https://www.ekadwi.com/cdn/shop/files/EKA-DWI-MENS-PRINTED-COTTON--TEE_5-22-04-2024.jpg?v=1737706627&width=1080',
    price: 24.89,
    inStock: true,
  },
  {
    id: 3,
    name: 'Realm Bone',
    description: 'Awesome black t-shirt',
    image: 'https://pierreguillaumeparis.com/app/uploads/2024/09/Pierre-Guillaume-Paris-Staelios-Bouteille-Parfum-100ml-Sillage-Tenue-1.png',
    price: 22.0,
    inStock: false,
  },
  {
    id: 4,
    name: 'Hollow Port',
    description: 'Awesome yellow t-shirt',
    image: 'https://duders.in/cdn/shop/files/MenShirts_3.png?v=1702724615',
    price: 39.11,
    inStock: true,
  },
  {
    id: 5,
    name: 'Circular Sienna',
    description: 'Awesome white t-shirt',
    image: 'https://m.media-amazon.com/images/I/81HR6gzWH8L._AC_UY1100_.jpg',
    price: 24.89,
    inStock: true,
  },
  {
    id: 6,
    name: 'Realm Bone',
    description: 'Awesome black t-shirt',
    image: 'https://png.pngtree.com/element_our/png/20181129/sunglasses-graphic-design-template-vector-png_248576.jpg',
    price: 22.0,
    inStock: false,
  },
];

const WishlistProductTable = () => {
  return (
 <Layout>
  <div className="w-11/12 mx-auto p-4 md:p-8 min-h-screen font-[helvetica]">
    <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">your favorite products</h1>
    <p className="text-gray-500">
      you have <span className="text-black font-bold">4</span> products in your wishlist
    </p>

    <div className="bg-white rounded-lg shadow-md overflow-x-auto mt-10">
      <table className="min-w-full mx-auto table-auto">
        <thead className="bg-red-800 text-white text-xs md:text-sm font-semibold">
          <tr>
            <th className="text-left p-2 md:p-4">Product</th>
            <th className="hidden sm:table-cell text-left p-2 md:p-4">Price</th>
            <th className="hidden md:table-cell text-left p-2 md:p-4">Stock Status</th>
            <th className="text-left p-2 md:p-4">Action</th>
            <th className="text-center p-2 md:p-4">Remove</th>
          </tr>
        </thead>
        <tbody>
          {wishlistItems.map((item) => (
            <tr key={item.id} className="border-b hover:bg-gray-50 transition">
              <td className="p-2 md:p-4 flex items-center gap-3 md:gap-4 min-w-[180px]">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 md:w-14 md:h-14 rounded object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-800 text-sm md:text-base">{item.name}</p>
                  <p className="text-gray-500 text-xs md:text-sm">{item.description}</p>
                </div>
              </td>
              <td className="hidden sm:table-cell p-2 md:p-4 font-semibold text-gray-800 text-sm md:text-base">
                ${item.price.toFixed(2)}
              </td>
              <td className="hidden md:table-cell p-2 md:p-4">
                <span
                  className={`text-xs md:text-sm font-medium px-2 py-1 rounded-full ${
                    item.inStock ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                  }`}
                >
                  {item.inStock ? 'In Stock' : 'Stock Out'}
                </span>
              </td>
              <td className="p-2 md:p-4">
                {item.inStock ? (
                  <button className="px-3 py-1 text-xs md:text-sm bg-green-300 hover:bg-blue-700 text-black rounded">
                    Add to Cart
                  </button>
                ) : (
                  <button className="px-3 py-1 text-xs md:text-sm bg-red-300 text-black rounded">
                    Contact Us
                  </button>
                )}
              </td>
              <td className="p-2 md:p-4 text-center">
                <button className="text-gray-500 hover:text-red-600 text-lg md:text-xl">
                  <i className="bi bi-trash"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
</Layout>

  );
};

export default WishlistProductTable;
