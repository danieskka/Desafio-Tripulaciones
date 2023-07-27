

const MapInfo = () => {
  return (
  <section className='mapinfogeneral'>
    
    <article className="infosearch">
    <p>Elige ciudad:</p>
  <input type="text" placeholder="Madrid City" id="getProvinceName" name="name"></input>
  </article>
  <article className="infofilters">
    <button className="b_filter">Hoy</button>
    <button className="b_filter">Mañana</button>
    <button className="b_filter">5 días</button>
  </article>
  
  </section>

  )
};

export default MapInfo;
