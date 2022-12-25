import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Aboutus from './Components/About/Aboutus';
import Bottambar from './Components/Bottambar/Bottambar';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar />
      

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Aboutus' element={<Aboutus/>} />

        </Routes>
        
        <Footer/>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
