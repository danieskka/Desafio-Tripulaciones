import {Link} from "react-router-dom";

const MiniLecture = () => {
  return (
    <section className="homeWrapper">
      <h1>OLAS DE CALOR</h1>
      <h2>Sobreviviendo al Calor Extremo</h2>
      <img src="assets/mini_leccion.jpg" alt="Calor" className="minilecturePortada"/>
      <article className="lectureText">
        <p>Las olas de calor son fenómenos climáticos extremos con temperaturas anormalmente altas y duraderas. Pueden tener efectos devastadores en la salud, agricultura, infraestructura y el medio ambiente. En esta lección, exploraremos sus causas, impactos y medidas de prevención.    </p>
        <h3>¿Qué es una ola de calor?</h3>
        <p> Es un período prolongado con temperaturas muy altas en comparación con lo normal en una región. Se forman debido a sistemas de alta presión que atrapan el aire caliente cerca de la superficie terrestre.</p>
        <h3>¿Qué causa las olas de calor?</h3>
        <ul className="ulMLecture">
            <li className="liML">Presión atmosférica: Un sistema de alta presión puede atrapar aire caliente y crear una ola de calor.</li>
            <li className="liML">Bloqueo atmosférico: La corriente en chorro puede estancarse, causando una ola de calor prolongada. </li>
            <li className="liML">Cambio climático: La emisión de gases de efecto invernadero intensifica y prolonga las olas de calor.</li>
        </ul>
        <h3>Impactos de las olas de calor </h3>
        <ul className="ulMLecture">
            <li className="liML">Salud humana: Pueden causar golpes de calor, agotamiento y deshidratación, afectando especialmente a niños y ancianos.</li>
            <li className="liML">Agricultura y medio ambiente: Dañan cultivos, ganadería y ecosistemas frágiles, disminuyendo la producción de alimentos.</li>
            <li className="liML">Infraestructura: El calor intenso daña carreteras, líneas de energía y sistemas de transporte.</li>
        </ul>
        <h3>Medidas de prevención </h3>
        <ol className="olMLecture">
            <li>Hidratación: Beber suficiente agua para mantenerse hidratado.</li>
            <li>Lugares frescos: Refugiarse en lugares con aire acondicionado o sombra.</li>
            <li>Vestimenta adecuada: Usar ropa ligera y de colores claros.</li>
            <li>Evitar actividades extenuantes: Reducir la actividad física durante las horas más calurosas.</li>
            <li>Cuidar a los vulnerables: Prestar atención a niños, ancianos y personas con problemas de salud.</li>
            <li>Reducir uso de energía: Disminuir el consumo de energía para evitar apagones.</li>
        </ol>
        <p>Las olas de calor son eventos climáticos extremos que debemos tomar en serio. Al comprender sus causas e impactos, y adoptar medidas preventivas, podemos enfrentar mejor este calor extremo. La concienciación sobre el cambio climático y prácticas sostenibles son clave para mitigar las olas de calor en el futuro. Proteger nuestra salud y entorno depende de nuestra responsabilidad colectiva en la lucha contra el calor extremo.</p>
      </article>

      <Link to="/gamequiz">
      <button className="quizNextQuestion">COMENZAR QUIZ</button>
      </Link>

    </section>

  );
};

export default MiniLecture;
