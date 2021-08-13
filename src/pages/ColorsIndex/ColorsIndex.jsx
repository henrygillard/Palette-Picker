import {useState, useEffect} from "react";
import * as palettesAPI from "../../utilities/palettes-api";
import NewColorForm from "../NewColorForm/NewColorForm";
import "./ColorsIndex.css";
import ColorsIndexList from "../ColorsIndexList/ColorsIndexList"


export default function ColorsIndex() {

    const [palettes, setPalettes] = useState([]);

    useEffect(function() {
        async function getPalettes() {
          const palettes = await palettesAPI.getAll();
          setPalettes(palettes);
        }
        getPalettes();
      }, []);

      const colorsArr = palettes.map((c) => <ColorsIndexList color={c}/>)


    return(
        <>
        <h1>All Colors</h1>
    <ul>
      {colorsArr}
    </ul>
    </>
    )
} 