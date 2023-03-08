
import './App.scss';
import FirstName from './Components/FirstName';

function App() {
  return (
    <div className="App">
      <div className='page'>
      <div className='titlesAndInformation'>
      {FirstName()}
      </div>
      </div>
      
    </div>
  );
}

export default App;
