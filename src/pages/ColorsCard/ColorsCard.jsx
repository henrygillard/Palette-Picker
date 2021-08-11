export default function ColorCard({color}) {
    return(
        <li style={{backgroundColor: `${color}`}}>{color}</li>
    )
}