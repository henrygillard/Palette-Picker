import {useState, useEffect} from "react";
import * as colorsAPI from "../../utilities/colors-api";
import NewColorForm from "../NewColorForm/NewColorForm";


export default function ColorsIndex() {

    const [colors, setColors] = useState([]);

    useEffect(function() {
        async function getColors() {
          const colors = await colorsAPI.create();
          setColors(colors);
        }
        getColors();
      }, []);


    return(
        <>
        <h1>All Colors</h1>
    {colors.map((c) => <li>{c.name}</li>)}
    <NewColorForm colors={colors} setColors={setColors}/>
    </>
    )
} 