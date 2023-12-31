import { Routes, Route, Outlet } from 'react-router-dom';
import './App.css';
import { useState } from 'react';
import NavBar from './components/navbar';
import CatsPage from './pages/catspage';
import HomePage from './pages/homepage';
import SuccessPage from './pages/successStories';
import Footer from './components/footer';



function App() {
  const [basket, setBasket] = useState([]);
  const [cats, setCats] = useState([]);
 
  return (
    <div className="App">
      <NavBar basket={basket} setBasket={setBasket} cats={cats} setCats={setCats}/>
      <div className="mainContent">
          <Outlet basket={basket} setBasket={setBasket} cats={cats} setCats={setCats}/>
      </div>
      
      
      <Routes>
        <Route key="homepage" index element={ <HomePage  basket={basket} setBasket={setBasket} cats={cats} setCats={setCats} />} />
        <Route key="adopt" path="/adopt" element={ <CatsPage  basket={basket} setBasket={setBasket} cats={cats} setCats={setCats} /> } />
        <Route key="success" path="/success" element={ <SuccessPage basket={basket} setBasket={setBasket}/> } />
      </Routes>
      
      <Footer />
    </div>
    
  );
}

export default App;
