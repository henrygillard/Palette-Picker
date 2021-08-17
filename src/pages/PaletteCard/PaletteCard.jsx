import ColorsCard from "../ColorsCard/ColorsCard"
import "./PaletteCard.css"
import * as palettesAPI from "../../utilities/palettes-api"
import { useEffect } from "react"
import { useState } from "react"

export default function PaletteCard({selected, 
    setSelected, 
    cardColor,
    setCardColor,
    mainColor,
    setMainColor, 
    palette, 
    user, 
    setBgColor,
    buttonColor,
    setButtonColor,
    setPalettes, 
    colors, 
    palettes,
    setColors}) {

const [colorSelector, setColorSelector] = useState(false);
const [itemColor, setItemColor] = useState('');

const paletteColors = palette.colors.map((c, idx) => <ColorsCard color={c} 
key={idx} 
colors={colors}
setColors={setColors} 
setSelected={setSelected}/>)


async function handleDelete(evt) {
    evt.preventDefault();
    await palettesAPI.deletePalette(palette);
    setPalettes(palettes)
    console.log(palettes)
        
}

function handleTextCheck() {
    if (selected) {
        setMainColor(colors);
    } else {
        setSelected(true);
    }
}

function handleBgCheck() {
    if (selected) {
        setBgColor(colors);
    } else {
        setSelected(true);
    }
}

function handleCardCheck() {
    if (selected) {
        setCardColor(colors);
    } else {
        setSelected(true);
    }
}

function handleButtonCheck() {
    if (selected) {
        setButtonColor(colors);
    } else {
        setSelected(true);
    }
}

function handleCardChange() {
    if (colorSelector === true && itemColor !== colors) {
      setColors('')
    } else {
        setItemColor(colors);
    }
  }

async function handleShowColor(evt) {
    evt.preventDefault();
    await setColorSelector(true)
}

async function handleHideColor(evt) {
    evt.preventDefault();
    await setColorSelector(false)
}

function handleRefresh() {
    window.location.reload(false);
}


    return (
        <>
        <div className="palette-container" style={{backgroundColor: cardColor}} >
            <div>
                <h1 className={colorSelector ? "selected": "palette-name"}onClick={handleShowColor} >{palette.name}</h1>
                { user._id === palette.user._id ? 
                <div >
                    <form onSubmit={handleDelete} className="delete-form">
                        <button style={{backgroundColor: buttonColor, color: mainColor}} className="delete-button" onClick={handleRefresh}>DELETE PALETTE</button>
                    </form>
                    <h3>Created by: {palette.user.name}</h3>
                </div>
                : 
                <h3>Created by: {palette.user.name}</h3>
                }
            </div>
            { colorSelector ?
            <div>
                <p><span>Select a color, then set it's canvas!</span></p>
                <h1>{paletteColors}</h1>
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
            </div>
           :
           <p>Select palette to view</p> 
        }
        </div>
        </>
    )
}