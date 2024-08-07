import React from 'react';
import email from '../assets/email.png';
import insta from '../assets/insta.jpg';
import phone from '../assets/phone.png';
import whatsapp from '../assets/whatsapp.png';
import Herosection from './Herosection';

const ContactUs = () => {
  const phoneNumber = '+2349024127040';
  const message = 'Hello! I would like to know more about your services.'; // Replace with your message
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  // Email and Instagram URLs
  const emailUrl = 'mailto:xpresscleanempire@gmail.com';
  const instagramUrl =
    'https://www.instagram.com/xpressclean_empire?igsh=MTcyMndobzRsMGtpYQ==';
  const phoneNumberDisplay = '+2349024127040';

  return (
    <div id="contact">
      <div className="mt-16">
        <Herosection />
      </div>

      <div className="flex flex-wrap m-6 justify-center p-12 gap-24 text-[#20336E]">
        <div>
          <a
            href={emailUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="xpresscleanempire@gmail.com"
          >
            {' '}
            <h6 className="flex justify-center"> Send us Mail</h6>
            <img className="w-32" src={email} alt="Email" />
          </a>
        </div>
        <div>
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="xpressclean_empire"
          >
            <h6 className="flex justify-center"> Inquire on Insta!</h6>
            <img className="w-32" src={insta} alt="Instagram" />
          </a>
        </div>
        <div>
          <a href={`tel:${phoneNumberDisplay}`} title={phoneNumberDisplay}>
            <h6 className="flex justify-center"> Call Our Center</h6>
            <img className="w-32" src={phone} alt="Phone" />
          </a>
        </div>
        <div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            title={`WhatsApp: ${phoneNumber}`}
          >
            <h6 className="flex justify-center"> Chat us on WhatsApp</h6>
            <img className="w-32" src={whatsapp} alt="WhatsApp" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
