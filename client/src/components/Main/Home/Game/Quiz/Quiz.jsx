import { useState, useRef, useEffect } from "react";
import { data } from "./index";
import { Link } from "react-router-dom";
import axios from 'axios';
import Swal from "sweetalert2";



const Quiz = () => {
  const [answers, setAnswers] = useState(Array(data.length).fill(null));  //almacena las respuestas elegidas por el usuario.
  const correctAnswers = ['D', 'B', 'A', 'C', 'B', 'C', 'C', 'D', 'C', 'C'];  //Preguntas correctas.    

const QuitGame = () => {  //Alerta cuando se abandona el juego.
  const alertQuitGame = () => {
    Swal.fire({
      title: '¿Seguro que quieres abandonar?',
      text: "Tu progreso en este juego no se guardará",
      imageUrl: 'assets/PICTURE 7.png',
      showDenyButton: true,
      denyButtonText: 'Cancelar',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, salir'
    }).then(result => {
      if (result.isConfirmed) {
        window.location.href = "/game";
      }
    })
  }
  alertQuitGame()
}
  
  const resetQuiz = () => {
    setAnswers(Array(data.length).fill(null));
    setCurrentQuestionIndex(0);
    setSelectedOption("");
    setScore(0);
    setShowResults(false);
    setCountDown(60);
  };

  //Paginación de preguntas.
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);  //Indice de preguntas para paginación.
  const handleNextQuestion = () => {
    setCurrentQuestionIndex(prevIndex => prevIndex + 1);
    setCountDown(60)
    // console.log(answers);
  }


  // Al clicar en input/option
  const [selectedOption, setSelectedOption] = useState("");
  const handleOptionSelect = (questionIndex, optionValue) => {
    if (optionValue !== answers[questionIndex]) {
      const newAnswers = [...answers];                    // Almacena los valores answers en newAnswers.
      newAnswers[questionIndex] = optionValue;        //Otorga al índice de newAnswers coincidente con indice de pregunta el valor seleccionado. 
      setAnswers(newAnswers);   //actualiza answers con el valor del array newAnswers.
      setSelectedOption(optionValue)
    }
  }
  
  // CLICK en botón final 'RESULTADOS'  -----------------------------------------------
  const [score, setScore] = useState(0);  // Guarda la puntuación de partida.
  const url = '/quiz'   // url para enviar resultados de partida a BBDD.
  const onSubmit = () => {
    // e.preventDefault();
    let counter = 0;        // Compara array de correctas con array de seleccionadas y actualiza marcador 'score'
    for (let i = 0; i < answers.length; i++) {
      if (answers[i] === correctAnswers[i]) {
        counter++
      }

    }
    setScore(counter)
    setShowResults(true); // Muestra mensaje de resultados según puntuación.


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
  // ------------------------------------------------------------------------


  //Timer COUNTDOWN  ---------------------------------
    const timer = useRef;
    const [countDown, setCountDown] = useState (60);  //Cuenta atrás.
    useEffect(() => {
      timer.current = setInterval(() => {

        setCountDown(prev => prev - 1)

      }, 1000)

      return () => clearInterval(timer.current)
    }, [])

    useEffect(() => {
      if (countDown === 0) {
        if (currentQuestionIndex < data.length - 1) {
          handleNextQuestion(); 
        } else {
          onSubmit(); 
        }
        setCountDown(60);
      }
    }, [countDown, currentQuestionIndex]);
   // -----------------------------------------------------
  

  const printQuestions = () => {
      const questionIndex = currentQuestionIndex;
      const question = data[questionIndex];
    
        return (
          <div className="questionContainer">
            <div className="headQuiz">
                <div className="progressBarWrapper">
                  <div className={`progressBarQuiz${questionIndex}`}></div>
                </div>
                <img onClick={QuitGame} src="assets/close.png" alt="abandonar juego" />
            </div>
            <div className="quizHeaderWrapper">
                <h1>Pregunta {questionIndex + 1} </h1>
                <h1> {countDown} </h1>
            </div>
            <h3>{question.question}</h3>
            <div className="optionsWrapper">
                {question.options.map((option, optionIdx) => (

                        <label key={optionIdx}   className="labelOptionQuiz"
                        onClick={() => handleOptionSelect(questionIndex, option.radioValue)} >
                          <input  type="radio" name={question.name}
                            value={option.radioValue}
                            checked={option.radioValue === answers[questionIndex]}
                            onChange={() => {}} />
                          {option.choice}
                        </label>
                ))}
            </div>
            {currentQuestionIndex < data.length - 1 ? (
              <button onClick={handleNextQuestion} className="QuizButtons">SIGUIENTE</button>
            ) : (
              <button onClick={onSubmit} className="QuizButtons">RESULTADOS</button>
            )}
          </div>
        );
  };

 // Mensajes de resultados según puntuación. 
  const [showResults, setShowResults] = useState(false);  // Para mostar mensaje de Resultados.
  const getResultsMessage = (score) => {
    if (score === 0) {
      return `¡Ups! No has obtenido ningún acierto. Te animo a investigar un poco más y así estar preparado/a para enfrentar este fenómeno natural. ¡Ánimo!`;
    } else if (score >= 1 && score <= 4) {
      return `¡Bien hecho! Has obtenido ${score} aciertos. Aunque todavía hay aspectos por conocer, estás en el camino correcto. ¡Sigue aprendiendo y cuidándote!`;
    } else if (score >= 5 && score <= 7) {
      return `¡Muy bien! Has obtenido ${score} aciertos. Tienes conocimientos sólidos sobre las olas de calor y sobre medidas preventivas necesarias para mantener tu bienestar durante estas condiciones extremas ¡Sigue así!`;
    } else if (score >= 8 && score <= 9) {
      return `¡Felicidades! Has obtenido ${score} aciertos. ¡Casi un experto/a en olas de calor! Tu conocimiento sobre este tema es impresionante, y estás bien preparado/a para enfrentar situaciones de calor extremo. ¡Sigue así y mantén tu seguridad y la de otros!`;
    } else if (score === 10) {
      return `¡Enhorabuena, has acertado todas las preguntas!. ¡Sabes mucho sobre las olas de calor! Tu conocimiento es excepcional y estás bien informado/a sobre cómo protegerte y cuidarte durante condiciones de calor extremo. ¡Sigue siendo un ejemplo y comparte tu sabiduría con otros!`;
    } else {
      return "";
    }
  }



  return (
    <section className="sectionQuiz">
      <article>
      {showResults ? (
          <div className="quizResults">
            <img src="assets/PICTURE 9.png" alt="Bien hecho" />
            <p>{getResultsMessage(score)}</p>
            <h2>Has acertado {score} de 10 preguntas</h2>
            <div className="buttonsQuizResults">
                <Link to='/game'><button className="seguirJugandoButton">Seguir jugando</button></Link>
                <div className="resultsButtonWrapper">
                  <Link to="/juego"><button className="resultButton" onClick={resetQuiz}>Repetir test</button></Link>
                  <Link to='/profile'><button className="resultButton">Ver perfil</button></Link>  
                </div>
            </div>
          </div>
        ) : (
          printQuestions()
        )}
      </article>
    </section>
  );
};

export default Quiz;
