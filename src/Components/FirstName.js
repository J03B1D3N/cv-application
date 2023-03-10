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
    const handleFocus = (event) => event.target.select();

    return (
        <div>
            {isOpened && (
                <form onSubmit={handleSubmit}>
                <input autoFocus onFocus={handleFocus} type="text" value={inputValue} onChange={handleChange} className="name input" placeholder="First Name"></input>
            </form>
            )}
            {isOpened ? null :  <div className="name" onClick={toggle}>
            {inputValue}
            </div>}
           
            
            
        </div>
    )

}