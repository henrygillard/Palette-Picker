import { useState, useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import PaletteIndex from '../PaletteIndex/PaletteIndex';
import NavBar from '../../components/NavBar/NavBar';
import ColorsIndex from '../ColorsIndex/ColorsIndex';
import NewPaletteForm from '../NewPaletteForm/NewPaletteForm';
import * as colorsAPI from "../../utilities/colors-api"

export default function App() {
  const [selected, setSelected] = useState(false)
  const [user, setUser] = useState(getUser());
  const [itemColor, setItemColor] = useState('');
  const [palettes, setPalettes] = useState([]);
  const [colors, setColors] = useState('');
  const [colorsList, setColorsList] = useState([]);
  const [mainColor, setMainColor] = useState('')
  const [bgColor, setBgColor] = useState('');
  const [buttonColor, setButtonColor] = useState('');
  const [cardColor, setCardColor] = useState('');

  


  function handleChange() {
    if (colors !== '') {
      setSelected(true)
    }
  }

  return (
    <main className="App" style={{color: mainColor, backgroundColor: bgColor}}>
      { user ?
        <>
          <NavBar user={user} 
          setUser={setUser} 
          itemColor={itemColor} 
          setItemColor={setItemColor} 
          colors={colors} 
          setColors={setColors}
          selected={selected}
          setSelected={setSelected}/>
          <Switch>
            <Route exact path="/palettes">
              <PaletteIndex user={user} 
              selected={selected}
              setSelected={setSelected}
              palettes={palettes}
              setPalettes={setPalettes}
              colors={colors}
              setColors={setColors}
              cardColor={cardColor}
              setCardColor={setCardColor}
              buttonColor={buttonColor}
              setButtonColor={setButtonColor}
              bgColor={bgColor}
              setBgColor={setBgColor}
              mainColor={mainColor}
              setMainColor={setMainColor}/>
            </Route>
            <Route exact path="/palettes/new">
              <NewPaletteForm cardColor={cardColor}/>
            </Route>
            <Route exact path="/colors">
              <ColorsIndex user={user} colorsList={colorsList} setColorsList={setColorsList}/>
            </Route>
            <Redirect to="/palettes" />
          </Switch>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}