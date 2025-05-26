import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  {
    id: 1,
    name: 'Men',
    image: 'https://cdn-tp1.euw1.kibocommerce.com/100067-100299/cms/files/0d293496-0653-4639-bcac-d92a44ba3641',
    link: '/category/men',
  },
  {
    id: 2,
    name: 'Women',
    image: 'https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/original/webflow-team/Reliance_Trends/images/Womens_Casual_Categories_Image_adapts_SS25-03.png',
    link: '/category/women',
  },
  {
    id: 3,
    name: 'Kids',
    image: 'https://ohandcokids.com/cdn/shop/files/20250319-P1200725.jpg?v=1743124600&width=2000',
    link: '/category/kids',
  },
  {
    id: 4,
    name: 'Accessories',
    image: 'https://media.istockphoto.com/id/531786318/photo/top-view-of-female-fashion-accessories.jpg?s=612x612&w=0&k=20&c=kA9wOhgfDQiz7RO6GoEztqlPNGaTxZyFwf14991aMM0=',
    link: '/category/accessories',
  },
  {
    id: 5,
    name:'footwear',
    image: 'https://media.istockphoto.com/id/1079117394/photo/great-sneaker.jpg?s=612x612&w=0&k=20&c=fJC7xIo9Umddw2TMF7nyUFHIThbi4zV2zvoXEIevRUI=',
    link: '/category/accessories',
  },
  {
    id: 6,
    name: 'beauty',
    image: 'https://orchidlifesciences.com/wp-content/uploads/2024/06/01-15-1.png',
    link: '/category/accessories',
  },
];

const CategoriesPage = () => {
  return (
    <section className="px-1 md:px-4 py-5 md:py-12   bg-white font-[helvetica]">
      <div className="max-full mx-auto ">
        <h2 className="text-xl lg:text-3xl font-bold text-gray-800 mb-5 md:mb-10">Shop by Category</h2>
        <div className="grid grid-cols-2 sm:grid-cols-2  lg:grid-cols-6 gap-6">
  {categories.map((category) => (
    <Link
      to={category.link}
      key={category.id}
      className="relative bg-white rounded-t-xl border-1 shadow hover:shadow-lg transition duration-300 overflow-hidden group"
    >
      <img
        src={category.image}
        alt={category.name}
        className="w-full h-[80%] object-cover position-center"
      />
      
      <div className="text-center h-[20%] bg-[#B80000] py-3">
        <h3 className="text-white sm:text-lg md:text-2xl capitalize  font-semibold drop-shadow-md">
          {category.name}
        </h3>
      </div>
    </Link>
  ))}
</div>

      </div>
    </section>
  );
};

export default CategoriesPage;
