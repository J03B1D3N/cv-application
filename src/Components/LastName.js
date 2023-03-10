import React, {useState} from "react"

export default function LastName() {

    let [inputValue, setInputValue] = useState("Last Name")

        const [isOpened, setIsOpened] = useState(false);
      
        function toggle() {
          setIsOpened(wasOpened => !wasOpened);
          console.log(isOpened)
        }

    function handleSubmit(e) {
        e.preventDefault()
        toggle()
        return inputValue === "" ? setInputValue('Last Name') : setInputValue(inputValue)
    }

    function handleChange(e){
        setInputValue(e.target.value)
    }


    return (
        <div>
            {isOpened && (
                <form onSubmit={handleSubmit}>
                <input autoFocus type="text" value={inputValue} onChange={handleChange} className="name" placeholder="First Name"></input>
            </form>
            )}
            {isOpened ? null :  <div className="name" onClick={toggle}>
            {inputValue}
            </div>}
           
            
            
        </div>
    )

}