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

    const handleFocus = (event) => event.target.select();

    return (
        <div>
            {isOpened && (
                <form onSubmit={handleSubmit}>
                <input autoFocus onFocus={handleFocus} type="text" value={inputValue} onBlur={handleSubmit} onChange={handleChange} className="name input" placeholder="Last Name"></input>
            </form>
            )}
            {isOpened ? null :  <div className="name" onClick={toggle}>
            {inputValue}
            </div>}
           
            
            
        </div>
    )

}