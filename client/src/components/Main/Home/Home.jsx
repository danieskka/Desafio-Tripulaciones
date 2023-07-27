import { news } from "./index";
import { v4 as uuidv4 } from 'uuid';
import Gallery from './Gallery/Gallery';
import { useState } from "react";


const Home = () => {

  const printNews = () => news.map(item => <Gallery head={item.headline} img={item.img} url={item.url}  key={uuidv4()} />)

  const [currentPage, setCurrentPage] = useState(1); // Estado para rastrear la página actual

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  
  const goToNextPage = () => {
      setCurrentPage(currentPage + 1);
  };



  return (
    <section>
      <h1>Soy el Home</h1>
      <Routes>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/game/*" element={<Game/>}/>
        <Route path="/info" element={<Info/>}/>       
      </Routes>
    </section>
  );
};

export default Home;
