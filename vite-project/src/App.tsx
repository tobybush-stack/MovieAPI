import './css/App.css'
import Home from "./pages/Home"
import Favorites from "./pages/Favorites"
import NavBar from "./components/NavBar"
import { MovieProvider } from './contexts/MovieContext.tsx'
import {Routes, Route} from "react-router-dom"

function App() {

  return (
    <>
    <div>
      <NavBar></NavBar>
    <main className="main-content">
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/" element={<Favorites></Favorites>}></Route>
      </Routes>
    </main>
    </div>
    </>
  );
};

export default App
