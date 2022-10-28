import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import auth from "../firebase/firebase.init";


const Home = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [user, setUser] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        createUserWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                // Signed in 
                const user = userCredential.user;
                 console.log(user)
              


            })
            .catch(error => {
                console.log(error.message)
            })

    }

    return (
        <div  >
            <form onSubmit={handleSubmit} >

                <input type="text" name="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="email" />
                <input name="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}

                    type='password' placeholder="password" />
                <button type="submit">Register</button>

            </form>
        </div>
    );
};

export default Home;