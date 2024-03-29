import React from 'react';
import profile from '../images/profile-pic (5).png';
import resume from '../pdf/Pankti_Shah_CV (2).pdf';
import { Link } from 'react-router-dom';

const Profile = () => {
    return (
        <div className="container text-center mt-5">
            <div className="row">
                <div className="col-md-12">
                    <img src={profile} alt="" className="img-fluid rounded-circle mb-3" style={{ width: '200px', height: '200px', marginTop: '-154px', backgroundColor: '#f0f0f0' }} />
                    <h1 style={{ fontSize: '30px' }}>Pankti Shah</h1>
                    <div className="d-flex justify-content-center mb-4">
                        <div className="mr-3 mx-2">
                            <a href="https://www.linkedin.com/in/panktishah02" target="_blank" className="text-decoration-none">
                                <i className="fa-brands fa-linkedin fa-2x" style={{ color: '#7E22CE' }}></i>
                            </a>
                        </div>
                        <div className="mr-3 mx-2">
                            <a href="https://github.com/panktishah2302" target="_blank" className="text-decoration-none">
                                <i className="fab fa-github fa-2x" style={{ color: '#7E22CE' }}></i>
                            </a>
                        </div>
                    </div>


                    <div className="card bg-light mb-3 mx-auto" style={{ maxWidth: '18rem', backgroundColor: '#f0f0f0' }}>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item d-flex align-items-center" style={{ backgroundColor: '#f0f0f0' }}>
                                <div className="text-center">
                                    <i className="fas fa-phone mr-3 fa-2x" style={{ color: '#7E22CE' }}></i>
                                </div>
                                <div style={{ textAlign: 'left', marginLeft: '10px' }}>
                                    <p className="m-0 text-left" style={{ color: '#6B7280', fontSize: '14px' }}>Phone</p>
                                    <p className="m-0 text-left" style={{ fontSize: '16px' }}>+91 8758526862</p>
                                </div>
                            </li>
                            <li className="list-group-item d-flex align-items-center" style={{ backgroundColor: '#f0f0f0' }}>
                                <div className="text-center">
                                    <i className="far fa-envelope mr-3 fa-2x" style={{ color: '#7E22CE' }}></i>
                                </div>
                                <div style={{ textAlign: 'left', marginLeft: '10px' }}>
                                    <p className="m-0 text-left" style={{ color: '#6B7280', fontSize: '14px' }}>Email</p>
                                    <p className="m-0 text-left" style={{ fontSize: '16px' }}>spankti39@gmail.com</p>
                                </div>
                            </li>
                            <li className="list-group-item d-flex align-items-center" style={{ backgroundColor: '#f0f0f0' }}>
                                <div className="text-center">
                                    <i className="fas fa-map-marker-alt mr-3 fa-2x" style={{ color: '#7E22CE' }}></i>
                                </div>
                                <div style={{ textAlign: 'left', marginLeft: '10px' }}>
                                    <p className="m-0 text-left" style={{ color: '#6B7280', fontSize: '14px' }}>Location</p>
                                    <p className="m-0 text-left" style={{ fontSize: '16px' }}>Ahmedabad, Gujarat, India</p>
                                </div>
                            </li>
                            <li className="list-group-item d-flex align-items-center" style={{ backgroundColor: '#f0f0f0' }}>
                                <div className="text-center">
                                    <i className="far fa-calendar-alt mr-3 fa-2x" style={{ color: '#7E22CE' }}></i>
                                </div>
                                <div style={{ textAlign: 'left', marginLeft: '10px' }}>
                                    <p className="m-0 text-left" style={{ color: '#6B7280', fontSize: '14px' }}>Birthday</p>
                                    <p className="m-0 text-left" style={{ fontSize: '16px' }}>March 02, 2002</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="mb-4">
                        <button className="btn btn-primary" style={{ backgroundColor: '#7E22CE', fontSize: '14px' }}>
                            <Link to={resume} target='_blank' className="btn btn-primary ml-3" style={{ backgroundColor: '#7E22CE', fontSize: '14px', border: "#7E22CE" }}>
                                Download CV <i className="fas fa-download ml-2"></i>
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
