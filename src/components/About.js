import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLightbulb, faBullseye, faHandshake } from '@fortawesome/free-solid-svg-icons';

const About = () => {
    const email = "spankti39@gmail.com";

    return (
        <section className="about-section" style={{ padding: '50px 0' }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="about-content text-center">
                            <h2 className="section-title mb-3" style={{ color: '#1F2930', fontSize: '2.5rem' }}>About Me</h2>
                            <p className="section-description mb-5" style={{ color: '#6B7280', fontSize: '16px' }}>Welcome to my digital playground, where every line of code is a step towards realizing my dreams in the tech realm! 🚀</p>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="info-card bg-white p-4 mb-4 rounded" style={{ boxShadow: '0px 0px 20px 0px rgba(0,0,0,0.1)', backgroundColor: '#1F4068' }}>
                                        <FontAwesomeIcon icon={faUser} className="icon" style={{ color: '#7E22CE', fontSize: '40px' }} />
                                        <h3 className="card-title mt-3 mb-3" style={{ color: '#1F2930', fontSize: '30px' }}>Introduction</h3>
                                        <p className="card-text mb-0" style={{ color: '#6B7280', fontSize: '16px' }}>Hello there! Time to share a bit of my journey – from a college coder to seriously hungry for tech challenges in the real world! 💡💻</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="info-card bg-white p-4 mb-4 rounded" style={{ boxShadow: '0px 0px 20px 0px rgba(0,0,0,0.1)', backgroundColor: '#1F4068' }}>
                                        <FontAwesomeIcon icon={faLightbulb} className="icon" style={{ color: '#7E22CE', fontSize: '40px' }} />
                                        <h3 className="card-title mt-3 mb-3" style={{ color: '#1F2930', fontSize: '30px' }}>Backstory</h3>
                                        <p className="card-text mb-0" style={{ color: '#6B7280', fontSize: '16px' }}>During my college years, coding was just a subject. Yet, after graduation, a lightbulb moment struck me – why not turn this casual interest into a full-blown passion?</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="info-card bg-white p-4 mb-4 rounded" style={{ boxShadow: '0px 0px 20px 0px rgba(0,0,0,0.1)', backgroundColor: '#1F4068' }}>
                                        <FontAwesomeIcon icon={faBullseye} className="icon" style={{ color: '#7E22CE', fontSize: '40px' }} />
                                        <h3 className="card-title mt-3 mb-3" style={{ color: '#1F2930', fontSize: '30px' }}>Goals</h3>
                                        <p className="card-text mb-0" style={{ color: '#6B7280', fontSize: '16px' }}>My goal as a fresher is to dive headfirst into real-world projects, soak up knowledge, and grow my skills. I'm eager to contribute my creativity and enthusiasm to crafting innovative digital solutions while continuously learning and evolving in this dynamic field.</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="info-card bg-white p-4 mb-4 rounded" style={{ boxShadow: '0px 0px 20px 0px rgba(0,0,0,0.1)', backgroundColor: '#1F4068' }}>
                                        <FontAwesomeIcon icon={faHandshake} className="icon" style={{ color: '#7E22CE', fontSize: '40px' }} />
                                        <h3 className="card-title mt-3 mb-3" style={{ color: '#1F2930', fontSize: '30px' }}>Connect</h3>
                                        <p className="card-text mb-0" style={{ color: '#6B7280', fontSize: '16px' }}>As I step into the tech world, my goal is clear – improve my skills, explore opportunities, and tech journey. </p>
                                        <p className="card-text mb-0" style={{ color: '#6B7280', fontSize: '16px' }}>Let's connect! Feel free to reach out via email at <a href={`mailto:${email}`} style={{ color: '#7E22CE', textDecoration: 'underline' }}>{email}</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default About;
