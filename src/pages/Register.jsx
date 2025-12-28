import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../services/api";


function Register () {
    const [ username, setUsername] = useState ("");
    const [email ,  setEmail] = useState("");
    const [password, setPassword] = useState ("");
    const [ avatar, setAvatar] = useState ("");

function handleSubmit( e ) {
    e.preventDefault();

    console.log("Username:",username);
    console.log("Email:",email) ;
    console.log("Password:",password);
    console.log("Avatar:",avatar);
}

return(
    <div>
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
            <div> 
                <label>Username</label><br />
                <input
                type="text"
                value={username}
                onChange={( e ) => setUsername (e.target.value) }
                />
                
    </div>

    <div>
        <label>Password</label><br />
        <input
        type="password"
        value={password}
        onChange={( e ) => setPassword(e.target.value) }
        />
        </div>

        <div>
            <label>Avatar URL</label>< br />
            <input
            type="text"
            value={avatar}
            onChange={( e ) => setAvatar(e.target.value)}
            placeholder="https://i.pravatar.cc/200" // Enl uppgiften//
            />

   
              </div>

              <button type="submit">Register</button>


        </form>
    </div>
) ;
}
export default Register; 