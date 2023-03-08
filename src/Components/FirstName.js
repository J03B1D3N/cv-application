import React, {useState} from "react"

export default function FirstName() {

    let [inputValue, setInputValue] = useState("First Name")

        const [isOpened, setIsOpened] = useState(false);
      
        function toggle() {
          setIsOpened(wasOpened => !wasOpened);
          console.log(isOpened)
        }

    function handleSubmit(e) {
        e.preventDefault()
        toggle()
        return inputValue === "" ? setInputValue('First Name') : setInputValue(inputValue)
    }

    function handleChange(e){
        setInputValue(e.target.value)
    }


    return (
        <div>
            {isOpened && (
                <form onSubmit={handleSubmit}>
                <input type="text" value={inputValue} onChange={handleChange} className="firstNameInput" placeholder="First Name"></input>
            </form>
            )}
            {isOpened ? null :  <div className="firstName" onClick={toggle}>
            {inputValue}
            </div>}
           
            
            
        </div>
    )

}