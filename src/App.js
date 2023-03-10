
import './App.scss';
import FirstName from './Components/FirstName';
import LastName from './Components/LastName';
import Adress from './Components/Adress';
import PhoneNumber from './Components/PhoneNumber';
import Email from './Components/Email';
import LinkedIn from './Components/LinkedIn';
import CurrentRole from './Components/CurrentRole';


function App() {
  return (
    <div className="App">
      <div className='page'>
        <div className='titlesAndInformation'>
          <div className="leftSide">
              {FirstName()}
              {LastName()}
              {CurrentRole()}
          </div>
          <div className="rightSide">
           {Adress()}
           {PhoneNumber()}
           {Email()}
           {LinkedIn()}
          </div>

        </div>
        <div className='experienceAndEducation'>

        </div>

      </div>
      
    </div>
  );
}

export default App;
