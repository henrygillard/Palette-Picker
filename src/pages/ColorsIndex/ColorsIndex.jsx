import {useState, useEffect} from "react";
import * as colorsAPI from "../../utilities/colors-api";

export default function ColorsIndex() {

    const [colors, setColors] = useState([]);

    useEffect(function() {
        async function getColors() {
          const colors = await colorsAPI.getAll();
          setColors(colors);
        }
        getColors();
      }, []);


    return(
        <>
        <h1>All Colors</h1>
    {colors.map((c) => <li>{c.name}</li>)}
    </>
    )
} 