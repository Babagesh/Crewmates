import { Link } from "react-router";


const Navigation = () => {
    return (
        <div className = "navigation-bar">
            <Link to='/'> <p>Home</p> </ Link>
            <Link to='/create'> <p>Create a crewmate</p> </ Link>
            <Link to='/gallery'> <p>Crewmate Gallery</p> </ Link>
        </div>
    )
}

export default Navigation;