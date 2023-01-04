import { useSelector } from 'react-redux';
import { selectCurrentToken } from '../features/auth/authSlice';
import jwtDecode from 'jwt-decode';


import React from 'react'

const UseAuth = () => {
    const token = useSelector(selectCurrentToken);
    let isMember=false;
    let isAdmin = false;
    let status = 'Member';

    if(token){
        const decoded = jwtDecode(token);
        const { username, roles} = decoded.UserInfo;

        isAdmin=roles.includes("Admin");
        isMember = roles.includes("Member");

        if(isMember) status = "Manager"
        if(isAdmin) status = "Admin";

        return { username, roles, status, isManager, isAdmin }
    }

    return {username:"", roles:[], isAdmin, isMember, status}


}

export default UseAuth