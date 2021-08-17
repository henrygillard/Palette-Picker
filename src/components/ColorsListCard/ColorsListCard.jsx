
import "./ColorsListCard.css"
import ColorSelector from "../ColorSelector/ColorSelector";
import { useState } from "react";

export default function ColorsListCard({c, colors, mainColor, setBgColor, setButtonColor, setCardColor, setColors, setMainColor, selected, setSelected}) {

    
    

    function selector() {
        setSelected(true);
        setColors(c.code.toString())
    }

    return (
        <div >
            <div style={{backgroundColor: `${c.code}`}} className="container" onClick={selector}>{c.name}
        </div>
        {selected ?
       
        <div><ColorSelector colors={colors} setMainColor={setMainColor} setCardColor={setCardColor} setButtonColor={setButtonColor} mainColor={mainColor} setBgColor={setBgColor} selected={selected} setSelected={setSelected}/></div>
        :
        <p>test</p>
        }
        
        </div>
    )
}