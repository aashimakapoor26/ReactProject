import { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext({
    loggedInUser: "Default User"
});

export const UserProvider = ({ children }) => {
    // authentication code
    const [userName, setUserName] = useState('');

    useEffect(() => {
        const data = {
            name: "Aashi"
        }
        setUserName(data.name)
    }, []);
    return <UserContext.Provider value={{ userName }}>{children}</UserContext.Provider>
}

export const userConsumer = () => {
    return useContext();
}

export default UserProvider;