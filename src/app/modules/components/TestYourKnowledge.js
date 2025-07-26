import React, { useState } from 'react';

const quizData = [
  {
    question: 'What is the capital of France?',
    options: ['Madrid', 'Berlin', 'Paris', 'Rome'],
    answer: 'Paris',
  },
  {
    question: 'Which planet is known as the Red Planet?',
    options: ['Earth', 'Saturn', 'Mars', 'Venus'],
    answer: 'Mars',
  },
  {
    question: 'Who developed the theory of relativity?',
    options: ['Isaac Newton', 'Galileo', 'Albert Einstein', 'Tesla'],
    answer: 'Albert Einstein',
  },
  {
    question: 'What is the square root of 144?',
    options: ['10', '11', '12', '13'],
    answer: '12',
  },
];

function TestYourKnowledge() {
  const [selectedOptions, setSelectedOptions] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleOptionSelect = (qIndex, option) => {
    setSelectedOptions({ ...selectedOptions, [qIndex]: option });
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const calculateScore = () => {
    let score = 0;
    quizData.forEach((q, idx) => {
      if (selectedOptions[idx] === q.answer) score += 1;
    });
    return score;
  };

  return (
    <div className="container mt-5 pt-4">
      <div className="text-center mb-4">
        <h2>🧠 Test Your Knowledge</h2>
        <p className="text-muted">Answer these simple questions and see how much you score!</p>
      </div>

      {quizData.map((q, index) => (
        <div key={index} className="card mb-3 shadow-sm">
          <div className="card-body">
            <h5 className="card-title">
              Q{index + 1}. {q.question}
            </h5>
            <div className="d-flex flex-column mt-3">
              {q.options.map((option, optIndex) => {
                const isCorrect = submitted && option === q.answer;
                const isSelected = selectedOptions[index] === option;

                return (
                  <label key={optIndex} className="form-check-label mb-2">
                    <input
                      type="radio"
                      className="form-check-input me-2"
                      name={`question-${index}`}
                      value={option}
                      onChange={() => handleOptionSelect(index, option)}
                      disabled={submitted}
                      checked={isSelected}
                    />
                    <span
                      className={
                        submitted
                          ? option === q.answer
                            ? 'text-success fw-bold'
                            : isSelected
                            ? 'text-danger'
                            : ''
                          : ''
                      }
                    >
                      {option}
                    </span>
                  </label>
                );
              })}
            </div>
          </div>
        </div>
      ))}

      <div className="text-center mt-4">
        {!submitted ? (
          <button className="btn btn-primary px-4" onClick={handleSubmit}>
            Submit
          </button>
        ) : (
          <h4 className="text-success">Your Score: {calculateScore()} / {quizData.length}</h4>
        )}
      </div>
    </div>
  );
}

export default TestYourKnowledge;
