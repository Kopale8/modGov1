import React, { Component } from 'react'
import '../styles/header.scss'
import logo from '../imgs/logo.png'




export default class Header extends Component {

    
    render() {
        
        return (
            <>
                <div id='header' className='row'>
                    <link rel="stylesheet" href="/node_modules/alk-tommaso/css/alk-tommaso.min.css"></link>
                    <div id='logo' className='col-md-1'>
                        <img src={logo} />

                    </div>

                    <div id='title' className='col-md-1 fw-bold'>
                        <p className='ms-4 mt-4'>საქართველოს <br /> თავდაცვის <br /> სამინისტრო</p>
                    </div>

                    <div className='col-md-10'>
                        <div id='logos' className='row'>
                            <div  className='col-md-4 ms-5 d-flex '>
                             <div className='display-5 ms-3'><a href='#'><i className="fa-brands fa-square-youtube" style={{color: "#ff0000"}}></i></a></div>
                             <div className='display-5 ms-3'><a href='#'><i className="fa-brands fa-square-facebook" style={{color: "#006adb"}}></i></a></div>
                             <div className='display-5 ms-3'><a href='#'><i className="fa-brands fa-square-twitter" style={{color: "#0e58d8"}}></i></a></div>
                            </div>

                            <div id='searchbox' className='col-md-7'>
                                <input className='form-control mt-3'/>
                                {/* <button className='icon' type='submit'><i class="fa-solid fa-magnifying-glass" area-hidden="true"></i></button> */}
                            </div>
                        </div>

                        

                        <div id='items' className='row'>
                            <div className='col-md-12 ms-5 d-flex'>
                                <div className='me-3 fw-bold text-dark'>
                                    <a href='#'>საჯარო ინფორმაცია</a>
                                </div>

                                <div className='me-3 fw-bold text-dark'>
                                    <a  href='#'>საჯარო შეტყობინებები</a>
                                </div>

                                <div className='me-3 fw-bold text-dark'>
                                    <a href='#'>ჯანმრტელობის დაზღვევა</a>
                                </div>

                                <div className='me-3 fw-bold text-dark'>
                                    <a href='#'>ბინების დაკანონება</a>
                                </div>

                                <div className='me-3 fw-bold text-dark'>
                                    <a href='#'>ვაკანსიები</a>
                                </div>

                                <div className='me-3 fw-bold text-dark'>
                                    <a href='#'>ტენდერები</a>
                                </div>

                                <div className='me-3 fw-bold text-dark'>
                                    <a href='#'>ხშირად დასმული კითხვები</a>
                                </div>

                                <div className='me-3 fw-bold text-dark'>
                                    <a href='#'>კონტაკტი</a>
                                </div>
                                
                            </div>
                        </div>
                    </div>

                </div>

            </ >
        )
    }
}
