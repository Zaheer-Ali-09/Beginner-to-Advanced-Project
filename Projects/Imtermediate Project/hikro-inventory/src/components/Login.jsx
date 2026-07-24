import  { useState } from "react";

import {
    signInWithEmailAndPassword,
    signInWithPopup,
} from "firebase/auth";

import {
    auth,
    googleProvider,
} from "../firebase/firebase";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        try {
            await signInWithEmailAndPassword(
                auth,
                email,
                password
            );

            alert("Login Success");
        } catch (error) {
            alert(error.message);
        }
    };

    const googleLogin = async () => {
        try {
            await signInWithPopup(
                auth,
                googleProvider
            );

            alert("Google Login Success");
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <div className="auth-card">
            <h1>Welcome Back</h1>

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

            <button onClick={handleLogin}>
                Sign In
            </button>

            <button
                className="google-btn"
                onClick={googleLogin}
            >
                Continue With Google
            </button>
        </div>
    );
}

export default Login;