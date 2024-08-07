import React from 'react';
import Pic1 from '../assets/Aisha.png';
import Pic2 from '../assets/Chaldick.png';
import Pic3 from '../assets/Mbata.png';
import Pic4 from '../assets/Rachel.png';
import pic5 from '../assets/benny.png';
import pic6 from '../assets/Shila.png';

const testimonialsData = [
  {
    name: 'Aisha Garba',
    title: 'Synergy Systems',
    image: Pic1,
    headline: 'Wonderful Service',
    quote:
      'I am extremely satisfied with the services Xpress team provided. The team was very responsive, professional, and also delivered a remarkable result beyond my expectations.',
  },
  {
    name: 'Robert Okolo',
    title: 'Visionary Creations',
    image: Pic2,
    headline: 'Solid Result',
    quote:
      'The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them in the future.',
  },
  {
    name: 'Selim Mustapha',
    title: 'Oxfam',
    image: Pic3,
    headline: 'Mindblowing Team Work',
    quote:
      'Xpress Cleaning team is awesome, their attention to detail and innovative solutions helped us settle in from our move in to the new space. We are grateful for your expertise and professionalism!',
  },
  {
    name: 'Josephine Orlu',
    title: 'Amazing Grace',
    image: Pic4,
    headline: 'Efficient Collaborating',
    quote:
      'I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results..',
  },
  {
    name: 'Roland Shila',
    title: 'Visionary Creations',
    image: pic5,
    headline: 'Solid Result',
    quote:
      'The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.',
  },
  {
    name: 'Chinny Okiki',
    title: 'Visionary Creations',
    image: pic6,
    headline: 'Solid Result',
    quote:
      'The team went beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.',
  },
];

const Testimonials = () => {
  return (
    <>
      <br />
      <br />
      <div id="testimony">
        <h4 className="flex text-4xl md:text-4xl lg:text-6xl justify-center align-center font-bold text-[#20336E] hover:scale-125 mb-8">
          CLIENT REVIEWS
        </h4>
      </div>
      <div className="flex flex-wrap justify-center m-4">
        {testimonialsData.map((testimonialsData, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2">
            <div className="bg-[#E7EFFA] rounded-md p-6 text-md border text-[#20336E]">
              <p>{testimonialsData.quote}</p>
              <div className="flex mt-8 items-center">
                <img
                  className="w-24 h-24 mr-6 rounded-full"
                  src={testimonialsData.image}
                  alt={testimonialsData.name}
                />
              </div>
              <div>
                <h6>{testimonialsData.name}</h6>
                <span className="text-sm font-normal italic">
                  {testimonialsData.title}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Testimonials;
