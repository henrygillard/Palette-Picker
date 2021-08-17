export default function ColorSelector({handleTextCheck, handleBgCheck, handleButtonCheck, handleCardCheck, mainColor, buttonColor, handleHideColor}) {
    return(
        <>
        <div className="input-container">
                    <label> 
                        <button onClick={handleTextCheck} style={{backgroundColor: buttonColor, color: mainColor}}>Set All Text</button> 
                        <span className="checkboxes"></span>
                    </label>
                    <label> 
                        <button onClick={handleBgCheck} style={{backgroundColor: buttonColor, color: mainColor}}>Set Background</button> 
                        <span className="checkboxes"></span>
                    </label>
                    <label> 
                        <button onClick={handleButtonCheck} style={{backgroundColor: buttonColor, color: mainColor}}>Set Buttons</button> 
                        <span className="checkboxes"></span>
                    </label>
                    <label> 
                        <button onClick={handleCardCheck} style={{backgroundColor: buttonColor, color: mainColor}}>Set Cards</button> 
                        <span className="checkboxes"></span>
                    </label>
        </div>
        <button  style={{backgroundColor: buttonColor, color: mainColor}} onClick={handleHideColor}>HIDE</button>
        </>
    )
}