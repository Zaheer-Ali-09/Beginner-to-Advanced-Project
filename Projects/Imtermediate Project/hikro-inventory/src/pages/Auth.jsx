import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

import { auth } from "../firebase/firebase";

import { FaEye, FaEyeSlash } from "react-icons/fa";

function Auth() {
  const [isLogin, setIsLogin] = useState(true);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPass, setShowPass] = useState(false);

  // PASSWORD STRENGTH
  const getStrength = (pass) => {
    let score = 0;
    if (pass.length >= 8) score++;
    if (/[A-Z]/.test(pass)) score++;
    if (/[a-z]/.test(pass)) score++;
    if (/[0-9]/.test(pass)) score++;
    return score;
  };

  const strength = getStrength(password);

  // SIGNUP
  const handleSignup = async () => {
    if (password !== confirmPassword) {
      alert("Passwords not match");
      return;
    }

    const userCred = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    // save name in firebase profile
    await updateProfile(userCred.user, {
      displayName: name,
    });

    alert("Account Created");
  };

  // LOGIN
  const handleLogin = async () => {
    await signInWithEmailAndPassword(auth, email, password);
    alert("Login Success");
  };

  return (
    <div className="auth-bg">

      <div className="auth-card">

        <h2>{isLogin ? "Login Account" : "Create Account"}</h2>

        {/* NAME (only signup) */}
        {!isLogin && (
          <input
            type="text"
            placeholder="Enter Name"
            onChange={(e) => setName(e.target.value)}
          />
        )}

        {/* EMAIL */}
        <input
          type="email"
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* PASSWORD */}
        <div className="pass-box">
          <input
            type={showPass ? "text" : "password"}
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <span onClick={() => setShowPass(!showPass)}>
            {showPass ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        {/* CONFIRM PASSWORD */}
        {!isLogin && (
          <input
            type={showPass ? "text" : "password"}
            placeholder="Confirm Password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        )}

        {/* PASSWORD STRENGTH */}
        {!isLogin && (
          <div className="strength">
            <div
              className={
                strength === 1
                  ? "red"
                  : strength === 2
                  ? "orange"
                  : strength >= 3
                  ? "green"
                  : ""
              }
            ></div>

            <small>
              {strength === 0 && "Weak"}
              {strength === 1 && "Weak"}
              {strength === 2 && "Medium"}
              {strength >= 3 && "Strong"}
            </small>
          </div>
        )}

        {/* BUTTON */}
        {isLogin ? (
          <button onClick={handleLogin}>Login</button>
        ) : (
          <button onClick={handleSignup}>Create Account</button>
        )}

        {/* SWITCH */}
        <p onClick={() => setIsLogin(!isLogin)}>
          {isLogin
            ? "Create new account"
            : "Already have account? Login"}
        </p>

      </div>
    </div>
  );
}

export default Auth;