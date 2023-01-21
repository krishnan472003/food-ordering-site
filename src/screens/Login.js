import React from 'react'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
export default function Login() {
  const navigate = useNavigate()
  const [credentials,setCredentials] = useState({email:"",password:""})
  const handleSubmit = async(e)=>{
      e.preventDefault();
      console.log(JSON.stringify({email:credentials.email,password:credentials.password}));
      const response = await fetch("http://localhost:5000/api/loginuser",{
          method:'POST',
          headers:{
              "Content-Type":"application/json"
          },
          body:JSON.stringify({email:credentials.email,password:credentials.password})
      })
      const json = await response.json()
      console.log(json)
      if(!json.success){
          alert("Wrong details");
      }
      else{
        localStorage.setItem("userEmail",credentials.email)
        localStorage.setItem("authToken",json.authToken)
        console.log(localStorage.getItem("authToken"))
        navigate("/")
      }
  }
  const onChange = (event)=>{
     setCredentials({...credentials,[event.target.name]:event.target.value})
  }
  return (
    <div>
        <div><Navbar/></div>
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" name = "email" className="form-control m-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={credentials.email} onChange={onChange}/>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" name ="password" className="form-control m-3" id="exampleInputPassword1" placeholder="Password" value={credentials.password} onChange={onChange}/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to='/createuser' className = "m-3 btn btn-danger">I am a new User</Link>
            </form>
            </div>
        <div><Footer/></div>
    </div>
  )
}
