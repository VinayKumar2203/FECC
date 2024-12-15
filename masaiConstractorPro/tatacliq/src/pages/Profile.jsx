import { useEffect } from "react";
import { useAuth } from "../context/AuthProvider";

const Profile = () => {
    const { user, fetchProfile, logout } = useAuth();
    useEffect(() => {
        fetchProfile();
    }, [fetchProfile]);

    if (!user) return <p>Loading...</p>;

    return (
        <div>
            <h2>Welcome, {user.username}</h2>
            <button onClick={logout}>Logout</button>
        </div>
    );
};

export default Profile;
