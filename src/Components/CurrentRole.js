import React, {useState} from "react"

export default function CurrentRole() {

    let [inputValue, setInputValue] = useState("Current Role")

        const [isOpened, setIsOpened] = useState(false);
      
        function toggle() {
          setIsOpened(wasOpened => !wasOpened);
          console.log(isOpened)
        }

    function handleSubmit(e) {
        e.preventDefault()
        toggle()
        return inputValue === "" ? setInputValue('Current Role') : setInputValue(inputValue)
    }

    function handleChange(e){
        setInputValue(e.target.value)
    }
    const handleFocus = (event) => event.target.select();

    return (
        <div>
            {isOpened && (
                <form onSubmit={handleSubmit}>
                <input autoFocus onFocus={handleFocus} type="text" value={inputValue} onChange={handleChange} className="currentRoleInput input" placeholder="Current Role"></input>
            </form>
            )}
            {isOpened ? null :  <div className="currentRole" onClick={toggle}>
            {inputValue}
            </div>}
           
            
            
        </div>
    )

}