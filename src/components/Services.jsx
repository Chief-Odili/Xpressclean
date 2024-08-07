import Deep from '../assets/Deeper.mp4';
import Office from '../assets/Office.mp4';
import Residential from '../assets/Residential.mp4';
import Move from '../assets/moveout.mp4';
import wind from '../assets/Window.mp4';
import rug from '../assets/Rug.mp4';

const Services = () => {
  return (
    <div id="services" className="bg-[#E7EFFA] p-4">
      <div className="mt-8 mb-8">
        <h4 className="flex justify-center items-center text-4xl md:text-4xl lg:text-6xl font-bold text-[#20336E] hover:scale-125">
          OUR SERVICES
        </h4>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-8">
        {[
          {
            src: Office,
            title: 'Office Cleaning',
            description:
              'Transform your workspace with our office cleaning services. Detailed, reliable, and tailored for a productive environment.',
          },
          {
            src: wind,
            title: 'Window Cleaning Services',
            description:
              'Professional cleaning of windows, both interior and exterior, to ensure streak-free and clear views, including high-rise and hard-to-reach windows',
          },
          {
            src: Deep,
            title: 'Deep Cleaning',
            description:
              'Experience a pristine home with our deep cleaning services. Thorough, detailed, and hygienic for a healthier environment.',
          },
          {
            src: Residential,
            title: 'Residential Cleaning',
            description:
              'Refresh your home with our cleaning services. Comprehensive, meticulous, and designed for your comfort.',
          },
          {
            src: Move,
            title: 'Move-In/Move-Out Cleaning',
            description:
              'Ensure a spotless transition with our Move-In/Move-Out cleaning services. Detailed, thorough, and ready for your move.',
          },
          {
            src: rug,
            title: 'Rug and Carpet',
            description:
              'Cleaning of carpets and upholstery using specialized equipment and eco-friendly products to remove stains, dirt, and allergens',
          },
        ].map((service, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 lg:w-1/4 xl:w-1/4 bg-white border rounded-lg shadow"
          >
            <a href="tel:+2349024127040">
              <video
                src={service.src}
                autoPlay
                loop
                muted
                className="w-full rounded-t-lg"
              />
            </a>
            <div className="p-5">
              <a href="tel:+2349024127040">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#20336E]">
                  {service.title}
                </h5>
              </a>
              <p className="mb-3 font-normal text-[#20336E]">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
