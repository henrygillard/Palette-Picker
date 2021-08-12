import ColorsCard from "../ColorsCard/ColorsCard"
import "./PaletteCard.css"
import * as palettesAPI from "../../utilities/palettes-api"
import { useEffect } from "react"
import { useState } from "react"

export default function PaletteCard({palette, 
    user, 
    setPalettes, }) {

const [selected, setSelected] = useState(false);

const paletteColors = palette.colors.map((c, idx) => <ColorsCard color={c} key={idx}/>)


async function handleDelete(evt) {
    evt.preventDefault();
    await palettesAPI.deletePalette(palette);
        
}

async function handleShowColor(evt) {
    evt.preventDefault();
    await setSelected(true)
}

async function handleHideColor(evt) {
    evt.preventDefault();
    await setSelected(false)
}


    return (
        <>
        <div className="palette-container">
            <div>
                <h1 className={selected ? "selected": "palette-name"}onClick={handleShowColor}>{palette.name}</h1>
                { user._id === palette.user ? 
                <div>
                    <form onSubmit={handleDelete} className="delete-button">
                    <button >DELETE PALETTE</button>
                    </form>
                    <h3>Created by: {user.name}</h3>
                    
                </div>
                : 
                <h3>Created by: Not you</h3>
                }
            </div>
            { selected ?
            <div>
            <h1>{paletteColors}</h1>
            <button onClick={handleHideColor}>HIDE</button>
            </div>
           :
           <p>nothing to see here</p> 
        }
        </div>
        </>
    )
}