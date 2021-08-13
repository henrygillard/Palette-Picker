import "./ColorsCard.css"

export default function ColorCard({color, colors, setColors}) {
    return(
        <div className="color-container">
        <li style={{backgroundColor: `${color}`}} onClick={() => setColors(`${color}`)}>{color}</li>
        </div>
    )
}