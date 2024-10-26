import { useState } from "react";

function Login(){
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return(
        <>
        {isLoggedIn} ? {<h1>Login succesful!</h1>} : {<h1>Please login to continue</h1>}
        </>
    )

}
export default Login;
