import React, { useState } from "react";
import uniqid from "uniqid"
import displayEducationEntries from "./educationDisplay";








let array= []

export default function Education() {

   

    const [isOpened, setIsOpened] = useState(false);

    const [university, setUniversity] = useState("")
    const [degree, setdegree] = useState("")
    const [city, setCity] = useState("")
    const [from, setFrom] = useState("")
    const [to, setTo] = useState("")
    const [description, setDescription] = useState("")



      
    function toggle() {
      setIsOpened(wasOpened => !wasOpened);
      console.log(isOpened)
    }

    function handleUniversityChange(e) {
        setUniversity(e.target.value)
    }

    function handledegreeChange(e) {
        setdegree(e.target.value)
    }

    function handleCityChange(e) {
        setCity(e.target.value)
    }

    function handleFromChange(e) {
        setFrom(e.target.value)
    }

    function handleToChange(e) {
        setTo(e.target.value)
    }

    function handleDescriptionChange(e) {
        setDescription(e.target.value)
    }

    function HandleClick() {
        toggle()
    }

    function handleSubmit(e) {
        e.preventDefault()
        array.push(createWorkExperienceEntry())
        toggle()
        setUniversity("")
        setdegree("")
        setCity("")
        setFrom("")
        setTo("")
        setDescription("")
    }
    function handleCancel (e) {
        e.preventDefault();
        toggle()
    }

    function createWorkExperienceEntry() {
        let object = {university, degree, city, from, to, description, id: uniqid()}
        return object
    }

    return (

        <div>
             {displayEducationEntries(array)}
            {isOpened ? <form  onSubmit={handleSubmit}>
                <div className="educationForm">
                    <input placeholder="University" id="university" onChange={handleUniversityChange}></input>
                    <input placeholder="Degree" id="degree" onChange={handledegreeChange}></input>
                    <input placeholder="City" onChange={handleCityChange}></input>
                    <input placeholder="From" onChange={handleFromChange}></input>
                    <input placeholder="To" onChange={handleToChange}></input>
                    <input placeholder="Description" className="description" onChange={handleDescriptionChange}></input>
                    <button className="submit">Submit</button>
                    <button className="cancel" onClick={handleCancel}>Cancel</button>
                </div>
            </form> :  
                <div>
                <button className="btn" onClick={HandleClick}>+ add</button>
                </div>}
            
           
        </div>
        
    )
}
