import React from 'react'
import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <>
            {/*Navbar */}
            <nav className="navbar navbar-expand-lg bg-transparent">
                <div className="container-fluid ">
                    <Link className="navbar-brand" to="/aboutpage"> VolunTier </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse d-flex flex-row-reverse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item mx-2 px-2">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item mx-2 px-2">
                                <Link className="nav-link" to="/aboutpage">About</Link>
                            </li>
                            <li className="nav-item mx-2 px-2">
                                <Link className="nav-link" to="/opportunitypage">Opportunity</Link>
                            </li>
                            <li className="nav-item mx-2 px-2">
                                <Link className="nav-link" to="/blogpage">Blog</Link>
                            </li>
                            <li className="nav-item mx-2 px-2">
                                <Link className="nav-link" to="/testimonialpage">Testimonials</Link>
                            </li>
                            <li className="nav-item mx-2 px-2">
                                <Link className="nav-link" to="/faqpage">FAQs</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <ul className="dropdown-menu align-center">
                                    <li><Link className="dropdown-item" to="/login">Log In</Link></li>
                                    <li><Link className="dropdown-item" to="/register">Register</Link></li>
                                </ul>
                                <Link className="navbar-brand dropdown-toggle me-3 pe-2" to="#" role="button" data-bs-toggle="dropdown">
                                    <img src="/images/ProfilePng.webp" alt="Profile" width="30" height="28" />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/*Section-1*/}
            <div className="section_01 d-flex flex-column ">
                <h2> Sliding Panel </h2>
            </div>
            {/*Section-2*/}
            <div className="section_02">
                <h2 className="ms-2 p-3">Opportunities</h2>
                <div className="ms-2 p-2">
                    <p>Sign In to explore Voluntering opportunities, according to your preferences. </p>
                    <p> sajshidukbcajcm,scskidiaon cajsuyil csuydialnvs ailhiocnm, pksinc.</p>
                </div>
                <button className=" btn rounded ms-4 mt-4 p-1 bg-light"> Explore Opportunities </button>
                <img src="..." className="rounded float-end bg-light " alt="..." />
            </div>
            {/*Section-3*/}
            <div className="section_03">
                <h2 className="ms-4 pt-3 d-flex justify-content-center"> Glimpse of Past Events and Projects </h2>
                <div className=" d-flex justify-content-center">
                    <p>Every opportunity gives a new expirience and help us to create a real impact </p>
                    <p>by helping organizations and volunteering to find and reachout till eachother.</p>
                </div>
                <div className="d-flex justify-content-center mt-3 p-2">

                    <div className="card m-4 p-2" style={{width: "14rem"}}>
                        <img src="..." className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>

                    <div className="card m-4 p-2" style={{width: "14rem"}}>
                        <img src="..." className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>

                    <div className="card m-4 p-2" style={{width: "14rem"}}>
                        <img src="..." className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
                <div className=" d-flex justify-content-center">
                    <button className="btn bg-light rounded mt-4 mb-3 p-1 ">Explore Opportunities</button>
                </div>
            </div>
            {/*Section-4*/}
            <div className="section_04">
                <h2>FAQs</h2>
            </div>
            {/*Section-5*/}
            <div className="section_05">
                <div className="d-flex justify-content-start ">
                    <img src="..." className="rounded float-start bg-light mt-3 p-2" alt="..." />
                </div>
                <div className="d-flex justify-content-end">
                    <h2> About Us </h2>
                    <div className="d-flex">
                        <p>VolunTier Hub is a Free Web Platfrom dedicated to Volunteering.</p>
                        <p>We help small-scale, non-profit, home businesses and organization</p>
                        <p>to fulfill their man-power requirements by giving them a platform to</p>
                        <p> host their needs. Also our focus is on benefitting Individuals willing </p>
                        <p> to work and help for society. </p>
                    </div>
                </div>
            </div>
            <div className="section_06">
                <h2>Footer</h2>
            </div>
        </>
    )
}

export default HomePage;
