import React, { useState } from 'react';
import './FloatingContact.css';

const FloatingContact = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const contacts = [
    {
      name: 'WhatsApp',
      icon: 'fab fa-whatsapp',
      url: 'https://wa.me/6281385639122',
      className: 'whatsapp',
      tooltip: 'Chat on WhatsApp'
    },
    {
      name: 'LinkedIn',
      icon: 'fab fa-linkedin-in',
      url: 'https://linkedin.com/in/dwi-hery-purnomo',
      className: 'linkedin',
      tooltip: 'Connect on LinkedIn'
    },
    {
      name: 'YouTube',
      icon: 'fab fa-youtube',
      url: 'https://www.youtube.com/@dwihpjavas',
      className: 'youtube',
      tooltip: 'Subscribe on YouTube'
    },
    {
      name: 'Email',
      icon: 'fas fa-envelope',
      url: 'mailto:dwihplanner@gmail.com',
      className: 'email',
      tooltip: 'Send Email'
    }
  ];

  return (
    <div className={`floating-contacts ${isOpen ? 'active' : ''}`}>
      <div className="floating-contact-menu">
        {contacts.map((contact, index) => (
          <a
            key={index}
            href={contact.url}
            className={`floating-contact-item ${contact.className}`}
            target="_blank"
            rel="noopener noreferrer"
            data-tooltip={contact.tooltip}
          >
            <i className={contact.icon}></i>
          </a>
        ))}
      </div>
      
      <button className="floating-contact-toggle" onClick={toggleMenu}>
        <i className="fab fa-whatsapp"></i>
        <span className="fast-respond-text">Fast Respond</span>
        <i className="fas fa-times"></i>
      </button>
    </div>
  );
};

export default FloatingContact;
