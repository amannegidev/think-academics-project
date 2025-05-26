import { Link } from "react-router-dom";
import SummerCaraousel from "../components/Summercaraousel";
import Layout from "../components/layouts/Layout";
import { useState } from "react";
import { toast } from "react-toastify";


const products = [
  {
    id: 1,
    name: `men's summer collection`,
    image: 'https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2023%2F02%2Fdior-mens-summer-2023-campaign-kim-jones-10.jpg?q=75&w=800&cbr=1&fit=max',
    tag: 'New',
  },
  {
    id: 2,
    name: 'kids summer collection',
    image: 'https://cissywears.com/cdn/shop/files/bobo-choses-ss25-2.jpg?v=1740396151&width=1500',
    tag: 'New',
  },
  {
    id: 3,
    name: ' women summer collection',
    image: 'https://images.hellomagazine.com/horizon/landscape/f6d994a52884-myleene-klass-littlewoods-t.jpg',
    tag: 'New',

  },
  {
    id: 4,
    name: 'sunglasses for summer',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS7jqo2-I9LdVE-P6mw6cruROS2geFSSrDUQ&s',
    tag: 'New',
  },
];

const SummerProducts = [
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


const SummerCollections = ()  => {
    
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
    <div className="w-11/12 md:w-full h-full flex flex-col items-center justify-center mb-5">
      <SummerCaraousel />
    </div>

    <section className="px-1 md:px-4 py-2 md:py-12 " >
      <div className="max-w-11/12 mx-auto font-[helvetica]">
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
              <div className="p-4 bg-[#B80000] h-full">
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
    
    <section className="px-4 bg-white mb-5">
          <div className="w-11/12 mx-auto font-[helvetica]">
            <hr className="mb-10 text-red-950" />
    
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {SummerProducts.map((SummerProducts) => (
                <div
                  key={SummerProducts.id}
                  className="relative rounded-t-xl overflow-hidden shadow-sm hover:shadow-md transition duration-300 bg-white flex flex-col"
                >
                  <button
                    onClick={() => toggleWishlist(SummerProducts.id)}
                    className={`absolute top-2 right-2 z-10 text-xl transition-colors ${
                      wishlist.includes(SummerProducts.id) ? 'text-red-600' : 'text-gray-500'
                    }`}
                  >
                    <i className="bi bi-heart-fill"></i>
                  </button>
    
                  <Link to={`/SummerProducts/${SummerProducts.id}`}>
                    <img
                      src={SummerProducts.image}
                      alt={SummerProducts.name}
                      className="w-full h-40 object-contain p-2"
                    />
                  </Link>
    
                  <div className="p-4 flex-1 flex flex-col justify-between bg-gray-100">
                    <div className="sm:block md:flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-gray-700">{SummerProducts.name}</h3>
                      <p className="text-red-700 font-bold">{SummerProducts.price}</p>
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
    
          
          </div>
        </section>

    </Layout>
  );
}
export default SummerCollections;