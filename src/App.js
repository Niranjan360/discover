import './App.css';
import Home from './Components/Home';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Favorites from './Components/Favorites';
import Navbar from "./Components/Navbar";


function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/favs' element={<Favorites/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
