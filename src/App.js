import { Routes, Route, Outlet } from 'react-router-dom';
import './App.css';
import { useState } from 'react';
import NavBar from './components/navbar';
import MoreInfoPage from './components/moreInfo';
import CatsPage from './pages/catspage';
import HomePage from './pages/homepage';
import Footer from './components/footer';
import Banner from './components/banner';


function App() {
  const [basket, setBasket] = useState([]);
  const [cats, setCats] = useState([]);
  const [page, setPage] = useState("home")
 
  return (
    <div className="App">
      <NavBar basket={basket} setBasket={setBasket} cats={cats} setCats={setCats}/>
      <Banner page={page} />
      <div className="mainContent">
          <Outlet basket={basket} setBasket={setBasket} cats={cats} setCats={setCats} setPage={setPage} />
      </div>
      
      
      <Routes>
        <Route key="homepage" index element={ <HomePage  basket={basket} setBasket={setBasket} cats={cats} setCats={setCats} setPage={setPage} />} />
        <Route key="moreinfo" path="/moreinfo" element={ <MoreInfoPage basket={basket} setBasket={setBasket} cats={cats} setCats={setCats} /> } />
        <Route key="adopt" path="/adopt" element={ <CatsPage  basket={basket} setBasket={setBasket} cats={cats} setCats={setCats} setPage={setPage} /> } />
      </Routes>
      
      <Footer />
    </div>
    
  );
}

export default App;
