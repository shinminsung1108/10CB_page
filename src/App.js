import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Login } from "./pages/Login/Login";
import { Join } from "./pages/Login/Join";
import store, { persistor } from "../src/pages/Login/Store"
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { Home } from "./components/Home";
import { MyProfile } from "./pages/profile/MyProfile";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/Login" />}/>
          <Route path="/Home" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Join" element={<Join />} />
          <Route path="/My" element={<MyProfile />} />
        </Routes>
      </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
