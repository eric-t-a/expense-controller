import axios from 'axios';
import { useState } from 'react';
import { store } from '.';
import { setUserData } from './store/user';

export const BASE_URL = `${window.appUrl ?? 'http://localhost:8000'}/api`;

const AuthUser = () => {
    
    const getToken = () => {
        const tokenString = localStorage.getItem('token');
        var userToken = '';
        if(tokenString!=="undefined" && tokenString){
            userToken = tokenString;
        }
            
        return userToken;
    };

    const getUser = () => {
        const userString = localStorage.getItem('user');
        var user = '';
        if(userString!=="undefined"){
            user = JSON.parse(userString);
        }
        return user;
    };
    const [token,setToken] = useState(getToken());
    const [user, setUser] = useState(getUser());


    

    const saveToken = (user,token) => {
        localStorage.setItem('token',JSON.stringify(token));
        localStorage.setItem('user',JSON.stringify(user));

        setToken(token);
        setUser(user);
        store.dispatch(setUserData(user))
        // window.location.href = '/app/dashboard';
    };

    const settingUser = (user) => {
        localStorage.setItem('user',JSON.stringify(user));

        setUser(user);
        store.dispatch(setUserData(user))
    };

    const logout = () => {
        localStorage.clear();
        window.location.href = '/login';
    };
    const api = axios.create({
        baseURL:BASE_URL,
    });
    return {
        setToken: saveToken,
        token,
        user,
        getToken,
        api,
        logout,
        setUser: settingUser
    }
}



export default AuthUser;