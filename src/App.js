
import './App.css';
import NavBar from "./components/NavBar";
import {Profiles} from "./components/data.js";
import ListeProfile from './components/ListeProfile';
import Footer from './components/Footer';

function App() {
  const handleName = (a) => {
    return alert(`Hello ${a}`);
  };
  return (
    <div className="App">
    <NavBar/>
   
    <ListeProfile Profiles={Profiles} handleName={handleName}> 
    <h1 style={{color: '#1E3163'}}>Cards List</h1>
    </ListeProfile>
    <Footer/>
   
   
    </div>
  );
}

export default App;
