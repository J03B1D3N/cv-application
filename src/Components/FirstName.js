import React, {useState} from "react"

export default function FirstName() {

    let {inputValue, changeInputValue} = useState()



    function handleChange(e){
        changeInputValue(inputValue)
    }


    return (
        <div>
            <form>
                <input type="text" value={inputValue} onChange={handleChange} className="firstNameInput" display='none'></input>
            </form>
            <div className="firstName">
                First Name
            </div>
        </div>
    )

}