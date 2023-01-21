import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
export default function Signup() {
    const [credentials,setCredentials] = useState({name:"",email:"",password:"",Geolocation:''})
    const handleSubmit = async(e)=>{
        e.preventDefault();
        console.log(JSON.stringify({name:credentials.name,email:credentials.email,password:credentials.password,location:credentials.Geolocation}));
        const response = await fetch("http://localhost:5000/api/createuser",{
            method:'POST',
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({name:credentials.name,email:credentials.email,password:credentials.password,location:credentials.Geolocation})
        })
        const json = await response.json()
        console.log(json)
        if(!json.success){
            alert("Enter valid credentials");
        }
    }
    const onChange = (event)=>{
       setCredentials({...credentials,[event.target.name]:event.target.value})
    }
    return (
        <>
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">name</label>
                    <input type="text" name ="name" className="form-control m-3" placeholder="Enter Name" value={credentials.name} onChange={onChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" name = "email" className="form-control m-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={credentials.email} onChange={onChange}/>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" name ="password" className="form-control m-3" id="exampleInputPassword1" placeholder="Password" value={credentials.password} onChange={onChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="GeoLocation">Location</label>
                    <input type="text" name = "Geolocation" className="form-control m-3" placeholder="Location" value={credentials.Geolocation} onChange={onChange}/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to='/login' className = "m-3 btn btn-danger">Already a User</Link>
            </form>
            </div>
        </>
    )
}
