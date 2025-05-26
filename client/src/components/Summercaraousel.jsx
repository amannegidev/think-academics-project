import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const slides = [
  {
    src: 'https://theimpression.com/wp-content/uploads/2021/03/LVMenSummer21CF052347-001-2c4000px.jpg',
    title: `new men's summer collection`,
    description: 'Step into elegance with our beautiful dress selection.',
  },
  {
    src: 'https://news.europawire.eu/wp-content/uploads/2020/04/HM-x-Emma-Jayne.jpeg',
    title: 'summer kidswear  collection',
    description: 'Trendy and chic outfits curated for the modern you.',
  },
  {
    src: 'https://media.glamourmagazine.co.uk/photos/67fcf373c9acd7957e260954/16:9/w_2580,c_limit/SUMMER%20DRESSES%2014042025%20main.jpg',
    title: 'Summer Dresses 2025',
    description: 'Premium cosmetics to enhance your natural beauty.',
  },
  {
    src: 'https://blog.designereyes.com/wp-content/uploads/2021/08/tom-ford-spring-summer-collection-2021.jpg',
    title: 'sunglasses collection',
    description: 'Stay cool and stylish with our summer hat collection.',
  },
];

 const SummerCaraousel =() =>{
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="relative w-full mx-auto  font-[helvetica]">
      <div className="relative h-60 md:h-[700px] overflow-hidden rounded-sm">
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
              className="w-full h-full object-cover poseition-top"
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

export default SummerCaraousel;
