import React, { useState } from 'react';

const Portfolio = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');

    // Define your projects data with categories
    const projects = [
        {
            title: 'Food Calorie Tracker',
            category: 'django',
            imageUrl: 'blogging_platform_image_url',
            description: 'Created a blogging platform using Django framework with CRUD functionalities for managing blog posts.',
            technologiesUsed: ['Python', 'Django', 'SQLite', 'HTML', 'CSS'],
            liveDemo: '[Link to Live Demo]',
            githubRepository: '[Link to GitHub Repository]'
        },

        {
            title: 'Amazon Homepage Clone',
            category: 'frontend',
            imageUrl: 'amazon_homepage_image_url',
            description: 'Created a clone of the Amazon homepage using HTML and CSS. The project aimed to replicate the overall layout and design of the Amazon homepage, showcasing products and navigation links.',
            technologiesUsed: ['HTML', 'CSS'],
            liveDemo: 'https://panktishah2302.github.io/amazon-home-design/',
            githubRepository: 'https://github.com/panktishah2302/amazon-home-design'
        },
        { 
            title: 'Rock Paper Scissors Game',
            category: 'frontend',
            imageUrl: 'rock_paper_scissors_image_url',
            description: 'Developed a Rock Paper Scissors game using HTML, CSS, and JavaScript. The game allows users to play against the computer, selecting from the options of Rock, Paper, or Scissors. The project focuses on creating an interactive and enjoyable gaming experience for users.',
            technologiesUsed: ['HTML', 'CSS', 'JavaScript'],
            screenshots: '[Link to Screenshots]',
            liveDemo: 'https://panktishah2302.github.io/Rock-Paper-Scissors/',
            githubRepository: 'https://github.com/panktishah2302/Rock-Paper-Scissors'
        },
        { 
            title: 'Textutils',
            category: 'react',
            imageUrl: 'textutils_image_url',
            description: 'Developed a text utility tool using React, allowing users to perform various text manipulation tasks such as converting text to uppercase, lowercase, removing extra spaces, and copying the modified text to the clipboard. The project aims to provide a convenient way for users to format and modify text according to their needs.',
            technologiesUsed: ['React', 'Bootstrap', 'JavaScript'],
            liveDemo: 'https://panktishah2302.github.io/Textutils-react',
            githubRepository: 'https://github.com/panktishah2302/Textutils-react'
        }
        
        


        // Add more projects with categories
    ];

    // Function to filter projects based on selected category
    const filteredProjects = selectedCategory === 'all' ? projects : projects.filter(project => project.category === selectedCategory);

    return (
        <div>
            <div className="d-flex justify-content-center mb-4">
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <button className={`nav-link ${selectedCategory === 'all' ? 'active' : ''}`} onClick={() => setSelectedCategory('all')} style={{ backgroundColor: selectedCategory === 'all' ? '#7E22CE' : 'transparent', color: selectedCategory === 'all' ? 'white' : '#7E22CE' }}>All</button>
                    </li>
                    <li className="nav-item">
                        <button className={`nav-link ${selectedCategory === 'django' ? 'active' : ''}`} onClick={() => setSelectedCategory('django')} style={{ backgroundColor: selectedCategory === 'django' ? '#7E22CE' : 'transparent', color: selectedCategory === 'django' ? 'white' : '#7E22CE' }}>Django</button>
                    </li>
                    <li className="nav-item">
                        <button className={`nav-link ${selectedCategory === 'frontend' ? 'active' : ''}`} onClick={() => setSelectedCategory('frontend')} style={{ backgroundColor: selectedCategory === 'frontend' ? '#7E22CE' : 'transparent', color: selectedCategory === 'frontend' ? 'white' : '#7E22CE' }}>Frontend</button>
                    </li>
                    <li className="nav-item">
                        <button className={`nav-link ${selectedCategory === 'react' ? 'active' : ''}`} onClick={() => setSelectedCategory('react')} style={{ backgroundColor: selectedCategory === 'react' ? '#7E22CE' : 'transparent', color: selectedCategory === 'react' ? 'white' : '#7E22CE' }}>React</button>
                    </li>
                </ul>
            </div>

            {/* Render projects based on selected category */}
            <div className="row">
                {filteredProjects.map((project, index) => (
                    <div key={index} className="col-md-6 mb-4">
                        <div className="card">
                            <img src={project.imageUrl} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title" style={{fontSize:'18px', color:"#111827"}}>{project.title}</h5>
                                <p className="card-text" style={{fontSize:'16px', color:"#374151"}}>{project.description}</p>
                                <div style={{color:"#111827"}}>
                                    Technologies Used:
                                    <ul>
                                        {project.technologiesUsed.map((tech, i) => (
                                            <li key={i} style={{color:"#374151"}}>{tech}</li>
                                        ))}
                                    </ul>
                                </div>
                               
                                
                                <div>
                                    <a href={project.liveDemo} className="btn btn-primary " style={{ backgroundColor: '#7E22CE', border:"#7E22CE" , fontStyle:"14px"}}>Live Demo</a>
                                    <a href={project.githubRepository} className="btn btn-primary mx-2" style={{ backgroundColor: '#7E22CE', border:'#7E22CE' , fontStyle:"14px"}}>GitHub Repository</a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Portfolio;
