import {useState, useEffect} from "react";
import {Link} from "react-router-dom"
import * as colorsAPI from "../../utilities/colors-api";
import NewColorForm from "../NewColorForm/NewColorForm";
import "./ColorsIndex.css";
import ColorsIndexList from "../ColorsIndexList/ColorsIndexList"


export default function ColorsIndex({colorsList, setColorsList}) {
  
  useEffect(function() {
    async function getColors() {
      const colors = await colorsAPI.getAll();
      setColorsList(colors);
    }
    getColors();
  }, []);

    return(
        <>
        <div className="header">
        <Link to="/palettes"><h1>Palettes</h1></Link>
        <Link to="/colors"><h1>Color List</h1></Link>
      </div>
    <div className="container">
     {colorsList.map((c, idx) => <div style={{backgroundColor: `${c.code}`}} className="colors-list">{c.name}</div>)}
     </div>
    </>
    )
} 