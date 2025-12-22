import { useState } from "react";

function Login() {
    const [username,setUsername] = useState ("") ;
    const [ password,setPassword] = useState ("");


function handleSubmit (e) {
    e.preventDefault();

    console.log("Username:", username) ;
    console.log ("Password:", password);

}
return (
    <div>
        <h2>Login</h2>
<form onSubmit={handleSubmit}>
    <div>
        <label>Username</label><br/>
        <input
        type="text"
value={username}
onChange={(e) => setUsername(e.target.value)}
/>
</div>


<div>
<label>Password</label><br />
<input
type="password"
value={password}
onChange={(e) => setPassword(e.target.value)}

/>

</div>

<button type="Submit">Login</button>
</form>
</div>
)
}

export default Login; 