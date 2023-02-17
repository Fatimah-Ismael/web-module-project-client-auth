import React, { useState } from "react"
import axios from "axios";
import  {useNavigate}  from 'react-router-dom';



const Login=()=> {
    const navigate = useNavigate();
    const [cred, setCred ] = useState({
        username:'',
        password:'',
    });

    const handleChange = (evt)=>{
        setCred({
            ...cred, 
            [evt.target.name]:value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('hhtp://localhost:9000/api/login', cred)
            .then(res =>{
                //console.log(res)
                localStorage.setItem('token', res.data.payload);
                navigate('/friends');
            })
            .catch(err=>{
                console.log(err)
            })
    }
    return (
     <div>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div>
          <label htmlFor='username'>Username</label>
          <input onChange={handleChange} name='username' id='username'/>
          </div>
          <div>
            <label htmlFor='password'>Password</label>
            <input onChange={handleChange} name='password' id='password'/>
          </div>
          <button>Submit</button>
        </form>
     </div>
    )
  }

  export default Login;