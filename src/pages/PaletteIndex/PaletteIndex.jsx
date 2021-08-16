import PaletteCard from "../PaletteCard/PaletteCard";
import { useState, useEffect, useRef } from 'react';
import * as palettesAPI from "../../utilities/palettes-api"
import * as colorsAPI from "../../utilities/colors-api"
import NewPaletteForm from "../NewPaletteForm/NewPaletteForm";
import ColorsIndex from "../ColorsIndex/ColorsIndex";
import "./PaletteIndex.css"

export default function PaletteIndex({user, 
  palettes, 
  setPalettes, 
  colors, 
  setColors,
  mainColor,
  setMainColor,
  bgColor,
  setBgColor,
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
    <h1 className="title" >Palettes List</h1>
    <div className="index-container">
    {palettes.map((p, idx) => 
    <PaletteCard 
    className="palette-container"
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