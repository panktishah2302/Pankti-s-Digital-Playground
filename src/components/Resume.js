import React from 'react';

const Resume = () => {
  // Define your real education data
  const education = [
    {
      institution: 'Sal College of Engineering',
      degree: 'BE - Computer Engineering',
      year: '2019 - 2023',
      details: [
        'CGPA: 7.95'
      ]
    },
    {
      institution: 'Shri Damubhai Shukla High School',
      degree: 'High school/Secondary Certificate Programs',
      year: '2008 - 2019',
      details: [
        'XII (12th Standard): 60%',
        'X (10th Standard): 66%'
      ]
    },
    // Add more education entries if needed
  ];

  // Define your real work experience data
  const workExperience = [
    {
      company: 'VNurture Technologies',
      position: 'Django Intern',
      duration: 'Feb 2023 - May 2023',
      description: 'During my internship at VNurture Technologies, I had the invaluable opportunity to undergo comprehensive training in Django web development. Under the mentorship of seasoned developers, I immersed myself in the world of backend development, gaining hands-on experience in enhancing Django\'s powerful features.',
      technologies: ['Python', 'HTML', 'CSS']
    },
    {
      company: 'BrainyBeam Technologies',
      position: 'Python Intern',
      duration: 'Jun 2022 - Jul 2022',
      description: 'During my 15-day internship at BrainyBeam Technologies, I had the opportunity to immerse myself in Python programming. This intensive program provided hands-on experience and a deep dive into various aspects of Python development.',
      technologies: ['Python']
    },
    // Add more work experience entries if needed
  ];
  
  return (
    <div>
      {/* Education Section */}
      <div className="container mt-5">
        <h2 className="text-center mb-4">Education</h2>
        <div className="row">
          {education.map((edu, index) => (
            <div key={index} className="col-md-6">
              <div className="card mb-4">
                <div className="card-body">
                  <h4 className="card-title">{edu.degree}</h4>
                  <p className="card-text text-muted">{edu.institution} | {edu.year}</p>
                  <ul className="list-group">
                    {edu.details.map((detail, i) => (
                      <li key={i} className="list-group-item">{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Work Experience Section */}
      <div className="container mt-5">
        <h2 className="text-center mb-4">Work Experience</h2>
        <div className="row">
          {workExperience.map((work, index) => (
            <div key={index} className="col-md-6">
              <div className="card mb-4">
                <div className="card-body">
                  <h4 className="card-title">{work.position}</h4>
                  <p className="card-text text-muted">{work.company} | {work.duration}</p>
                  <p className="card-text">{work.description}</p>
                  <p className="card-text">
                    Technologies: {work.technologies.join(', ')}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Resume;
