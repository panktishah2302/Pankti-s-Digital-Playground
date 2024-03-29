import React from 'react';
import { FaCode, FaToolbox, FaLaptopCode } from 'react-icons/fa'; // Import icons from react-icons library

const Skills = () => {
    // Define your skills data
    const skills = [
        {
            category: 'Programming Languages',
            icon: <FaCode />, // Icon for Programming Languages
            list: [
                { name: 'JavaScript', level: 40 }, // Skill with proficiency level
                { name: 'Python', level: 50 },
            ]
        },
        {
            category: 'Web Development',
            icon: <FaLaptopCode />, // Icon for Web Development
            list: [
                { name: 'HTML', level: 60 },
                { name: 'CSS', level: 55 },
                { name: 'React.js', level: 35 },
                // Add more web development skills as needed
            ]
        },
        {
            category: 'Frameworks',
            icon: <FaToolbox />, // Icon for Tools
            list: [{name:'Django',  level:40}]
        },
        {
            category: 'Tools',
            icon: <FaToolbox />, // Icon for Tools
            list: [
                { name: 'Git/Github', level: 25 },
                { name: 'VS Code', level: 50 },
            ]
        },
        // Add more categories and skills as needed
    ];

    return (
        <div className="container mt-5">
            <h2 style={{ fontSize: '30px', textAlign: 'center', color: '#111827' }}>Skills</h2>
            {skills.map((skillCategory, index) => (
                <div key={index} className="mb-4">
                    <h4 className="mb-2"  style={{ fontSize: '18px', color: '#111827' }} >
                        {skillCategory.icon} {skillCategory.category}
                    </h4>
                    {skillCategory.list.map((skill, subIndex) => (
                        <div key={subIndex} className="mb-2">
                            <p className="mb-1"  style={{ fontSize: '16px', color: '#374151' }}>{skill.name}</p>
                            <div className="progress">
                                <div
                                    className="progress-bar" 
                                    role="progressbar"
                                    style={{ width: `${skill.level}%` , backgroundColor:'#7E22CE'}} 
                                    aria-valuenow={skill.level}
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                >
                                    {skill.level}%
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default Skills;
