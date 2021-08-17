import PaletteCard from "../PaletteCard/PaletteCard";
import { useEffect} from 'react';
import * as palettesAPI from "../../utilities/palettes-api"
import "./PaletteIndex.css"
import {Link} from "react-router-dom"

export default function PaletteIndex({user, 
  palettes, 
  setPalettes, 
  colors, 
  setColors,
  mainColor,
  setMainColor,
  bgColor,
  setBgColor,
  buttonColor,
  setButtonColor,
  selected,
  setSelected,}) 
{
  
  
  useEffect(function() {
    async function getPalettes() {
      const palettes = await palettesAPI.getAll();
      setPalettes(palettes);
    }
    getPalettes();
  }, []);

  

 

  return (
    <>
      <div className="header">
        <Link to="/palettes"><h1>Palettes |</h1></Link>
        <Link to="/colors"><h1>| Color List</h1></Link>
      </div>
      <div className="index-container">
        {palettes.map((p, idx) => 
        <PaletteCard 
        className="palette-container"
        buttonColor={buttonColor}
        setButtonColor={setButtonColor}
        bgColor={bgColor}
        setBgColor={setBgColor}
        mainColor={mainColor}
        setMainColor={setMainColor}
        colors={colors}
        setColors={setColors}
        palettes={palettes}
        palette={p} 
        key={idx} 
        user={user} 
        setPalettes={setPalettes}
        selected={selected}
        setSelected={setSelected}
        />)}
      </div>
    </>
  )
}