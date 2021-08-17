import {useState} from "react";
import {useHistory} from "react-router-dom";
import "./NewPaletteForm.css"
import * as paletteAPI from "../../utilities/palettes-api"

export default function NewPaletteForm() {

    const [paletteData, setPaletteData] = useState({
        name: '',
        color1: '',
        color2: '',
        color3: '',
        color4: '',
        color5: '',
    })

    const history = useHistory();

    async function handleSubmit(evt) {
        evt.preventDefault();
        await paletteAPI.create(paletteData);
        history.push('/palettes')
    }


    function handleChange(evt) {
        const newFormData = { ...paletteData, [evt.target.name]: evt.target.value };
        setPaletteData(newFormData);
      }

    return (
      <>
        <h1>Enter New Palette</h1>
        <div className="new-palette-form">
          <form onSubmit={handleSubmit} >
            <div className="name-input">
              Palette Name:
              <input
                name="name"
                value={paletteData.name}
                required
                onChange={handleChange}
              />
            </div>
            <div className="color-submit">
              Color 1:
              <input
                type="color"
                  name="color1"
                  value={paletteData.color1}
                  className="color-input"
                  required
                  onChange={handleChange}
              />
              Color 2:
              <input
                type="color"
                  name="color2"
                  value={paletteData.color2}
                  className="color-input"
                  required
                  onChange={handleChange}
              />
              Color 3:
              <input
                type="color"
                name="color3"
                value={paletteData.color3}
                className="color-input"
                onChange={handleChange}
              />
              Color 4:
              <input
                type="color"
                name="color4"
                value={paletteData.color4}
                className="color-input"
                onChange={handleChange}
              />
              Color 5:
              <input
                type="color"
                name="color5"
                value={paletteData.color5}
                className="color-input"
                onChange={handleChange}
                />
            </div>
            <button type="submit" >
            ADD PALETTE
            </button>
          </form>
        </div>
      </>
    )
}