import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Badge } from 'react-bootstrap';
import Modal from '../Modal';
import { useState } from 'react';
import Cart from '../screens/Cart';
import { useCart } from './ContextReducer';
export default function Navbar(props) {
  const [cartView, setCartView] = useState(false);
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login")
  }
  const loadCart=()=>{
    setCartView(true);
  }
  const data = useCart();
  return (

    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <Link className="navbar-brand fs-1 fst-italic" to="/">Foodie</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2">
            <li className="nav-item active">
              <Link className="nav-link fs-5" to="/">Home</Link>
            </li>
           
          </ul>
          {
            (!localStorage.getItem(("authToken"))) ?
              <div className='d-flex'>
                <Link className="btn bg-white text-success mx-1" to="/login"> Login</Link>
                <Link className="btn bg-white text-success mx-1" to="/createuser">Signup</Link>
              </div>
              :
              <><div className='btn bg-white text-success mx-2' onClick={()=>{setCartView(true)}}>
                  🛒{" "}
                  <Badge pill bg="danger">{data.length}</Badge>
                </div>
                {cartView?<Modal onClose ={()=>{setCartView(false)}}><Cart></Cart></Modal>:""}
                <div className='btn bg-white text-danger mx-2' onClick={handleLogout}>
                Logout
              </div>
              </>
          }

        </div>
      </nav>
    </div>

  )
}
