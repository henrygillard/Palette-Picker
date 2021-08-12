import ColorsCard from "../ColorsCard/ColorsCard"
import "./PaletteCard.css"
import * as palettesAPI from "../../utilities/palettes-api"
import { useEffect } from "react"

export default function PaletteCard({palette, user, setPalettes}) {

const paletteColors = palette.colors.map((c, idx) => <ColorsCard color={c} key={idx}/>)


    async function handleDelete(evt) {
        evt.preventDefault();
        await palettesAPI.deletePalette(palette);
        
}



    return (
        <>
        <div className="palette-container">
         <h1>{palette.name}</h1>
         { user._id === palette.user ? 
         <form onSubmit={handleDelete} className="delete-button">
         <button >DELETE PALETTE</button>
         </form>
          : 
          <h3>Created by: {user.name}</h3>
        }
        <h1>{paletteColors}</h1>
        </div>
        </>
    )
}