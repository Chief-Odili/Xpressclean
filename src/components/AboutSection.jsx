import serv from '../assets/serv.png';

export const AboutSection = () => {
  return (
    <div id="about">
      <br />
      <br />
      <div>
        <h4 className="flex text-4xl md:text-4xl lg:text-6xl justify-center align-center font-bold text-[#20336E] hover:scale-125">
          ABOUT US
        </h4>
      </div>

      <section className="p-2 md:p-8 flex flex-col md:flex-row items-center">
        <div className="flex-1 flex items-center justify-center mb-6 md:mb-0">
          <img
            src={serv}
            alt="Team"
            className="w-full h-auto max-w-sm md:max-w-md lg:max-w-lg rounded"
          />
        </div>
        <div className=" bg-[#E7EFFA] flex-1 flex items-center border p-8 rounded shadow text-[#20336E]">
          <p className=" italic text-base md:text-lg lg:text-xl text-center px-4 ">
            Xpress Cleaning Services began with a commitment to providing
            professional cleaning with a personal touch. Our continued success
            over the past two decades is a testament to the strong relationships
            we build with our clients and the exceptional service we deliver
            within their spaces. <br /> <br />
            Every day, we aim to honor the trust our clients place in us by
            maintaining their spaces with the utmost care. Our team is dedicated
            to upholding the highest standards of honesty and integrity in every
            aspect of our service.
            <br />
            We believe that a clean environment is the foundation of a
            productive and healthy workspace. By leveraging the latest cleaning
            technologies and environmentally friendly products, we ensure that
            our services not only meet but exceed industry standards. At Xpress
            Cleaning Services, your satisfaction is our priority, and we strive
            to create spaces that inspire confidence and peace of mind.
          </p>
        </div>
      </section>
    </div>
  );
};
