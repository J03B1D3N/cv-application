import React, { useState } from "react"




export default function WorkExperience() {

    const [isOpened, setIsOpened] = useState(false);
      
    function toggle() {
      setIsOpened(wasOpened => !wasOpened);
      console.log(isOpened)
    }

    

    function HandleClick() {

    }


    return (

        <div>
            <form>
                <div className="WorkForm">
                    <input placeholder="Position" id="Position"></input>
                    <input placeholder="Company" id="Company"></input>
                    <input placeholder="City"></input>
                    <input placeholder="From"></input>
                    <input placeholder="To"></input>
                </div>
            </form>
            <button className="btn" onClick={HandleClick}>+ add</button>
        </div>
        
    )
}