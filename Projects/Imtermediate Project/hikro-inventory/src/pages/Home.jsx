import  { useContext } from "react";

import { AuthContext } from "../context/AuthContext";

import Dashboard from "../components/Dashboard";

import Auth from "./Auth";

function Home() {
    const { user } = useContext(AuthContext);

    return (
        <>
            {user ? <Dashboard /> : <Auth />}
        </>
    );
}

export default Home;