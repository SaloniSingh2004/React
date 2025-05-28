import logo from './logo.svg';
import './App.css';
import Website from './Components/Website.jsx';
import Text from "./Components/Text.jsx";

function App() {
  return (
    <>
    <Website title="Pinterest" searchBar={true}/>
    <Text />
    </>

  );
}

export default App;
