import Navegation from '../../../../Navegation/Navegation';
import { Link } from "react-router-dom";




const Article = () => {
  return (
    <>
    <Link to="/resources"><section className="leftarrow"></section></Link>
      <section className="articleContentWrapper">
        <h1>El efecto isla de calor urbano ¿qué es y cómo solucionarlo?</h1>
        <img className="imgArticle" src="assets/PICTURE 17.png" alt="ciudad" />
        <p>En las últimas décadas, hemos sido testigos de un aumento alarmante en las olas de calor que afectan a las ciudades de todo el mundo. Estos episodios extremos de altas temperaturas representan una seria amenaza para la salud pública, la infraestructura urbana y el medio ambiente. Sin embargo, un factor crucial que contribuye a intensificar estas olas de calor en entornos urbanos es lo que se conoce como el "efecto isla de calor urbano". En este artículo, exploraremos qué es el efecto isla de calor urbano, cómo afecta a nuestras ciudades y qué soluciones pueden implementarse para enfrentar este desafío.</p>
        <h3>¿Qué es el efecto isla de calor urbano?</h3>
        <p>El efecto isla de calor urbano se refiere al fenómeno por el cual las áreas urbanas experimentan temperaturas significativamente más altas que las zonas rurales circundantes. Esta disparidad térmica se debe en gran parte a la concentración de infraestructuras, carreteras, edificios y materiales urbanos que absorben y retienen el calor, junto con la limitada vegetación y áreas verdes en las ciudades.</p>
        <img className="imgArticle" src="assets/PICTURE 4.png" alt="sequía" />
        <h3>Impacto del efecto isla de calor en las ciudades</h3>
        <p>El efecto isla de calor urbano puede tener múltiples consecuencias negativas para las ciudades:</p>
        <ul>
          <li>Salud Pública: Las altas temperaturas pueden provocar problemas de salud como golpes de calor, deshidratación y afecciones respiratorias. Los grupos vulnerables, como los ancianos y los niños pequeños, son particularmente susceptibles.</li>
          <li>Energía y Consumo: Las altas temperaturas obligan a un mayor uso de sistemas de aire acondicionado y ventilación, lo que puede aumentar la demanda de energía eléctrica y, en consecuencia, las emisiones de gases de efecto invernadero.</li>
          <li>Infraestructura: Las altas temperaturas pueden dañar la infraestructura urbana, como carreteras, puentes y líneas de transporte público, debido a la expansión y contracción térmica repetida.</li>
        </ul>
        <p>El efecto isla de calor urbano es un desafío real y urgente que las ciudades deben abordar en el contexto del cambio climático. Al tomar medidas para mitigar este efecto, las ciudades pueden crear entornos más saludables, resilientes y sostenibles para sus habitantes. La colaboración entre gobiernos, comunidades y expertos es esencial para enfrentar este problema y construir ciudades preparadas para el futuro.</p>

      </section>
      <Navegation />
    </>
  );
};

export default Article;
