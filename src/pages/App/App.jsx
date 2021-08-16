import { useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import PaletteIndex from '../PaletteIndex/PaletteIndex';
import NavBar from '../../components/NavBar/NavBar';
import ColorsIndex from '../ColorsIndex/ColorsIndex';
import NewPaletteForm from '../NewPaletteForm/NewPaletteForm';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [itemColor, setItemColor] = useState('');
  const [palettes, setPalettes] = useState([]);
  const [colors, setColors] = useState('');
  const [mainColor, setMainColor] = useState('')

  

  return (
    <main className="App">
      { user ?
        <>
          <NavBar user={user} setUser={setUser} itemColor={itemColor} setItemColor={setItemColor} colors={colors} setColors={setColors}/>
          <Switch>
            <Route exact path="/palettes">
              <div onClick={() => setMainColor(colors)} style={{backgroundColor: mainColor}}>
              <PaletteIndex user={user} 
              palettes={palettes}
              setPalettes={setPalettes}
              colors={colors}
              setColors={setColors}/></div>
            </Route>
            <Route exact path="/palettes/new">
              <NewPaletteForm />
            </Route>
            <Route exact path="/colors">
              <ColorsIndex user={user}/>
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