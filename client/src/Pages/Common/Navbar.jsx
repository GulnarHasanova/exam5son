import React from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.scss'

function Navbar() {
    return (
        <>

            <nav>
                <div className="container nav">
                    <div className="col-2 logo">
                <img src="https://preview.colorlib.com/theme/course/images/logo.png" id='logo' alt="logo" />
                <h1 id='h1forlogo'>COURSE</h1>
                         
                    </div>

                    <div className="col-7 li">
                        <ul>
                        <li><Link to= "/">Home</Link></li>
                        <li><Link to= "about">About</Link></li>
                        <li><Link to= "add">Add</Link></li>
                        <li><Link to= "#">Elements</Link></li>
                        <li><Link to= "#">News</Link></li>
                        <li><Link to= "#">Contacts</Link></li>
                
                        </ul>

                    </div>

                    <div className="col-3 phon">
                      

                    </div>


                </div>
            </nav>

            
        </>
    )
}

export default Navbar