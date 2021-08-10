import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";

export default function NavBar({ user, setUser }) {

    function handleLogOut() {
        // Delegate to the userService
        userService.logOut();
        // Update state will cause a re-render
        setUser(null);
    }
    
    return(
        <nav>
            <Link to="/palettes">Palettes</Link> |&nbsp;
            <Link to="/colors">Colors</Link>
            <div>Welcome, {user.name}
            &nbsp;&nbsp;<Link to="" onClick={handleLogOut}>Log Out</Link>
            </div>
        </nav>
    )
}