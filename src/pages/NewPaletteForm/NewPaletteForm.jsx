import { useState } from "react";


export default function NewPaletteForm({addPalette}) {

    const [formData, setFormData] = useState({
        name: '',
        colors: []
    });

    function addNewPalette(evt) {
        evt.preventDefault();
        addPalette(formData)
        setFormData({
            name: '',
            colors: []
        })

    }

    function handleChange(evt) {
        const newFormData = { ...formData, [evt.target.name]: evt.target.value };
        setFormData(newFormData);
      }

    return (
        <div>
        <h1>Enter New Palette</h1>
        <form onSubmit={addNewPalette} >
      <label>
        Palette
        <input
          name="name"
          value={formData.name}
          className="input"
          required
          onChange={handleChange}
        ></input>
      </label>
      <button type="submit" className="button">
        ADD PALETTE
      </button>
      </form>
        </div>
    )
}