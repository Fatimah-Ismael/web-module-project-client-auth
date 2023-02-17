import React from "react"
import { Route, Navigate } from 'react-router-dom'

const PrivateRoute= ({Component, ...rest})=>{
    return (
        <Route
        {...rest}
        render= {(props)=> {
        if (localStorage.getItem('toke')){
            return<Component {...props} />
        } else{
            return <Navigate to ='/login' />
        }
    }
}
/>
    )
}
export default PrivateRoute;