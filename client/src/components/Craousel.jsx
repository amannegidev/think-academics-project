import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const slides = [
  {
    src: 'https://cdn.pixabay.com/photo/2013/11/14/12/34/neckties-210347_1280.jpg',
    title: 'Stylish Neckties',
    description: 'Explore our premium necktie collection for all occasions.',
  },
  {
    src: 'https://cdn.pixabay.com/photo/2015/06/20/18/24/dresses-816033_1280.jpg',
    title: 'Elegant Dresses',
    description: 'Step into elegance with our beautiful dress selection.',
  },
  {
    src: 'https://cdn.pixabay.com/photo/2020/01/09/08/49/dress-4752316_1280.jpg',
    title: 'Modern Fashion',
    description: 'Trendy and chic outfits curated for the modern you.',
  },
  {
    src: 'https://cdn.pixabay.com/photo/2017/06/10/12/09/cosmetics-2389775_1280.jpg',
    title: 'Beauty Essentials',
    description: 'Premium cosmetics to enhance your natural beauty.',
  },
  {
    src: 'https://cdn.pixabay.com/photo/2017/06/27/19/14/strohute-2448533_1280.jpg',
    title: 'Summer Hats',
    description: 'Stay cool and stylish with our summer hat collection.',
  },
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="relative w-full font-[helvetica]">
      <div className="relative h-60 md:h-[600px] overflow-hidden rounded-sm">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === current ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.src}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
           <Link to={`/product/${index}`} className="block h-full">
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/30 p-4 text-center">
         

              <h2 className="text-2xl md:text-9xl font-bold">{slide.title}</h2>
              <p className="mt-2 text-sm md:text-xl">{slide.description}</p>
            </div>
                </Link>

          </div>
        ))}
      </div>

      {/* Controls */}
      <button
        onClick={prevSlide}
        className="hidden sm:flex absolute top-0 left-0 h-full px-4 z-10 items-center justify-center"
      >
        <span className="w-10 h-10 rounded-full bg-white/30 hover:bg-white/50 flex items-center justify-center text-white text-xl">
          <i className="bi bi-chevron-left"></i>
        </span>
      </button>
      <button
        onClick={nextSlide}
        className="hidden sm:flex absolute top-0 right-0 h-full px-4 z-10 items-center justify-center"
      >
        <span className="w-10 h-10 rounded-full bg-white/30 hover:bg-white/50 flex items-center justify-center text-white text-xl">
          <i className="bi bi-chevron-right"></i>
        </span>
      </button>
    </div>
  );
}
