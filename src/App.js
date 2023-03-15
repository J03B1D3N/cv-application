
import './App.scss';
import { useState } from 'react';
import FirstName from './Components/TitlesAndInformation/FirstName';
import LastName from './Components/TitlesAndInformation/LastName';
import Adress from './Components/TitlesAndInformation/Adress';
import PhoneNumber from './Components/TitlesAndInformation/PhoneNumber';
import Email from './Components/TitlesAndInformation/Email';
import LinkedIn from './Components/TitlesAndInformation/LinkedIn';
import CurrentRole from './Components/TitlesAndInformation/CurrentRole';
import workExperience from './Components/WorkExperience/WorkExperience';
import Education from './Components/Education/education';


function App() {

  const [state, setState] = useState('edit')

  function handleEdit() {
    setState('edit')
  }

  function handleDisplay() {
    setState('display')
  }

  function handlePdf () {
    return
  }



  return (
    <div className="App">
      <div className='buttons'>
        <button className='button edit' onClick={handleEdit}>Edit</button>
          <button className='button display'onClick={handleDisplay}>Display</button>
          <button className='button pdf' onClick={handlePdf}>Save to PDF</button>
      </div>
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
          <div className='workExperience'><p>Work Experience</p>
            {workExperience(state)}
          </div>
          <div className='education'><p>Education</p>
            {Education(state)}
          </div>
        </div>

      </div>
      
    </div>
  );
}

export default App;
