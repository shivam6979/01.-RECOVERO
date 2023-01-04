import logo from './logo.svg';
import './App.css';
// import Navigation from "./component/Navigation"
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Login from './component/Login';

import Signup from './component/Signup';

function App() {
  return (
    <>
        {/* <Navigation/> */}
        <Signup/>
        <Routes>
        <Route path='/signup' element={Signup}/>

        <Route path='/login' element={Login}/>

        </Routes>

    </>
  );
}

export default App;
