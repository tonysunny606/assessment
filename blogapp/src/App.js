
import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Blogform from './components/Blogform';

function App() {
  return (
    <div className="App">
      
      <Navbar/>
      <Routes>
        <Route path=''element={<Home/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/add' element={<Blogform/>}/>
      </Routes>

    
      
      
    </div>
  );
}


export default App;
