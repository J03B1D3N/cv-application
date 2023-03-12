
import './App.scss';
import FirstName from './Components/TitlesAndInformation/FirstName';
import LastName from './Components/TitlesAndInformation/LastName';
import Adress from './Components/TitlesAndInformation/Adress';
import PhoneNumber from './Components/TitlesAndInformation/PhoneNumber';
import Email from './Components/TitlesAndInformation/Email';
import LinkedIn from './Components/TitlesAndInformation/LinkedIn';
import CurrentRole from './Components/TitlesAndInformation/CurrentRole';


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
