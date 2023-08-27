import React, { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import QuestionList from './components/QuestionList/QuestionList';
import Footer from './components/footer/Footer';

function App() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    // Fetch questions from the StackOverflow API here and update the 'questions' state.
    fetch('https://api.stackexchange.com/2.2/questions?order=desc&sort=activity&site=stackoverflow')
      .then((response) => response.json())
      .then((data) => {
        setQuestions(data.items);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <Sidebar />
          </div>
          <div className="col-md-9">
            <QuestionList questions={questions} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
