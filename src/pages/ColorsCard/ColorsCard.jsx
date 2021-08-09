export default function ColorCard({color}) {
    return(
        <li style={{backgroundColor: `${color.code}`}}>{color.name}</li>
    )
}