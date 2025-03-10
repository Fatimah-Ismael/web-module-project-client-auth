import React, { useEffect } from "react";
import axios from "axios";
import {useNavigate} from 'react-router-dom'

const Logout = ()=>{
    const navigate = useNavigate();
    useEffect(()=> {
        const token = localStorage.getItem('token')
        axios.post('http//localhost:9000/api/logout', {
            headers:{
                authorizaton: token
            }
        } )
            .then(res=> {
                //console.log(res);
                localStorage.removeItem('token');
                navigate('/login')
            })
            .catch(err=>{
                console.log(err.error)
            })
    }, [])
    return (
        <div>

        </div>
    )
}
export default Logout;