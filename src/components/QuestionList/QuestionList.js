import React from 'react';
import './QuestionList.css'; // Import the CSS file

function QuestionList({ questions }) {
  return (
    <div className="question-list">
      <h2>Questions</h2>
      <ul className="question-ul">
        {questions.map((question) => (
          <li key={question.question_id} className="question-li">
            <a href={question.link} target="_blank" rel="noopener noreferrer">
              {question.title}
              {question.body}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default QuestionList;
