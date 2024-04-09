import React from "react";
import {Navigate,Outlet} from 'react-router-dom';

const PrivateComponent = ()=>{

    const author = localStorage.getItem("user");

    return author?<Outlet/>:<Navigate to="/login"/>

}

export default PrivateComponent