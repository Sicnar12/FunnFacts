import {Component} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


import Navbar from "./components/Navbar";
import West from './components/West';
import East from './components/East';
import North from './components/North';
import South from './components/South';


class App extends Component {
  render () {

  
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element = {<South />} />
          <Route path='/north' element = {<North />} />
          <Route path='/west' element = {<West />} />
          <Route path='/east' element = {<East />}/>
          
        </Routes>
      </div>
    </BrowserRouter>
  );
  }
}

export default App;

