import ColorsCard from "../ColorsCard/ColorsCard"
import "./PaletteCard.css"
import * as palettesAPI from "../../utilities/palettes-api"
import { useEffect } from "react"
import { useState } from "react"

export default function PaletteCard({selected, 
    setSelected, 
    mainColor, 
    setMainColor, 
    palette, 
    user, 
    bgColor,
    setBgColor,
    setPalettes, 
    colors, 
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
    let updatedPalettes = palette.filter(p => p._id !== palette);
    setPalettes(updatedPalettes)
        
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


    return (
        <>
        <div className="palette-container" onClick={handleCardChange} style={{backgroundColor: itemColor}} >
            
            <div>
                <h1 className={colorSelector ? "selected": "palette-name"}onClick={handleShowColor} >{palette.name}</h1>
                { user._id === palette.user ? 
                <div >
                    <form onSubmit={handleDelete} className="delete-form">
                        <button className="delete-button">DELETE PALETTE</button>
                    </form>
                    <h3>Created by: {palette.user}</h3>
                </div>
                : 
                <h3>Created by: {palette.user}</h3>
                }
            </div>
            { colorSelector ?
            <div>
                <h1>{paletteColors}</h1>
                <div className="input-container">
                    <label> Set All Text
                        <input type="checkbox" onClick={handleTextCheck}/> 
                        <span className="checkboxes"></span>
                    </label>
                    <label> Set Background
                        <input  type="checkbox" onClick={handleBgCheck}/> 
                        <span className="checkboxes"></span>
                    </label>
                </div>
                <button onClick={handleHideColor}>HIDE</button>
            </div>
           :
           <p>Select palette to view</p> 
        }
        </div>
        </>
    )
}