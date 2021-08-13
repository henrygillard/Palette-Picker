import "./ColorsCard.css"

export default function ColorCard({color, colors, setColors, setSelected}) {
    return(
        <div className="color-container">
        <div className={`color-display ${colors === color && 'selected'}`} 
            style={{backgroundColor: `${color}`}} 
            onClick={() => setColors(`${color}`)}>
            {color}</div>
        </div>
    )
}