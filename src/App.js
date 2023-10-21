import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from "./Login/Login";
import { Join } from './Login/Join';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/Login' element={<Login />}/>
        <Route path='/Join' element={<Join />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
