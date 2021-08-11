import "./ColorsCard.css"

export default function ColorCard({color}) {
    return(
        <div className="color-container">
        <li style={{backgroundColor: `${color}`}}>{color}</li>
        </div>
    )
}