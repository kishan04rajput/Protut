// import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <div style={{"padding":"2%"}}>
      <BrowserRouter>
        <Routes>
          <Route index element={<LandingPage/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
