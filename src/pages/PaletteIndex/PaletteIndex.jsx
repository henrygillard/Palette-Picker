import PaletteCard from "../PaletteCard/PaletteCard";
import { useState, useEffect, useRef } from 'react';
import * as palettesAPI from "../../utilities/palettes-api"
import * as colorsAPI from "../../utilities/colors-api"
import NewPaletteForm from "../NewPaletteForm/NewPaletteForm";
import ColorsIndex from "../ColorsIndex/ColorsIndex";
import "./PaletteIndex.css"

export default function PaletteIndex({user, palettes, setPalettes, colors, setColors}) {
  
  const [headerColor, setHeaderColor] = useState('');
 


  
  useEffect(function() {
    async function getPalettes() {
      const palettes = await palettesAPI.getAll();
      setPalettes(palettes);
    }
    getPalettes();
  }, []);

 

  return (
    <>
    <h1 onClick={() => setHeaderColor(colors)} style={{color: headerColor}}>Palettes List</h1>
    <div className="index-container">
    {palettes.map((p, idx) => 
    <PaletteCard 
    colors={colors}
    setColors={setColors}
    palettes={palettes}
    className="palette-container"
    palette={p} 
    key={idx} 
    user={user} 
    setPalettes={setPalettes}
    
    />)}
    
    </div>
    </>
  )
}