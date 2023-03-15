import React, { useState } from "react"
import uniqid from "uniqid"
import displayWorkExperienceEntries from "./workExperienceEntryDisplay";



 let array= []

export default function WorkExperience() {

   

    const [isOpened, setIsOpened] = useState(false);

    const [position, setPosition] = useState("")
    const [company, setCompany] = useState("")
    const [city, setCity] = useState("")
    const [from, setFrom] = useState("")
    const [to, setTo] = useState("")
    const [description, setDescription] = useState("")



      
    function toggle() {
      setIsOpened(wasOpened => !wasOpened);
      console.log(isOpened)
    }

    function handlePositionChange(e) {
        setPosition(e.target.value)
    }

    function handleCompanyChange(e) {
        setCompany(e.target.value)
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
        setPosition("")
        setCompany("")
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
        let object = {position, company, city, from, to, description, id: uniqid()}
        return object
    }

    return (

        <div>
             {displayWorkExperienceEntries(array)}
            {isOpened ? <form  onSubmit={handleSubmit}>
                <div className="WorkForm">
                    <input placeholder="Position" id="Position" onChange={handlePositionChange}></input>
                    <input placeholder="Company" id="Company" onChange={handleCompanyChange}></input>
                    <input placeholder="City" onChange={handleCityChange}></input>
                    <input placeholder="From" onChange={handleFromChange}></input>
                    <input placeholder="To" onChange={handleToChange}></input>
                    <input placeholder="Short description" className="description" onChange={handleDescriptionChange}></input>
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