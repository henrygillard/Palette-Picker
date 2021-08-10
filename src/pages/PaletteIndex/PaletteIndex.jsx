import PaletteCard from "../PaletteCard/PaletteCard";
import { useState, useEffect, useRef } from 'react';
import * as palettesAPI from "../../utilities/palettes-api"
import * as colorsAPI from "../../utilities/colors-api"
import NewPaletteForm from "../NewPaletteForm/NewPaletteForm";
import ColorsIndex from "../ColorsIndex/ColorsIndex";

export default function PaletteIndex({user}) {
  const [palettes, setPalettes] = useState([]);
  const [colors, setColors] = useState([]);

  useEffect(function() {
    async function getColors() {
      const colors = await colorsAPI.getAll();
      setColors(colors);
    }
    getColors();
  }, []);
  
  useEffect(function() {
    async function getPalettes() {
      const palettes = await palettesAPI.getAll();
      setPalettes(palettes);
    }
    getPalettes();
  }, []);


  function addPalette(palette) {
    setPalettes([...palettes, palette]);
  }


  

  return (
    <div>
    <h1>Palettes List</h1>
    {palettes.map((p, idx) => 
    <PaletteCard 
    palette={p} 
    key={idx} 
    user={user} 
    />)}
    
    <NewPaletteForm addPalette={addPalette}/>
    
    </div>
  )
}