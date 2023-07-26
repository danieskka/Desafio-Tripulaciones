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

  const getResultsMessage = (score) => {
    if (score === 0) {
      return `¡Ups! No has obtenido ningún acierto. No te preocupes, siempre hay oportunidad para aprender más sobre las olas de calor. Te animo a investigar un poco más y así estar preparado/a para enfrentar este fenómeno natural. ¡Ánimo!`;
    } else if (score >= 1 && score <= 4) {
      return `¡Bien hecho! Has obtenido ${score} aciertos. Aunque todavía hay aspectos por conocer, estás en el camino correcto. Las olas de calor pueden ser peligrosas, pero con más información, podrás protegerte mejor en el futuro. ¡Sigue aprendiendo y cuidándote!`;
    } else if (score >= 5 && score <= 7) {
      return `¡Muy bien! Has obtenido ${score} aciertos. ¡Tienes conocimientos sólidos sobre las olas de calor! Estás consciente de los riesgos y medidas preventivas necesarias para mantener tu bienestar durante estas condiciones extremas. ¡Sigue así!`;
    } else if (score >= 8 && score <= 9) {
      return `¡Felicidades! Has obtenido ${score} aciertos. ¡Casi un experto/a en olas de calor! Tu conocimiento sobre este tema es impresionante, y estás bien preparado/a para enfrentar situaciones de calor extremo. ¡Sigue así y mantén tu seguridad y la de otros!`;
    } else if (score === 10) {
      return `¡Enhorabuena, has acertado todas las preguntas!. ¡Sabes mucho sobre las olas de calor! Tu conocimiento es excepcional y estás bien informado/a sobre cómo protegerte y cuidarte durante condiciones de calor extremo. ¡Sigue siendo un ejemplo y comparte tu sabiduría con otros!`;
    } else {
      return "";
    }
  }

  return (
    <section>
      <article>
      {showResults ? (
          <div>
            <h2>Tu puntuación es: {score}</h2>
            <p>{getResultsMessage(score)}</p>
          </div>
        ) : (
          printQuestions()
        )}
      </article>
    </section>
  );
};

export default Quiz;
