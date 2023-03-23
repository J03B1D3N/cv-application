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

    const handleFocus = (event) => event.target.select();

    return (
        <div>
            {isOpened && (
                <form onSubmit={handleSubmit}>
                <input autoFocus onFocus={handleFocus} type="text" value={inputValue} onBlur={handleSubmit} onChange={handleChange} className="adress input" placeholder="Adress"></input>
            </form>
            )}
            {isOpened ? null :  <div className="adress" onClick={toggle}>
            {inputValue}
            </div>}
           
            
            
        </div>
    )

}