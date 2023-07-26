import { useState } from "react";
import { data } from "./index";
import axios from 'axios';


const Quiz = () => {
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState(Array(data.length).fill(null));  //almacena las respuestas elegidas por el usuario.
  const options = ['A', 'B', 'C', 'D'];
  const correctAnswers = ['D', 'B', 'A', 'C', 'B', 'C', 'C', 'D', 'C', 'C'];
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const url = '/quiz'


  const handleOptionSelect = (questionIndex, optionIdx) => {
    if (options[optionIdx] !== answers[questionIndex]) {
      const newAnswers = [...answers];
      newAnswers[questionIndex] = options[optionIdx];
      setAnswers(newAnswers);
    }
  }

  
 const handleNextQuestion = () => {
    setCurrentQuestionIndex(prevIndex => prevIndex + 1);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    let counter = 0;
    for (let i = 0; i < answers.length; i++) {
      if (answers[i] === correctAnswers[i]) {
        counter++
      }

    }
    setScore(counter)
    setShowResults(true); 

    const userResults =   {
      q1: answers[0],
      q2: answers[1],
      q3: answers[2],
      q4: answers[3],
      q5: answers[4],
      q6: answers[5],
      q7: answers[6],
      q8: answers[7],
      q9: answers[8],
      q10: answers[9],
      total: counter
    };
      axios.post(url, userResults)
      .then(() => {
        console.log('Exito'); // Actualiza el estado para mostrar el mensaje de éxito
      })
        .catch(error => {
          error.status(500);
        });
  }


  const printQuestions = () => {
    const questionIndex = currentQuestionIndex;
    const question = data[questionIndex];
    
    return (
      <div>
        <h3>Pregunta {questionIndex + 1}: {question.question}</h3>
        {question.options.map((option, optionIdx) => (
          <label key={optionIdx}>
            <input
              type="radio"
              name={question.name}
              value={option.radioValue}
              checked={option.selected}
              onChange={() => handleOptionSelect(questionIndex, optionIdx)}
            />
            {option.choice}
          </label>
        ))}
        {currentQuestionIndex < data.length - 1 ? (
          <button onClick={handleNextQuestion}>SIGUIENTE</button>
        ) : (
          <button onClick={onSubmit}>Resultados</button>
        )}
      </div>
    );
  };


  return (
    <section>
      <article>
      {showResults ? (
          <div>
            <h2>Tu puntuación es: {score}</h2>
          </div>
        ) : (
          printQuestions()
        )}
      </article>
    </section>
  );
};

export default Quiz;
