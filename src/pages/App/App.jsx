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

  return (
    <main className="App">
      { user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Switch>
            <Route exact path="/palettes">
              <PaletteIndex user={user}/>
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