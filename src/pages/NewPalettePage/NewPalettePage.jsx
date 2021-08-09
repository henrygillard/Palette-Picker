import PaletteCard from "../PaletteCard/PaletteCard";
import { useState, useEffect } from 'react';
import * as colorsAPI from "../../utilities/colors-api"

export default function NewPalettePage() {
  const [colors, setColors] = useState([]);
  useEffect(function() {
    async function getColors() {
      const colors = await colorsAPI.getAll();
      setColors(colors);
    }
    getColors();
  }, []);

  return (
    <div>
    <h1>Palette List</h1>
    <button onClick={setColors}>Trigger re-render</button>
    <PaletteCard />
    </div>
  );
}