
import './App.css'
import Main from './components/Main';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter } from 'react-router-dom';

function App() {


  return (
    <>
    <BrowserRouter>
      <Header />
      <Main />
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
