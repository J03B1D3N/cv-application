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

    function HandleClick() {
        toggle()
    }

    function handleSubmit(e) {
        e.preventDefault()
        array.push(createWorkExperienceEntry())
        toggle()
       console.log(array)
    }

    function createWorkExperienceEntry() {
        let object = {position, company, city, from, to, id: uniqid()}
        return object
    }

    return (

        <div>
            {isOpened ? <form  onSubmit={handleSubmit}>
                <div className="WorkForm">
                    <input placeholder="Position" id="Position" onChange={handlePositionChange}></input>
                    <input placeholder="Company" id="Company" onChange={handleCompanyChange}></input>
                    <input placeholder="City" onChange={handleCityChange}></input>
                    <input placeholder="From" onChange={handleFromChange}></input>
                    <input placeholder="To" onChange={handleToChange}></input>
                    <button className="submit">Submit</button>
                    <button className="cancel">Cancel</button>
                </div>
            </form> :  
                <div>
                {displayWorkExperienceEntries(array)}
                <button className="btn" onClick={HandleClick}>+ add</button>
                </div>}
            
           
        </div>
        
    )
}