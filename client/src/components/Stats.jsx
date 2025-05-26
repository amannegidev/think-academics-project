import React from 'react';

const stats = [
  {
    icon: 'bi-truck',
    title: 'Fast Delivery',
    description: 'Get your orders delivered swiftly anywhere in the country.',
  },
  {
    icon: 'bi-stars',
    title: 'New Collections',
    description: 'Stay in trend with the latest arrivals every season.',
  },
  {
    icon: 'bi-emoji-smile',
    title: 'Happy Customers',
    description: 'Loved by thousands of shoppers across the globe.',
  },
  {
  icon: 'bi-globe-americas',
  title: 'Worldwide Shipping',
  description: 'We deliver to over 50 countries with fast global shipping.'
},
];

const Stats = () => {
  return (
    <section className="bg-[#fba41815] py-12 px-4 sm:px-6 lg:px-8 font-[helvetica] rounded">
      <div className=" mx-auto text-center">
        {/* <h2 className="text-3xl font-bold mb-10 text-gray-800">
          Why Shop With Us?
        </h2> */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 space-y-0">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center text-center hover:shadow-lg transition"
            >
              <div className="text-[#CB0404] text-5xl mb-4">
                <i className={`bi ${stat.icon}`}></i>
              </div>
              <h3 className="text-xl font-semibold text-[] mb-2">
                {stat.title}
              </h3>
              <p className="text-gray-600 text-sm">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
