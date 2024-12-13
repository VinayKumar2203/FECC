import { createContext, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
// import axios from "axios";
import axios from 'axios'

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const navigate = useNavigate();

  const login = async (credentials) => {
    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", credentials);
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);

      // Set the token globally for future requests
      axios.defaults.headers.common["Authorization"] = `Bearer ${response.data.token}`;

      navigate("/profile");
      console.log("Redirect to the profile page");
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  const register = async (details) => {
    try {
      await axios.post("http://localhost:5000/api/auth/register", details);
      navigate("/login");
      console.log("Redirect to the login page");
    } catch (error) {
      console.error("Registration failed", error);
    }
  };

  const fetchProfile = async () => {
    if (!token) {
      console.error("No token found, redirecting to login.");
      navigate("/login");
      return;
    }

    try {
      const response = await axios.get("http://localhost:5000/api/auth/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUser(response.data.user);
    } catch (error) {
      console.error("Failed to fetch profile", error);

      // If the token is invalid or expired, clear it and redirect to login
      if (error.response?.status === 401) {
        logout();
      }
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("token");

    // Remove the token from global headers
    delete axios.defaults.headers.common["Authorization"];

    navigate("/login");
    console.log("Redirect to the login page");
  };

  return (
    <AuthContext.Provider value={{ user, token, login, register, fetchProfile, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
