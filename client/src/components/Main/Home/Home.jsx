




const Home = () => {
  return (
    <>
      <h1>Soy el Home</h1>
<<<<<<< HEAD
     
    </section>
=======
        <section>
          <Routes>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/game/*" element={<Game/>}/>
            <Route path="/info" element={<Info/>}/>
          </Routes>
        </section>
    </>
>>>>>>> profile
  );
};

export default Home;
