import React, {useState} from "react";
import WorkExperience from "./WorkExperience";



export default function displayWorkExperienceEntries(arrayOfObjects) {
    if(arrayOfObjects == null) return
    
    return (
        arrayOfObjects.map((obj) => {
            return (
            <div key={obj.id} className="WorkExperienceEntry">
                <div><b>{obj.position === "" ? "N/A" : obj.position}</b></div>
                <div>{obj.company === "" ? "N/A" : obj.company}, {obj.city === "" ? "N/A" : obj.city}</div>
                <div>{obj.from === "" ? "N/A" : obj.from} - {obj.to === "" ? "N/A" : obj.to}</div>
            </div>
            )
        })
    )
    

}