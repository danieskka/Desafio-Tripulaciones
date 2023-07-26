import { useState } from "react";
import { data } from ".";
import axios from 'axios';


const Quiz = () => {
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState(Array(data.length).fill(null));  //almacena las respuestas elegidas por el usuario.
  const options = ['A', 'B', 'C', 'D'];
  const correctAnswers = ['D', 'B', 'A', 'C', 'B', 'C', 'C', 'D', 'C', 'C'];
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [data, setData] = useState();


  const handleOptionSelect = (questionIndex, optionIdx) => {
    if (options[optionIdx] !== answers[questionIndex]) {
      const newAnswers = [...answers];
      newAnswers[questionIndex] = options[optionIdx];
      setAnswers(newAnswers);
    }
  }

  { user_id, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10}

  const url = '/quiz'
  const userAnswers = () => {
    // for (let i = 0; i < answers.length; i++) {      
    // }
    const dataAnswers =   {
      user_id: 1,
      q1: "B",
      q2: "B",
      q3: "B",
      q4: "B",
      q5: "B",
      q6: "B",
      q7: "B",
      q8: "B",
      q9: "B",
      q10: "B"
    };
    setData(dataAnswers)

    axios.post(url, data)
    .then(() => {
      console.log('Exito'); // Actualiza el estado para mostrar el mensaje de éxito
    })
      .catch(error => {
        error.status(500);
      });
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
  }


const printQuestions = () => data.map((question, questionIndex) => {(
    <article>
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

    </article>
  )})


  return (
    <section>
      <article>
        {printQuestions()}
        <button onClick={onSubmit}>Resultados</button>
      </article>
    </section>
  );
};

export default Quiz;
