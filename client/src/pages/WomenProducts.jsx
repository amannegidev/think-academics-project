import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import FilterSidebar from "../components/FilterSidebar";
import Layout from "../components/layouts/Layout";


const products = [
  {
    id: 1,
    name: 'maxi dress',
    image: 'https://t3.ftcdn.net/jpg/10/13/35/34/360_F_1013353434_4gKDor0AGQcqx2ycjd487v64jU5yEoFL.jpg',
    tag: 'New',
    price: '$49.99',
  },
  {
    id: 2,
    name: 'dress',
    image: 'https://www.shutterstock.com/image-photo/ghost-mannequin-dress-without-human-600nw-2316338487.jpg',
    tag: 'New',
    price: '$29.99',
  },
  {
    id: 3,
    name: 'dress',
    image: 'https://www.shutterstock.com/image-photo/ghost-mannequin-dress-without-human-600nw-2316338485.jpg',
    tag: 'New',
    price: '$59.99',
  },
  {
    id: 4,
    name: 'mini dress',
    image: 'https://i5.walmartimages.com/asr/9e8179af-2055-47ff-b1b6-b87ff594ec66.f188629fb2165af8079b2a8643797792.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF',
    tag: 'New',
    price: '$19.99',
  },
  {
    id: 5,
    name: 'mini dress',
    image: 'https://5thave-img-cdn.beyondstyle.us/pf/afff99fe-bc17-368d-b156-fda3dce6c6e5.jpg?x-oss-process=style/s1',
    tag: 'New',
    price: '$19.99',
  },
  {
    id: 6,
    name: 'Linen clothing',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRANjkzVNJ8VogC_cTgWVT_lQPJO0pZyvFB9g&s',
    tag: 'New',
    price: '$49.99',
  },
  {
    id: 7,
    name: 'kids wear',
    image: 'https://static.vecteezy.com/system/resources/thumbnails/042/409/617/small_2x/ai-generated-beautiful-red-woman-dress-isolated-on-transparent-background-png.png',
    tag: 'New',
    price: '$29.99',
  },
  {
    id: 8,
    name: 'Professional clothes',
    image: 'https://images.vexels.com/media/users/3/129408/isolated/preview/729a1419381b9d6572742b4ae641c7d6-black-ladies-dress.png',
    tag: 'New',
    price: '$59.99',
  },
  {
    id: 9,
    name: 'skirt',
    image: 'https://i.ebayimg.com/thumbs/images/g/J0MAAOSwFSFlBNxX/s-l1200.jpg',
    tag: 'New',
    price: '$19.99',
  },
  {
    id: 10,
    name: 'shirt',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7rMaP3Mb6FhrQr-dAni7QB4Pq45uXdxJ11g&s',
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
        <section className="mt-4 px-6 bg-white md:border-l-1 ">
          <div className="w-full font-[helvetica]">
            {/* <h2 className="hidden md:block text-2xl md:text-xl font-bold text-gray-800 uppercase my-5 md:mt-5  md:mx-4  md:mb-16">womens Products</h2> */}

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