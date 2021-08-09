import ColorsCard from "../ColorsCard/ColorsCard"
import "./PaletteCard.css"

export default function PaletteCard({palette}) {
const colors = palette.colors.map((c) => <ColorsCard color={c}/>)
    return (
        <div className="palette-container">
         <h1>{palette.name}</h1>
         <h1>{palette.user}</h1>
         <h1>{colors}</h1>
        </div>
    )
}