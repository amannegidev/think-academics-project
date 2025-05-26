import React, { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/layouts/Layout";
import CategorySidebar from "../components/FilterSidebar";


const product = [
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
  {
    id: 11,
    name: 't-shirt',
    image: 'https://joyya.com/cdn/shop/files/joyya-t-shirt-kids-short-sleeve-t-shirt-black-made-to-order-mtk1c16-na-190303-197161.jpg?v=1724082699&width=1080',
    tag: 'New',
    price: '$49.99',
  },
  {
    id: 12,
    name: 't-shirt',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ-vLQssBrJPO0dtO4lPU7y3Mr4OIRFvKPAA&s',
    tag: 'New',
    price: '$29.99',
  },
  {
    id: 13,
    name: 't-shirt',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlO_VB7Y9EZDNGeETgKqyyPsTOzFHoU9R_FQ&s',
    tag: 'New',
    price: '$59.99',
  },
  {
    id: 14,
    name: 't-shirt',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpGDKnbIRoHw7vFgS73Z49K5WatT2SShP6ltAhmLTceSAiYk_FIuTx6_hNM5TaCY27DfE&usqp=CAU',
    tag: 'New',
    price: '$19.99',
  },
  {
    id: 15,
    name: 't-shirt ',
    image: 'https://m.media-amazon.com/images/I/81HR6gzWH8L._AC_UY1100_.jpg',
    tag: 'New',
    price: '$19.99',
  },
  {
    id: 16,
    name: 'shoes',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9aSQbPqavKKvQYdqmSKoSlP2HKZuYk6GqflMkF83QdpmtHxszTATMGi0ZVDMQAZlubAI&usqp=CAU',
    tag: 'New',
    price: '$49.99',
  },
  {
    id: 17,
    name: 'shorts',
    image: 'https://st.depositphotos.com/1317892/57088/i/450/depositphotos_570885540-stock-photo-swimming-shorts-for-boy-in.jpg',
    tag: 'New',
    price: '$29.99',
  },
  {
    id: 18,
    name: 'shorts',
    image: 'https://img.freepik.com/premium-photo/children-s-wear-shorts-isolated-white-background_483040-11431.jpg?w=360',
    tag: 'New',
    price: '$59.99',
  },
  {
    id: 19,
    name: 'slippers',
    image: 'https://loox.in/cdn/shop/files/blueshraky2_1.png?v=1713869219',
    tag: 'New',
    price: '$19.99',
  },
  {
    id: 20,
    name: 'sunglasses',
    image: 'https://png.pngtree.com/element_our/png/20181129/sunglasses-graphic-design-template-vector-png_248576.jpg',
    tag: 'New',
    price: '$19.99',
  },
    {
    id: 21,
    name: 't-shirt ',
    image: 'https://ignisdrago.in/cdn/shop/products/tigers-leap-t-shirt-black_800x.jpg?v=1617282055',
    tag: 'New',
    price: '$49.99',
  },
  {
    id: 22,
    name: 'shirt',
    image: 'https://tiimg.tistatic.com/fp/1/007/621/men-s-full-sleeves-casual-formal-wear-checked-blue-white-shirt-965.jpg',
    tag: 'New',
    price: '$29.99',
  },
  {
    id: 23,
    name: 'perfume',
    image: 'https://pierreguillaumeparis.com/app/uploads/2024/09/Pierre-Guillaume-Paris-Staelios-Bouteille-Parfum-100ml-Sillage-Tenue-1.png',
    tag: 'New',
    price: '$59.99',
  },
  {
    id: 24,
    name: 't-shirt Everyday Wear',
    image: 'https://duders.in/cdn/shop/files/MenShirts_3.png?v=1702724615',
    tag: 'New',
    price: '$19.99',
  },
  {
    id: 25,
    name: 'shirt',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzOeu83I1ou4aSaZ_yQDUHIGRO8S2UHw62toOefTZFaRY6m-mWzBQPYXfu1R7m-HgpLGc&usqp=CAU',
    tag: 'New',
    price: '$19.99',
  },
  {
    id: 26,
    name: 'jeans',
    image: 'https://img.freepik.com/premium-photo/men-s-blue-jeans-white-background_254845-27954.jpg',
    tag: 'New',
    price: '$49.99',
  },
  {
    id: 27,
    name: 'shoes',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTim_hTbd1tTCfEiHy0nwBIoMNvgtkUf3gzXw&s',
    tag: 'New',
    price: '$29.99',
  },
  {
    id: 28,
    name: 'jeans',
    image: 'https://static.vecteezy.com/system/resources/previews/024/569/953/large_2x/blue-jeans-denim-pants-composition-modern-women-s-and-men-s-fashion-pants-texture-isolated-on-white-background-photo.jpg',
    tag: 'New',
    price: '$59.99',
  },
  {
    id: 29,
    name: 'shorts',
    image: 'https://img.freepik.com/premium-photo/black-men-shorts-isolated-white-background-with-clipping-path_281691-4365.jpg',
    tag: 'New',
    price: '$19.99',
  },
  {
    id: 30,
    name: 'sunglasses',
    image: 'https://png.pngtree.com/element_our/png/20181129/sunglasses-graphic-design-template-vector-png_248576.jpg',
    tag: 'New',
    price: '$19.99',
  },
];

const AllProductsPage = () => {
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
        <div className="flex">
        <CategorySidebar />
        </div>
        
        <section className="px-4 bg-white md:border-l-1 mt-5">
          <div className="w-full mx-auto font-[helvetica]">

            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {product.map((product) => (
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

           
          </div>
        </section>
      </div>
     
    </Layout>
  );
};

export default AllProductsPage;

