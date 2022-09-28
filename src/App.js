import './App.css';
import freeCodeCampLogo from './images/freecodecamp-logo.png'
import Homework from './components/homework';




function App() {
  return (
    <div className="App">
      <div className='freecodecamp-logo-container' >
        <img
        src={freeCodeCampLogo}
        className='freecodecamp-logo' 
        />
      </div>
      <div className='principal-list' >
        <h1>Mis Tareas</h1>
        <Homework text='Aprender React' />
      </div>
    </div>
  );
}

export default App;
