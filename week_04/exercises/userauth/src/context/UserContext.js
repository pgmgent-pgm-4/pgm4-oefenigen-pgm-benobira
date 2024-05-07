import { createContext, useState } from "react";
import USER from '../data/user';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    // If the user is logged in, the user is set to the user object.
    function login(user) {
        if (user.username === USER.username && user.password === USER.password) {
            setUser(user);
            console.log('User logged in');
        } else {
            setUser(null);
            console.log('User not logged in');
        }
    }
    // If the user is logged out, the user is null.
    function logout() {
        setUser(null);
    }

    return (
        <UserContext.Provider value={{ user, login, logout }}>
            {children}
        </UserContext.Provider>
    );
};