import { useState } from "react";
import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";
import "./NavBar.css"

export default function NavBar({ user, setUser, colors, setColors, itemColor, setItemColor }) {
    const [linkColor, setLinkColor] = useState('')

    function handleLogOut() {
        // Delegate to the userService
        userService.logOut();
        // Update state will cause a re-render
        setUser(null);
    }

    function handleChange() {
        if (linkColor !== colors) {
          setLinkColor(colors);
        }
      }
    
    return(
        <nav className="NavBar" onClick={() => setItemColor(colors)} style={{backgroundColor: itemColor}}>
            
            <div onClick={handleChange} style={{backgroundColor: linkColor}} className="NavText" ><Link  className="Links" to="/palettes">Palettes</Link></div> 
            <div className="NavText"><Link className="Links" to="/palettes/new">New Palette</Link></div>
            <div className="NavText">Welcome, {user.name}</div>
            <div className="NavText"><Link className="Links" to="" onClick={handleLogOut}>Log Out</Link></div>
            
            
        </nav>
    )
}