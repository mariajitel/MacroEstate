import './App.css';
import Dashboard from './pages/Dashboard';
import Register from './pages/RegisterPage';
import Activate from './pages/Activation';
import AddMember from './pages/AddMember'
import Transactions from './pages/Transactions';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Members from './pages/Members';
// import Collection from './WebPages/Collection';
// import NewsAndEvents from './WebPages/NewsnEvents';
// import HouseSales from './WebPages/House';
// import Executives from './WebPages/Executives';
// import Forum from './WebPages/Forum';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/transactions' element={<Transactions/>}/>
          <Route path='/members' element={<Members/>}/>
          <Route path='/addMembers' element={<AddMember/>}/>
          <Route path='/activation' element={<Activate/>}/>
          {/*<Route path='/houseSales' element={<HouseSales/>}/>
          <Route path='/executives' element={<Executives/>}/>
          <Route path='/forum' element={<Forum/>}/>  */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
