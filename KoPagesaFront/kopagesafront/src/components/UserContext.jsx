import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useContext } from 'react';

const UserContext = React.createContext();

const UserContextUpdate = React.createContext();

export const useUser = () => useContext(UserContext)
export const useUserUpdate = () => useContext(UserContextUpdate)

export const UserProvider = ({childeren}) => {
    
    const [user, setUser] = useState(null);
    const login = async(email,password) => {
        const body = {email,password}
        const url = 'https://reqres.in/api/login'
        const res = await axios.post(url,body)
        console.log(res)
    }

    return(
        <UserContext.Provider value={user}>
            <UserContextUpdate.Provider>
                {childeren}
            </UserContextUpdate.Provider>
        </UserContext.Provider>
    )
}
