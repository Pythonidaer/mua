const faqSections = [
  {
    section: "Memory & Retention",
    faqs: [
      {
        question: "What are Mnemonics?",
        answer: "Mnemonics are memory aids that link new information to familiar words, phrases, or visuals—like acronyms, rhymes, or associations—to enhance recall."
      },
      {
        question: "What is the Memory Palace Technique?",
        answer: "This method involves mentally placing items along a familiar route or location. It's effective for memorizing ordered or abstract information by leveraging spatial memory."
      },
      {
        question: "What is Elaborative Rehearsal?",
        answer: "Elaborative rehearsal involves linking new information to existing knowledge through explanation and associations, which strengthens long-term retention."
      },
      {
        question: "How does Spaced Repetition work?",
        answer: "Spaced repetition spreads review sessions over increasing intervals. It counters the forgetting curve and strengthens memory consolidation over time."
      },
      {
        question: "What are Daily Spaced Reviews?",
        answer: "This is the practice of reviewing material every day, especially what was learned 1, 2, 5, or 10 days ago. It reinforces long-term storage using spaced intervals."
      },
      {
        question: "How do Flashcards aid memory?",
        answer: "Flashcards facilitate retrieval practice and self-testing, which are proven to improve memory. They are especially effective when combined with spaced repetition."
      }
    ]
  },
  {
    section: "Learning & Understanding",
    faqs: [
      {
        question: "What is Elaboration?",
        answer: "Elaboration is the process of explaining why something is true, or how it connects to existing knowledge. It deepens understanding and enhances memory."
      },
      {
        question: "What are 'Why' Questions?",
        answer: "Asking 'why' prompts deeper thinking and connection-making, leading to more meaningful learning. It's a key form of elaboration."
      },
      {
        question: "What is Metacognition?",
        answer: "Metacognition means thinking about your own thinking. It involves monitoring and regulating how well you're learning and adjusting strategies as needed."
      },
      {
        question: "What is Distributed Practice?",
        answer: "Distributed practice spreads learning across multiple sessions instead of cramming. It's more effective for retention and understanding."
      },
      {
        question: "What is Interleaving Practice?",
        answer: "Interleaving mixes different topics or problem types in a single session. It improves the brain’s ability to differentiate and apply knowledge flexibly."
      },
      {
        question: "How does Retrieval Practice work?",
        answer: "Retrieval practice involves actively recalling information, which strengthens memory traces and improves future recall more than passive review."
      },
      {
        question: "What is Active Recall?",
        answer: "Active recall is the act of retrieving information from memory without cues. It’s one of the most effective study techniques for long-term learning."
      },
      {
        question: "What is Incubation in Learning?",
        answer: "Incubation refers to stepping away from a problem or topic to let the brain process subconsciously. It often leads to creative insights and improved problem-solving."
      }
    ]
  },
  {
    section: "Cognitive Strategies",
    faqs: [
      {
        question: "What is Cognitive Load Theory?",
        answer: "Cognitive Load Theory explains that working memory has a limited capacity. Learning is more effective when information is presented in manageable chunks to avoid overload."
      },
      {
        question: "What is the 4 ± 1 Rule?",
        answer: "The 4 ± 1 rule suggests most people can actively hold 3 to 5 items in working memory at once. This reinforces the need for chunking and concise instruction."
      },
      {
        question: "What is Dual Coding?",
        answer: "Dual coding uses both verbal and visual formats to present information. This enhances memory by engaging two cognitive channels—text and imagery."
      },
      {
        question: "What is Progressive Disclosure?",
        answer: "Progressive disclosure is a design principle that reveals complexity gradually. It prevents cognitive overload by introducing only what's necessary at each step."
      },
      {
        question: "How does Semantic Layout support learning?",
        answer: "Organizing content meaningfully—through clear headings, groupings, and spatial structure—helps the brain understand and recall information more easily."
      },
      {
        question: "What is Simulation & Stress Testing?",
        answer: "Simulation-based learning introduces realistic tasks under timed or high-pressure conditions. This builds resilience, improves transfer, and strengthens retrieval pathways."
      }
    ]
  },
  {
    section: "Sleep Optimization",
    faqs: [
      {
        question: "How does sleep affect memory?",
        answer: "Sleep plays a vital role in consolidating memories. During deep sleep, the brain processes and stores information learned throughout the day."
      },
      {
        question: "What are the effects of poor sleep on learning?",
        answer: "Insufficient sleep can impair attention, memory retention, and problem-solving abilities, making it harder to learn and recall information."
      }
    ]
  },
  {
    section: "Stress & Cortisol Reduction",
    faqs: [
      {
        question: "How does stress impact memory?",
        answer: "Chronic stress increases cortisol levels, which can impair hippocampal function—the brain region critical for memory and learning."
      },
      {
        question: "What methods help manage stress for better cognition?",
        answer: "Evidence-based strategies like meditation, journaling, and guided breathing exercises can help regulate stress hormones and support mental clarity."
      }
    ]
  },
  {
    section: "Tools & Techniques",
    faqs: [
      {
        question: "What are Pomodoro Timers?",
        answer: "The Pomodoro Technique breaks work into focused 25-minute intervals followed by short breaks. It helps maintain focus and prevent burnout."
      },
      {
        question: "What is Full-Body Rehearsal?",
        answer: "Speaking aloud, gesturing, and even walking while reviewing material activates multiple sensory pathways, which can enhance memory encoding and recall."
      },
      {
        question: "How do Visual Cues support learning?",
        answer: "Visual cues—like color coding, diagrams, or icons—help highlight structure and meaning in information, aiding both comprehension and memory."
      },
      {
        question: "Why are Measurable Goals important?",
        answer: "Clear, measurable goals provide direction and allow you to track progress. They help break larger tasks into achievable steps and improve motivation."
      },
      {
        question: "What are Feedback Loops in learning?",
        answer: "Feedback loops involve receiving and responding to information about performance. Immediate feedback helps correct mistakes and refine understanding."
      }
    ]
  },
  {
    section: "Brain-Boosting Foods",
    faqs: [
      {
        question: "Which foods support brain function?",
        answer: "Fatty fish (like salmon), leafy greens, blueberries, eggs, and pumpkin seeds provide essential nutrients that promote memory, focus, and neuroprotection."
      },
      {
        question: "What role do specific nutrients play in brain health?",
        answer: "Nutrients such as omega-3s, antioxidants, choline, and magnesium support synaptic activity, reduce inflammation, and improve neurotransmitter function."
      }
    ]
  },

  {
    section: "Helpful Supplements (Consult a Physician)",
    faqs: [
      {
        question: "Which supplements may support cognitive health?",
        answer: "Omega-3 DHA/EPA, citicoline, B-vitamins (especially B12), and lion’s mane mushroom are often used to support memory, focus, and neurogenesis. Always consult a physician before starting supplements."
      },
      {
        question: "Are there supplements that support relaxation and sleep?",
        answer: "Magnesium glycinate and L-Theanine are commonly used to promote calmness and improve sleep quality. Vitamin D3 and adaptogens like ashwagandha may also help regulate stress, but should be used under professional guidance."
      }
    ]
  },

  {
    section: "Regular Light Exercise",
    faqs: [
      {
        question: "Why is exercise beneficial for brain health?",
        answer: "Light, regular exercise increases levels of brain-derived neurotrophic factor (BDNF), which supports memory formation and overall cognitive function."
      },
      {
        question: "Can intense exercise negatively affect learning?",
        answer: "In some individuals, especially those sensitive to temperature, overheating during exercise can trigger fatigue or cognitive stress. Moderate activity is generally best."
      }
    ]
  },

];

export default faqSections;
