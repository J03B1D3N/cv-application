import React, {useState} from "react"

export default function Adress() {

    let [inputValue, setInputValue] = useState("Adress")

        const [isOpened, setIsOpened] = useState(false);
      
        function toggle() {
          setIsOpened(wasOpened => !wasOpened);
          console.log(isOpened)
        }

    function handleSubmit(e) {
        e.preventDefault()
        toggle()
        return inputValue === "" ? setInputValue('Adress') : setInputValue(inputValue)
    }

    function handleChange(e){
        setInputValue(e.target.value)
    }


    return (
        <div>
            {isOpened && (
                <form onSubmit={handleSubmit}>
                <input autoFocus type="text" value={inputValue} onChange={handleChange} className="firstNameInput" placeholder="First Name"></input>
            </form>
            )}
            {isOpened ? null :  <div className="adress" onClick={toggle}>
            {inputValue}
            </div>}
           
            
            
        </div>
    )

}