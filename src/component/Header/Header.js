import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            {/* NavBar Menu */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand ms-5" href="#">Hire Management</a>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-5 mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Solutions</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#">Startups</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#">Investors</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link active" href="#">Contact-us</a>
                            </li>


                        </ul>
                        <form className="d-flex flex-fill pe-5">
                            <input className="form-control me-2" type="search" placeholder="What are you looking for" aria-label="Search" />
                            <button className="btn btn-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>

            {/* Header title */}
            <section className="header-intro p-2 text-center">
                <h3 className="p-0 m-0">Make a Great Management Team For Your Company</h3>
                <p className=" p-0 m-0"> <small>The key of success of a company is simply that A great management.</small></p>
                <h4 className=" p-0 m-0"><small>Total Budget: 10 Millions</small></h4>
            </section>
        </div>
    );
};

export default Header;