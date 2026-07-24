import { useState } from "react";

import {
    createUserWithEmailAndPassword,
} from "firebase/auth";

import { auth } from "../firebase/firebase";

function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignup = async () => {
        try {
            await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );

            alert("Account Created");
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <div className="auth-card">
            <h1>Create Account</h1>

            <input
                type="email"
                placeholder="Enter Email"
                onChange={(e) => setEmail(e.target.value)}
            />

            <input
                type="password"
                placeholder="Enter Password"
                onChange={(e) => setPassword(e.target.value)}
            />

            <button onClick={handleSignup}>
                Sign Up
            </button>
        </div>
    );
}

export default Signup;