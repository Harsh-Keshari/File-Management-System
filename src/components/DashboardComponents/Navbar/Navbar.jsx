// import "./Navbar.css";

// const Navbar = () => {
//     return <div>Navbar</div>;
// };

// export default Navbar;

// import React from 'react';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { signOutUser } from "../../../pages/actionCreators/authActionCreator";

const Navbar = () => {

  const {isAuthenticated,user} = useSelector(state => state.auth);
  const dispatch = useDispatch();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm pd-3">
        <Link className='navbar-brand ms-5' to="/dashboard">File Management System</Link>

        <ul className='navbar-nav ms-auto me-5'>
            {isAuthenticated? (
              <>
              <li className='nav-item mx-2'>
                <p className='my-0 mt-2 mx-2'>
                  <span className='text-dark'>Welcome, </span>
                  <span className='fw-bold'>{user.displayName}</span>
                </p>
            </li> 
            <li className='nav-item mx-2'>
                <Link className='btn btn-primary' to="/">
                  Home
                </Link>
            </li>
            <li className='nav-item'>
                <button className='btn btn-success' onClick={() => dispatch(signOutUser())}>
                  Logout
                </button>
            </li>
              </>
            ):(
            <>
             <li className='nav-item mx-2'>
                <Link className='btn btn-primary btn-sm' to="/login">
                  Login
                </Link>
            </li> 
            <li className='nav-item'>
                <Link className='btn btn-success btn-sm' to="/register">
                  Register
                </Link>
            </li>
            </>
            )}
        </ul>



    </nav>

  )
};

export default Navbar;
