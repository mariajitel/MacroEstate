import './App.css';
import LandingPage from './WebPages/LandingPage';
import Register from './WebPages/Register';
import Login from './WebPages/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './WebPages/Dashboard';
import Collection from './WebPages/Collection';
import NewsAndEvents from './WebPages/NewsnEvents';
import HouseSales from './WebPages/House';
import Executives from './WebPages/Executives';
import Forum from './WebPages/Forum';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/collection' element={<Collection/>}/>
          <Route path='/newsAndEvent' element={<NewsAndEvents/>}/>
          <Route path='/houseSales' element={<HouseSales/>}/>
          <Route path='/executives' element={<Executives/>}/>
          <Route path='/forum' element={<Forum/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;




