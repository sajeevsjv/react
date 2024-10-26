import { Link } from "react-router-dom";
function Nav() {
    return (
        <>
            <nav>
                <ul>
                    <li><Link to={'/home'} style={{ color: "red", textDecoration: "none" }}>Home</Link></li>
                    <li><Link to={'/about'} style={{ color: "red", textDecoration: "none" }}>About</Link></li>
                </ul>
            </nav>
        </>
    )
}
export default Nav;