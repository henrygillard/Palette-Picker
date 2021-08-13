import PaletteCard from "../PaletteCard/PaletteCard";
import { useState, useEffect, useRef } from 'react';
import * as palettesAPI from "../../utilities/palettes-api"
import * as colorsAPI from "../../utilities/colors-api"
import NewPaletteForm from "../NewPaletteForm/NewPaletteForm";
import ColorsIndex from "../ColorsIndex/ColorsIndex";
import "./PaletteIndex.css"

export default function PaletteIndex({user}) {
  const [palettes, setPalettes] = useState([]);
  const [colors, setColors] = useState('');
 


  
  useEffect(function() {
    async function getPalettes() {
      const palettes = await palettesAPI.getAll();
      setPalettes(palettes);
    }
    getPalettes();
  }, []);

 

  return (
    <>
    <h1>Palettes List</h1>
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