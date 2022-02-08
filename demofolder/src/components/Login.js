
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom"
import axios from "axios"
const Login = () => {
  const navigate = useNavigate()
  const [users, setUsers] = useState({
    email: "",
    password: ""
  })
  const handleChange = e => {
    const { name, value } = e.target
    setUsers({
      ...users,
      [name]: value
    })
  }
  const login = () => {
    const { email, password } = users
    if (email && password) {
      axios.post("http://localhost:3002/login/", users)
        .then(res => {
          console.log(res.data.users)
          if (res.data.message){
            
            //alert(res.data.message)
          //updateUser(res.data.users)
          navigate("/dashboard")
          }
        else {
      alert("failed to login")
    }
  })
}
  
else {
  alert("invalid input")
}
  }
return (<div className='login-container'>
  <h1>LOGIN</h1>
  <div className='input-section'>

    <input type="text" name="email"value={users.email} placeholder="emailid"  onChange={handleChange} /><br /><br />
    <input type="password" name="password" value={users.password} placeholder="Password"  onChange={handleChange} /><br />
<button className='login-button' onClick={login}>Login</button>

  </div>
</div>
)

}


export default Login;


