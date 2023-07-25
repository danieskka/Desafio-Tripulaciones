import { useState } from "react";
import { data } from ".";

const Quiz = () => {
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState(Array(data.length).fill(null));  //almacena las respuestas elegidas por el usuario.
  const options = ['A', 'B', 'C', 'D'];
  const correctAnswers = ['D', 'B', 'A', 'C', 'B', 'C', 'C', 'D', 'C', 'C']


  const handleOptionSelect = (questionIndex, optionIdx) => {
    if (options[optionIdx] !== answers[questionIndex]) {
      const newAnswers = [...answers];
      newAnswers[questionIndex] = options[optionIdx];
      setAnswers(newAnswers);
    }
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
  }


const printQuestions = () => data.map((question, questionIndex) => (
    <div key={questionIndex}>
      <h3>Pregunta {questionIndex +1}: {question.question}</h3>
            {question.options.map((option, optionIdx) => (
                  <label key={optionIdx}>
                      <input type="radio" name={question.name} value={option.radioValue} checked={option.selected} //para cambiar el color del botón seleccionado, cambiar option.selected por false. Después en handleOptionSelect cambiar nombre de clase. 
                      onChange={() => handleOptionSelect(questionIndex, optionIdx)}  />  
                  {option.choice}
                  </label>
                ))}
    </div>
  ))


  return (
    <section>
      {printQuestions()}
      <button onClick={onSubmit}>Resultados</button>
    </section>
  );
};

export default Quiz;
