import Home from "./Home";
import About from "./About";
import Nav from "./Nav";

import "./BasicRouting.css"


import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";

function BasicRouting() {

    return (
        <>
            <Router>
                <Routes>
                    <Route path={"/"} exact element={<Nav />} />
                    <Route path={'/home'} exact element={<Home />} />
                    <Route path={'/about'} exact element={<About />} />
                </Routes>
            </Router>
        </>
    )

}
export default BasicRouting;