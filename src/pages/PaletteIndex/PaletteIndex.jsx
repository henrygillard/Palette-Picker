import PaletteCard from "../PaletteCard/PaletteCard";
import { useState, useEffect, useRef } from 'react';
import * as palettesAPI from "../../utilities/palettes-api"

export default function PaletteIndex({user}) {
  const [palettes, setPalettes] = useState([]);
  
  useEffect(function() {
    async function getPalettes() {
      const palettes = await palettesAPI.getAll();
      setPalettes(palettes);
    }
    getPalettes();
  }, [])


  

  return (
    <div>
    <h1>Palettes List</h1>
    {palettes.map((p, idx) => <PaletteCard palette={p} key={idx} user={user}/>)}
    </div>
  )
}