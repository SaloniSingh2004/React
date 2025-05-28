import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.js'
import Textform from './Textform.js';

function App() {
  return (
    <>
    <Navbar title="Saloni" home="Ghar" searchBar={false}/>
    <Textform />
    {/* <Navbar title="Singh" home="Ghar"/>
    <Navbar title="Sana" home="Ghar"/>
    <Navbar title="Saifi" home="Ghar"/> */}



</>

  );
}

export default App;
