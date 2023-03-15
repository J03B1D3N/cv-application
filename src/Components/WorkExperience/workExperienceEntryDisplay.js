import React, {useState} from "react";
import WorkExperience from "./WorkExperience";



export default function displayWorkExperienceEntries(arrayOfObjects) {
    if(arrayOfObjects == null) return

    function handleMouseOut (e) {
        e.target.parentNode.style.background = "inherit"
    }

    function handleHover(e) {
        e.target.parentNode.style.background = " rgb(160, 157, 157)"
    }

    function deleteEntry(e) {
        const remove = e.target.parentNode
        remove.remove()
    }
    
    return (
        arrayOfObjects.map((obj) => {
            return (
            <div className="WorkExperienceEntryParent">
                <div key={obj.id} className="WorkExperienceEntry">
                    <div><b>{obj.position === "" ? "N/A" : obj.position}</b></div>
                    <div>{obj.company === "" ? "N/A" : obj.company}, {obj.city === "" ? "N/A" : obj.city}</div>
                    <div>{obj.from === "" ? "N/A" : obj.from} - {obj.to === "" ? "N/A" : obj.to}</div>
                    <div className="jobDescription">{obj.description === "" ? "N/A" : obj.description}  </div>
                </div>
                <button className="deleteWorkExpEntry" onMouseOver={handleHover} onMouseOut={handleMouseOut} onClick={deleteEntry}></button>
            </div>
            )
        })
    )
    

}