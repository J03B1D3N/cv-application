export default function displayEducationEntries(arrayOfObjects, state) {
    if(arrayOfObjects == null) return

    function handleMouseOut (e) {
        e.target.parentNode.style.background = "inherit"
    }

    function handleHover(e) {
        e.target.parentNode.style.background = " rgb(160, 157, 157)"
    }

    function deleteEntry(e) {
        const remove = e.target.parentNode
        remove.remove()
    }
    if(state === 'edit') {
        return (
            arrayOfObjects.map((obj) => {
                return (
                <div key={obj.id} className="EducationEntryParent">
                    <div className="EducationEntry">
                        <div><b>{obj.degree === "" ? "N/A" : obj.degree}</b></div>
                        <div>{obj.university === "" ? "N/A" : obj.university}, {obj.city === "" ? "N/A" : obj.city}</div>
                        <div>{obj.from === "" ? "N/A" : obj.from} - {obj.to === "" ? "N/A" : obj.to}</div>
                        <div className="Description">{obj.description === "" ? "N/A" : obj.description}  </div>
                    </div>
                    <button className="deleteEducationEntry" onMouseOver={handleHover} onMouseOut={handleMouseOut} onClick={deleteEntry}></button>
                </div>
                )
            })
        )
    } else return (
        arrayOfObjects.map((obj) => {
            return (
            <div key={obj.id} className="EducationEntryParent">
                <div  className="EducationEntry">
                    <div><b>{obj.degree === "" ? "N/A" : obj.degree}</b></div>
                    <div>{obj.university === "" ? "N/A" : obj.university}, {obj.city === "" ? "N/A" : obj.city}</div>
                    <div>{obj.from === "" ? "N/A" : obj.from} - {obj.to === "" ? "N/A" : obj.to}</div>
                    <div className="Description">{obj.description === "" ? "N/A" : obj.description}  </div>
                </div>
            </div>
            )
        })
        )
    

}