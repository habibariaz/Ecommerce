import React from 'react'
import { NavLink } from 'react-router-dom'
// import { GiShoppingBag } from "react-icons/gi";

const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <a className="navbar-brand"> 🛒 AHA Trendy</a>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" to='/'>Home</NavLink>
                            </li>

                            <li className="nav-item dropdown">
                                <NavLink
                                    className="nav-link dropdown-toggle"
                                    to="/Category"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                    activeClassName="active"
                                >
                                    Category
                                </NavLink>

                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Category1</a></li>
                                    <li><a class="dropdown-item" href="#">Category2</a></li>
                                </ul>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link" to='/SignUp'>Register</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link" to='/Login'>Login</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link" to='/Cart'>Cart (0)</NavLink>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header