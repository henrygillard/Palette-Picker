import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";
import "./NavBar.css"

export default function NavBar({ user, setUser }) {

    function handleLogOut() {
        // Delegate to the userService
        userService.logOut();
        // Update state will cause a re-render
        setUser(null);
    }
    
    return(
        <nav className="NavBar">
            
            <Link className="Links" to="/palettes">Palettes</Link> 
            <Link className="Links" to="/colors">Colors</Link>
            <div>Welcome, {user.name}</div>
            <Link className="Links" to="" onClick={handleLogOut}>Log Out</Link>
            
            
        </nav>
    )
}