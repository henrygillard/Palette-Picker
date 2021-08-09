import ColorsCard from "../ColorsCard/ColorsCard"
import "./PaletteCard.css"

export default function PaletteCard({palette, user}) {
const colors = palette.colors.map((c) => <ColorsCard color={c}/>)
    return (
        <div className="palette-container">
         <h1>{palette.name}</h1>
         <h3>Created by: {user.name}</h3>
         <h1>{colors}</h1>
        </div>
    )
}