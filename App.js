import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import Login from './Login';
import Logout from './Logout';
import Loginlout from './Loginlout';
import { Route,Routes } from 'react-router-dom';
function App() {
  return (
    <>
    {/* <Counter/> */}
    <Loginlout/>
    <Routes>
      
        <Route path='/login'element={<Login/>}></Route>
        <Route path='/logout'element={<Logout/>}></Route>
      
    </Routes>
    </>
  );
}

export default App;
