import React from 'react';
import { Link } from 'react-router-dom'; 

const brands = [
  { id: 1, name: 'Nike', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg', link: '/brand/nike' },
  { id: 2, name: 'Adidas', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg', link: '/brand/adidas' },
  { id: 3, name: 'H&M', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/2560px-H%26M-Logo.svg.png', link: '/brand/hm' },
  { id: 4, name: 'Puma', logo: 'https://static-00.iconduck.com/assets.00/brand-puma-icon-2048x1595-7h1m6t2y.png', link: '/brand/puma' },
  { id: 5, name: 'Zara', logo: 'https://images.icon-icons.com/2845/PNG/512/zara_logo_icon_181327.png', link: '/brand/zara' },
  { id: 6, name: 'RedTape', logo: 'https://content.jdmagicbox.com/comp/fatehabad-haryana/h6/9999p1667.1667.130112170957.p7h6/catalogue/red-tape-store-fatehabad-h-o-fatehabad-haryana-shoe-dealers-red-tape-nyrki.jpg', link: '/brand/redtape' },
  { id: 7, name: 'Gap', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsiL4hebiTJXizgelk02PrWuqzN0CACNPGHw&s', link: '/brand/gap' },
  { id: 8, name: 'balenciaga', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThQ2ikFA3gQBC3se-ZCUcg7c-mm295Wn8rSA&s', link: '/brand/balenciaga' },
  { id: 9, name: 'Wrogn', logo: 'https://licensinginternational.org/wp-content/uploads/2020/08/WROGN-white.jpg', link: '/brand/wrogn' },
];

const BrandCarousel = () => {
  return (
    <section className="py-2  rounded">
      <div className="relative px-2">
        <div className="flex overflow-x-auto space-x-6  px-6 py-4 scrollbar-hide snap-x snap-mandatory">
          {brands.map((brand) => (
            <Link
              to={brand.link}
              key={brand.id}
              className="flex-shrink-0 w-40 h-24 bg-white shadow-md rounded-xl flex items-center justify-center snap-start transition hover:shadow-lg"
            >
              <img src={brand.logo} alt={brand.name} className="h-12 object-contain" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandCarousel;
