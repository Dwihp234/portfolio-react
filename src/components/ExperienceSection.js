import React from 'react';
import './ExperienceSection.css';

const ExperienceSection = () => {
  const experiences = [
    {
      id: 1,
      title: "Senior Full Stack Developer",
      company: "Tech Company Inc.",
      period: "2023 - Present",
      location: "Jakarta, Indonesia",
      description: [
        "Led development of scalable web applications using React and Node.js",
        "Mentored junior developers and conducted code reviews",
        "Implemented CI/CD pipelines and improved deployment processes",
        "Collaborated with cross-functional teams to deliver high-quality products"
      ],
      technologies: ["React", "Node.js", "TypeScript", "AWS", "Docker"]
    },
    {
      id: 2,
      title: "Full Stack Developer",
      company: "Digital Solutions Ltd.",
      period: "2021 - 2023",
      location: "Bandung, Indonesia",
      description: [
        "Developed and maintained multiple client projects using modern web technologies",
        "Created responsive user interfaces and optimized application performance",
        "Integrated third-party APIs and payment gateways",
        "Worked closely with designers to implement pixel-perfect designs"
      ],
      technologies: ["Vue.js", "PHP", "Laravel", "MySQL", "Bootstrap"]
    },
    {
      id: 3,
      title: "Junior Web Developer",
      company: "Creative Agency",
      period: "2020 - 2021",
      location: "Yogyakarta, Indonesia",
      description: [
        "Built responsive websites for various clients using HTML, CSS, and JavaScript",
        "Assisted in backend development using PHP and MySQL",
        "Learned version control with Git and collaborative development practices",
        "Participated in client meetings and requirement gathering sessions"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "WordPress"]
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <h2 className="section-title">Work Experience</h2>
        <p className="section-subtitle">
          My professional journey and key achievements in web development
        </p>
        
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={exp.id} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
              <div className="timeline-content">
                <div className="experience-card">
                  <div className="experience-header">
                    <h3 className="job-title">{exp.title}</h3>
                    <div className="company-info">
                      <h4 className="company-name">{exp.company}</h4>
                      <span className="location">{exp.location}</span>
                    </div>
                    <span className="period">{exp.period}</span>
                  </div>
                  
                  <div className="experience-body">
                    <ul className="responsibilities">
                      {exp.description.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                    
                    <div className="technologies">
                      <h5>Technologies Used:</h5>
                      <div className="tech-tags">
                        {exp.technologies.map((tech, idx) => (
                          <span key={idx} className="tech-tag">{tech}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="timeline-marker"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
