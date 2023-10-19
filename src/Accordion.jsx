import React, { useState } from 'react';

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`accordion `}>
      <div className="accordion-header" onClick={toggleAccordion}>
        {title}
      </div>
      {isOpen && <div className={`accordion-content ${isOpen ? 'open' : ''}`}>{content}</div>}
    </div>
  );
};

export default Accordion;