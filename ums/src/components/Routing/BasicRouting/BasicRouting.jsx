import Home from "./Home";
import About from "./about";

import "./BasicRouting.css"


import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";

function BasicRouting() {

    return (
        <>
            <Router>
                <nav>
                    <ul>
                        <li><Link to={'/home'} style={{ color: "red", textDecoration: "none" }}>Home</Link></li>
                        <li><Link to={'/about'} style={{ color: "red", textDecoration: "none" }}>About</Link></li>
                    </ul>
                </nav>

                <section>
                    <Routes>
                        <Route path={'/home'} exact element={<Home />} />
                        <Route path={'/about'} exact element={<About />} />
                    </Routes>
                </section>
            </Router>
        </>
    )

}
export default BasicRouting;