
const Admin = () => {
  return (

    <section className="sectionAdmin">
      <div className="logoAdeminContainer">
          <img src='assets/HeatyLogo.png' alt="Mensaje de inicio de sesión" className="logoAdmin"/>
      </div>
      <div className="AdminContainer">
        <h1>Bienvenido, Admin</h1> 
        <p>Aquí podrás encontrar todos los datos para poder realizar un seguimiento completo de tus usarios.</p>
        <article>
          <img src="assets/MapaData.PNG" alt="mapa data" />
          <a href=""><button>Mapa de usuarios</button></a>
        </article>
        <article>
          <img src="assets/graficaData.PNG" alt="grafica de data" />
          <a href=""><button>Estadísticas</button></a> 
        </article>

      </div>
    </section>


  );
};

export default Admin;
