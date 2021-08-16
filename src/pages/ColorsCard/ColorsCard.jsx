import "./ColorsCard.css"

export default function ColorCard({color, 
    colors, 
    setColors, 
    setSelected}) {

    function colorSet() {
        setColors(color)
        setSelected(true)
    }
    return(
        <div className="color-container">
        <div className={`color-display ${colors === color && 'selected'}`} 
            style={{backgroundColor: `${color}`}} 
            onClick={colorSet}>
            {color}</div>
        </div>
    )
}