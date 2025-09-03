import React, { useState } from 'react';
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from '@material-tailwind/react';
import './faq.css'; // Optional if you have custom styles

// Dummy FAQ data
const dummyFaqData = [
  {
    id: 1,
    title: 'What is included in the tour package?',
    description: 'The tour package includes transportation, accommodation, meals, and sightseeing as mentioned in the itinerary.',
  },
  {
    id: 2,
    title: 'Are there any cancellation charges?',
    description: 'Yes, cancellation charges apply as per our policy. Please refer to our <a href="/cancellation-policy">cancellation policy</a> for details.',
  },
  {
    id: 3,
    title: 'Is travel insurance included?',
    description: 'Travel insurance is not included. You are advised to purchase it separately for your safety.',
  },
];

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${id === open ? 'rotate-180' : ''} h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

export default function Faq() {
  const [open, setOpen] = useState(1); // Open the first FAQ by default
  const faqData = dummyFaqData;

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div className="asdvasdvadfvasdvca">
      <h6 className="text-left text-xl font-bold mb-4 aeadc">
        Frequently Asked Questions
      </h6>
      {faqData.map((faq, index) => (
        <Accordion
          key={faq.id}
          open={open === index + 1}
          icon={<Icon id={index + 1} open={open} />}
        >
          <AccordionHeader onClick={() => handleOpen(index + 1)}>
            {faq.title}
          </AccordionHeader>
          <AccordionBody>
            <div
              dangerouslySetInnerHTML={{ __html: faq.description }}
              aria-label="FAQ answer"
            />
          </AccordionBody>
        </Accordion>
      ))}
    </div>
  );
}
