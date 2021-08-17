import { useState } from "react";
import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";
import "./NavBar.css"

export default function NavBar({ selected, setSelected, user, setUser, colors, setColors, itemColor, setItemColor }) {
    const [linkColor, setLinkColor] = useState('')

    function handleLogOut() {
        // Delegate to the userService
        userService.logOut();
        // Update state will cause a re-render
        setUser(null);
    }

    function handleHeaderChange() {
        if (itemColor === colors) {
          setColors('')
        } else {
            setItemColor(colors);
            setSelected(true);
        }

        
      }
    
    return(
        <nav className="NavBar" onClick={handleHeaderChange} style={{backgroundColor: itemColor}}>
            
            <div style={{backgroundColor: linkColor}} className="NavText" ><img src="https://i.imgur.com/oUtnhBS.png"></img><Link  className="Links" to="/palettes"></Link></div> 
            <div className="NavText"><Link className="Links" to="/palettes/new">New Palette</Link></div>
            <div className="NavText">Welcome, {user.name}</div>
            <div className="NavText"><Link className="Links" to="" onClick={handleLogOut}>Log Out</Link></div>
            
            
        </nav>
    )
}