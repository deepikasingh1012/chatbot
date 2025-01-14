// import React, { useState } from 'react';


// const FAQDashboard = () => {
    // const [faqs, setFaqs] = useState([
    //     {
    //         id: 1,
    //         question: "Welcome",
    //         answers: [
    //             "We handle a wide range of legal matters, including personal injury, family law, criminal defense, real estate, and business law.",
    //             "We provide assistance in various fields such as business law, personal injury, and criminal defense.",
    //             "Our firm specializes in multiple areas of law, including civil and criminal cases."
    //         ],
    //         currentAnswerIndex: 0
    //     }
    // ]);

    // const [newQuestion, setNewQuestion] = useState('');
    // const [newAnswer, setNewAnswer] = useState('');

    // const showAnswer = (faqId) => {
    //     setFaqs((prevFaqs) =>
    //         prevFaqs.map((faq) => {
    //             if (faq.id === faqId) {
    //                 const nextIndex = (faq.currentAnswerIndex + 1) % faq.answers.length;
    //                 return { ...faq, currentAnswerIndex: nextIndex };
    //             }
    //             return faq;
    //         })
    //     );
    // };

    // const addQuestion = () => {
    //     if (newQuestion && newAnswer) {
    //         const newFaq = {
    //             id: faqs.length + 1,
    //             question: newQuestion,
    //             answers: [newAnswer],
    //             currentAnswerIndex: 0
    //         };
    //         setFaqs([...faqs, newFaq]);
    //         setNewQuestion('');
    //         setNewAnswer('');
    //     } else {
    //         alert('Please enter both a question and an answer.');
    //     }
    // };

//     return (
        // <div className="container mt-5">
        //     <h1 className="text-center mb-4">FAQ Dashboard</h1>
        //     <div className="row">
        //         <div className="col-md-6">
        //             <h3>Select a question:</h3>
        //             <div id="faqPanel" className="accordion">
        //                 {faqs.map((faq) => (
        //                     <div key={faq.id} className="accordion-item faq-card">
        //                         <h2 className="accordion-header">
        //                             <button
        //                                 className="accordion-button"
        //                                 type="button"
        //                                 onClick={() => showAnswer(faq.id)}
        //                             >
        //                                 {faq.question}
        //                             </button>
        //                         </h2>
        //                     </div>
        //                 ))}
        //             </div>

        //             <div className="mt-4">
        //                 <h5>Admin Panel - Add New Question</h5>
        //                 <div className="mb-3">
        //                     <input
        //                         type="text"
        //                         className="form-control"
        //                         placeholder="Enter your question"
        //                         value={newQuestion}
        //                         onChange={(e) => setNewQuestion(e.target.value)}
        //                     />
        //                 </div>
        //                 <div className="mb-3">
        //                     <input
        //                         type="text"
        //                         className="form-control"
        //                         placeholder="Enter the answer"
        //                         value={newAnswer}
        //                         onChange={(e) => setNewAnswer(e.target.value)}
        //                     />
        //                 </div>
        //                 <button className="btn btn-primary" onClick={addQuestion}>Add Question</button>
        //             </div>
        //         </div>
        //         <div className="col-md-6">
        //             <h3>Preview:</h3>
        //             <div className="chat-preview" style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '20px', height: '300px', overflowY: 'auto', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)' }}>
        //                 <p><strong>AI Assistant</strong></p>
        //                 {faqs.map((faq) => (
        //                     <p key={faq.id} className="chat-message" style={{ backgroundColor: '#e9f7ef', padding: '10px', borderRadius: '8px', marginBottom: '10px' }}>
        //                         {faq.answers[faq.currentAnswerIndex]}
        //                     </p>
        //                 ))}
        //             </div>
        //         </div>
        //     </div>
            
        // </div>
//     );
// };

// export default FAQDashboard;
import React, {useState} from 'react'

export default function DashboardContent() {
    const [faqs, setFaqs] = useState([
        {
            id: 1,
            question: "Welcome",
            answers: [
                "We handle a wide range of legal matters, including personal injury, family law, criminal defense, real estate, and business law.",
                "We provide assistance in various fields such as business law, personal injury, and criminal defense.",
                "Our firm specializes in multiple areas of law, including civil and criminal cases."
            ],
            currentAnswerIndex: 0
        }
    ]);

    const [newQuestion, setNewQuestion] = useState('');
    const [newAnswer, setNewAnswer] = useState('');

    const showAnswer = (faqId) => {
        setFaqs((prevFaqs) =>
            prevFaqs.map((faq) => {
                if (faq.id === faqId) {
                    const nextIndex = (faq.currentAnswerIndex + 1) % faq.answers.length;
                    return { ...faq, currentAnswerIndex: nextIndex };
                }
                return faq;
            })
        );
    };

    const addQuestion = () => {
        if (newQuestion && newAnswer) {
            const newFaq = {
                id: faqs.length + 1,
                question: newQuestion,
                answers: [newAnswer],
                currentAnswerIndex: 0
            };
            setFaqs([...faqs, newFaq]);
            setNewQuestion('');
            setNewAnswer('');
        } else {
            alert('Please enter both a question and an answer.');
        }
    };

  return (
    <div className="container d-flex justify-content-center align-items-start" style={{ minHeight: '100vh', paddingTop: '50px' }}>
  <div className="row w-100">
    <h1 className="text-center mb-4">FAQ Dashboard</h1>
    <div className="col-md-6">
      <h3>Select a question:</h3>
      <div id="faqPanel" className="accordion">
        {faqs.map((faq) => (
          <div key={faq.id} className="accordion-item faq-card">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                onClick={() => showAnswer(faq.id)}
              >
                {faq.question}
              </button>
            </h2>
          </div>
        ))}
      </div>

      <div className="mt-4">
        <h5>Admin Panel - Add New Question</h5>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter your question"
            value={newQuestion}
            onChange={(e) => setNewQuestion(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter the answer"
            value={newAnswer}
            onChange={(e) => setNewAnswer(e.target.value)}
          />
        </div>
        <button className="btn btn-primary" onClick={addQuestion}>Add Question</button>
      </div>
    </div>
    <div className="col-md-6">
      <h3>Preview:</h3>
      <div className="chat-preview" style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '20px', height: '300px', overflowY: 'auto', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)' }}>
        <p><strong>AI Assistant</strong></p>
        {faqs.map((faq) => (
          <p key={faq.id} className="chat-message" style={{ backgroundColor: '#e9f7ef', padding: '10px', borderRadius: '8px', marginBottom: '10px' }}>
            {faq.answers[faq.currentAnswerIndex]}
          </p>
        ))}
      </div>
    </div>
  </div>
</div>

  )
}
