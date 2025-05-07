import React from 'react';

const portfolioItems = [
  {
    title: "Skill Tag Mapping",
    category: "Website",
    image:
      "https://images.unsplash.com/photo-1621111848501-8d3634f82336?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=70",
  },
  {
    title: "Block of Ui kit collections",
    category: "UI Kit",
    image:
      "https://images.unsplash.com/photo-1621609764180-2ca554a9d6f2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=70",
  },
  {
    title: "Ton’s of mobile mockup",
    category: "Mockups",
    image:
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=70",
  },
  {
    title: "Huge collection of animation",
    category: "Animation",
    image:
      "https://images.unsplash.com/photo-1603380353725-f8a4d39cc41e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=70",
  },
];

const HomeCard = () => {
  return (
    <section className="bg-white ">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl ">
          Our Features
        </h1>

        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 lg:grid-cols-2">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="flex items-end overflow-hidden bg-cover rounded-lg h-96 transition-transform transform hover:scale-105 duration-300 ease-in-out"
              style={{ backgroundImage: `url(${item.image})` }}
              role="img"
              aria-label={item.title}
            >
              <div className="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 ">
                <h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize ">
                  {item.title}
                </h2>
                <p className="mt-2 text-lg tracking-wider text-blue-500 uppercase">
                  {item.category}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeCard;
