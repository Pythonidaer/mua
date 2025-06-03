import { useState } from 'react';
import './App.css';
import faqSections from './faqData';
import skullBowlImg from './assets/nutritious-skull-in-bowl.png';

function App() {
  const [open, setOpen] = useState({});

  const toggleFAQ = (sectionIdx, faqIdx) => {
    setOpen((prev) => ({
      ...prev,
      [`${sectionIdx}-${faqIdx}`]: !prev[`${sectionIdx}-${faqIdx}`],
    }));
  };

  return (
    <div className="faq-app">
      <img src={skullBowlImg} alt="Nutritious Skull in Bowl" className="faq-hero-img" />
      <h1 className="main-heading">Frequently Asked Questions</h1>
      {faqSections.map((section, sectionIdx) => (
        <div className="faq-section" key={section.section}>
          <h2 className="faq-section-heading">{section.section}</h2>
          <div className="faq-list">
            {section.faqs.map((faq, faqIdx) => (
              <div className="faq-item" key={faq.question}>
                <button
                  className={`faq-question${open[`${sectionIdx}-${faqIdx}`] ? ' open' : ''}`}
                  onClick={() => toggleFAQ(sectionIdx, faqIdx)}
                  aria-expanded={open[`${sectionIdx}-${faqIdx}`] || false}
                >
                  {faq.question}
                  <span className="faq-arrow">{open[`${sectionIdx}-${faqIdx}`] ? '▲' : '▼'}</span>
                </button>
                <div
                  className={`faq-answer${open[`${sectionIdx}-${faqIdx}`] ? ' show' : ''}`}
                  style={{ display: open[`${sectionIdx}-${faqIdx}`] ? 'block' : 'none' }}
                >
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
