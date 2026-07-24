
import { signOut } from "firebase/auth";

import { auth } from "../firebase/firebase";

function Dashboard() {
    const handleLogout = async () => {
        await signOut(auth);
    };

    return (
        <div className="dashboard">
            <h1>Dashboard</h1>

            <button onClick={handleLogout}>
                Logout
            </button>
        </div>
    );
}

export default Dashboard;