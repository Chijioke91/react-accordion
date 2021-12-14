import { useState } from 'react';
import accordionData from '../src/utils/accordionData';
import './Accordion.css';

export default function Accordion() {
  const [selected, setSelected] = useState(null);
  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }

    //selected is null initially. when we click the first one with id = 1, selected now becomes 1 and is not equal

    setSelected(i);
  };

  return (
    <div className="accordion">
      {accordionData.map((data) => (
        <div className="item" key={data.id}>
          <div className="title" onClick={() => toggle(data.id)}>
            <h2>{data.question}</h2>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {selected === data.id ? (
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                )}
              </svg>
            </span>
          </div>
          <div className={selected === data.id ? 'content show' : 'content'}>
            {data.answer}
          </div>
        </div>
      ))}
    </div>
  );
}
