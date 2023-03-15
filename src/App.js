
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
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import html2pdf from 'html2pdf.js';



function App() {

  const [state, setState] = useState('edit')

  function handleEdit() {
    setState('edit')
  }

  function handleDisplay() {
    setState('display')
  }


  // function handlePdf(e) {
  //   var element = e.target.parentNode.parentNode.children[1]
  //   var opt = {
  //     margin:       1,
  //     filename:     'myfile.pdf',
  //     image:        { type: 'jpeg', quality: 0.98 },
  //     html2canvas:  { scale: 5 },
  //     jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
  //   };

  //   html2pdf().from(element).set(opt).save();
  // }

  async function handlePdf (e) {

    await html2canvas(e.target.parentNode.parentNode.children[1], {
      useCORS: true,
    allowTaint: true,
    scrollY: -window.scrollY,
  }).then(canvas => {
    const image = canvas.toDataURL('image/jpeg', 1.0);
    const doc = new jsPDF('p', 'px', 'a4');
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();

    const widthRatio = pageWidth / canvas.width;
    const heightRatio = pageHeight / canvas.height;
    const ratio = widthRatio > heightRatio ? heightRatio : widthRatio;

    const canvasWidth = canvas.width * ratio;
    const canvasHeight = canvas.height * ratio;

    const marginX = (pageWidth - canvasWidth) / 2;

    doc.addImage(image, 'JPEG', marginX, 0, canvasWidth, canvasHeight);
    doc.output('dataurlnewwindow');
  });
};



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
