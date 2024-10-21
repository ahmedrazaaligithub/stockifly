import { createContext, useContext, useState, useEffect } from 'react';
import { Spin } from "antd";

const AuthContext = createContext();

const users = [
  { email: 'admin@example.com', password: '12345678', role: 'admin' },
  { email: 'stockmanager@example.com', password: '12345678', role: 'stock_manager' },
  { email: 'salesman@example.com', password: '12345678', role: 'salesman' },
];

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);
  
    const login = (email, password) => {
        console.log(email,password);
        
      const user = users.find(
        (user) => user.email === email && user.password === password
      );
      if (user) {
        setCurrentUser(user);
        localStorage.setItem('user', JSON.stringify(user));
        return true;  // Successful login
      } else {
        return false; // Invalid credentials
      }
    };
  
    const logout = () => {
      setCurrentUser(null);
      localStorage.removeItem('user');
    };
  
    useEffect(() => {
        const savedUser = localStorage.getItem('user');
        if (savedUser) {
          try {
            setCurrentUser(JSON.parse(savedUser));
          } catch (error) {
            console.error("Error parsing user from localStorage", error);
            localStorage.removeItem('user');
          }
        }
        setLoading(false);
      }, []);
      
  
    return (
      <AuthContext.Provider value={{ currentUser, login, logout, loading }}>
        {children}
      </AuthContext.Provider>
    );
  };
  

export const useAuth = () => useContext(AuthContext);
