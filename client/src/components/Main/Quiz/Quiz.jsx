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





    // const questions = [
    //   {
    //     question: '¿Qué es una ola de calor?',
    //     options: [
    //       'a) Un fenómeno en el que se eleva el nivel del mar debido al calor.',
    //       'b) Un aumento moderado de la temperatura durante el verano.',
    //       'c) Un período prolongado de temperaturas extremadamente altas en una región.',
    //       'd) Un cambio brusco de temperatura entre el día y la noche.',
    //     ],
    //     correctAnswer: 'c) Un período prolongado de temperaturas extremadamente altas en una región.',
    //   },
    //   {
    //     question: '¿Cuál es el órgano más afectado por el calor intenso?',
    //     options: ['a) Los pulmones.', 'b) Los riñones.', 'c) El hígado.', 'd) El corazón.'],
    //     correctAnswer: 'd) El corazón.',
    //   },
    //   {
    //     question: '¿Cuál de estas actividades es recomendable durante una ola de calor?',
    //     options: [
    //       'a) Salir a correr al mediodía.',
    //       'b) Tomar bebidas con cafeína.',
    //       'c) Abrigarse con ropa gruesa.',
    //       'd) Permanecer en lugares frescos y evitar esfuerzos físicos.',
    //     ],
    //     correctAnswer: 'd) Permanecer en lugares frescos y evitar esfuerzos físicos.',
    //   },
    //   {
    //     question: '¿Cuál de los siguientes lugares es el más seguro durante una ola de calor?',
    //     options: [
    //       'a) Un parque sin sombra.',
    //       'b) Una piscina sin supervisión.',
    //       'c) Una playa sin vigilancia.',
    //       'd) Un centro comercial con aire acondicionado.',
    //     ],
    //     correctAnswer: 'd) Un centro comercial con aire acondicionado.',
    //   },
    //   {
    //     question: '¿Qué acciones pueden ayudar a reducir los efectos de una ola de calor en el medio ambiente?',
    //     options: [
    //       'a) Usar más vehículos que emitan gases contaminantes.',
    //       'b) Consumir más energía eléctrica de fuentes no renovables.',
    //       'c) Plantar árboles y reducir el uso de aparatos electrónicos innecesarios.',
    //       'd) Aumentar el uso de aerosoles y productos químicos dañinos.',
    //     ],
    //     correctAnswer: 'c) Plantar árboles y reducir el uso de aparatos electrónicos innecesarios.',
    //   },
    //   {
    //     question: '¿Qué grupo de personas es más vulnerable durante una ola de calor?',
    //     options: [
    //       'a) Los adultos jóvenes y saludables.',
    //       'b) Los niños y niñas mayores de 5 años.',
    //       'c) Las personas mayores y aquellos con condiciones médicas preexistentes.',
    //       'd) Los deportistas y atletas entrenados.',
    //     ],
    //     correctAnswer: 'c) Las personas mayores y aquellos con condiciones médicas preexistentes.',
    //   },
    //   {
    //     question: '¿Cuál es una de las principales causas de las olas de calor?',
    //     options: [
    //       'a) Actividades volcánicas.',
    //       'b) Cambios en la órbita terrestre.',
    //       'c) Emisiones de gases de efecto invernadero.',
    //       'd) Erupciones solares.',
    //     ],
    //     correctAnswer: 'c) Emisiones de gases de efecto invernadero.',
    //   },
    //   {
    //     question: '¿Cuál es el síntoma más grave de una insolación durante una ola de calor?',
    //     options: [
    //       'a) Sudoración excesiva.',
    //       'b) Dolor de cabeza leve.',
    //       'c) Confusión y pérdida del conocimiento.',
    //       'd) Ligeras náuseas.',
    //     ],
    //     correctAnswer: 'c) Confusión y pérdida del conocimiento.',
    //   },
    //   {
    //     question: '¿Qué recomendación es más importante seguir para protegerte del calor extremo?',
    //     options: [
    //       'a) Usar protector solar de alto factor.',
    //       'b) Beber alcohol para refrescarte.',
    //       'c) Vestir ropa oscura y ajustada al cuerpo.',
    //       'd) Mantenerse hidratado y beber agua regularmente.',
    //     ],
    //     correctAnswer: 'd) Mantenerse hidratado y beber agua regularmente.',
    //   },
    //   {
    //     question: '¿Cuál es la mejor forma de mantener tu hogar fresco durante una ola de calor?',
    //     options: [
    //       'a) Abrir las ventanas durante el día para ventilar.',
    //       'b) Encender todas las luces y electrodomésticos para crear corriente de aire.',
    //       'c) Cerrar las cortinas y persianas durante el día para evitar el sol directo.',
    //       'd) Cocinar alimentos calientes en el interior para generar calor.',
    //     ],
    //     correctAnswer: 'c) Cerrar las cortinas y persianas durante el día para evitar el sol directo.',
    //   },
    // ];
   
    // const [answers, setAnswers] = useState(Array(questions.length).fill(null));  //almacena las respuestas elegidas por el usuario.
    // const [isAnswered, setIsAnswered] = useState(Array(questions.length).fill(false));  //Indica si la respuesta ha sido respondida.
    // const [score, setScore] = useState(0);


    // const handleOptionSelect = (questionIndex, optionValue, option) => {  //questionIndex = # pregunta; optionValue = # respuesta; option = string respuesta.
    // const options = ['A', 'B', 'C', 'D'];
    // const newAnswers = [...answers];
    // newAnswers[questionIndex] = options[optionValue];
  

    //   const rightAnswer = questions[questionIndex].correctAnswer;

    //   if (option === rightAnswer && isAnswered[questionIndex] == false) {
    //     isAnswered[questionIndex] = true;
    //     setScore(prevScore => prevScore + 1);
    //   }
    //   setAnswers(newAnswers);
    // }









  
  // const handleOptionSelect = (questionIndex, optionValue, option) => {
  //   const options = ['A', 'B', 'C', 'D'];
  //   const newAnswers = [...answers];
  //   newAnswers[questionIndex] = options[optionValue];
  //   setAnswers(newAnswers);
    
  //   const rightAnswer = questions[questionIndex].correctAnswer;
    
  //   console.log(option, rightAnswer);

  //   if (option === rightAnswer && isAnswered[questionIndex] == false) {
  //     setIsAnswered(prevIsAnswered => {
  //       const newIsAnswered = [...prevIsAnswered];
  //       newIsAnswered[questionIndex] = true;
  //       return newIsAnswered;
  //     });

  //     setScore(prevScore => prevScore + 1);
  //   }
   

  //   console.log(questionIndex);
  // };
  // console.log(answers);

  // console.log(score)



  // const printQuestions = () => questions.map((question, questionIndex) => (
  //   <div key={questionIndex}>
  //     <p>{question.question}</p>
  //           {question.options.map((option, optionValue) => (
  //                 <label key={optionValue}>
  //                     <input type="radio" name={`question_${questionIndex}`} value={optionValue} checked={answers[questionIndex] === optionValue} 
  //                     onChange={() => handleOptionSelect(questionIndex, optionValue, option)}  />  
  //                 {option}
  //                 </label>
  //               ))}
  //   </div>
  // ))


  return (
    <section>
      {printQuestions()}
      <button onClick={onSubmit}>Resultados</button>
    </section>
  );
};

export default Quiz;
