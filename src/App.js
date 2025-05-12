import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { jsPDF } from 'jspdf';
import './App.css';

function App() {
  const [personal, setPersonal] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    linkedin : '',
    github : '',
  });

  const [education, setEducation] = useState([
    { id: 1, school: '', degree: '', from: '', to: '' , gpa : ''},
  ]);

  const [experience, setExperience] = useState([
    { id: 1, company: '', position: '', from: '', to: '', url : '' , description: '' },
  ]);

  const [skills, setSkills] = useState('');

  const resumeRef = useRef();

  // Handlers for personal info
  const handlePersonalChange = (e) => {
    setPersonal({ ...personal, [e.target.name]: e.target.value });
  };

  // Handlers for education
  const handleEducationChange = (id, e) => {
    const newEducation = education.map((edu) => {
      if (edu.id === id) {
        return { ...edu, [e.target.name]: e.target.value };
      }
      return edu;
    });
    setEducation(newEducation);
  };

  const addEducation = () => {
    setEducation([...education, { id: Date.now(), school: '', degree: '', from: '', to: '' }]);
  };

  const removeEducation = (id) => {
    setEducation(education.filter((edu) => edu.id !== id));
  };

  // Handlers for experience
  const handleExperienceChange = (id, e) => {
    const newExperience = experience.map((exp) => {
      if (exp.id === id) {
        return { ...exp, [e.target.name]: e.target.value };
      }
      return exp;
    });
    setExperience(newExperience);
  };

  const addExperience = () => {
    setExperience([...experience, { id: Date.now(), company: '', position: '', from: '', to: '', description: '' }]);
  };

  const removeExperience = (id) => {
    setExperience(experience.filter((exp) => exp.id !== id));
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.html(resumeRef.current, {
      callback: function (doc) {
        doc.save('resume.pdf');
      },
      x: 10,
      y: 10,
      width: 190,
      windowWidth: 650,
    });
  };

  return (
    <div className="container">
      <h1>Resume Builder</h1>
      <div className="builder-preview">
        <div className="builder">
          <section>
            <h2>Personal Information</h2>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={personal.fullName}
              onChange={handlePersonalChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={personal.email}
              onChange={handlePersonalChange}
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={personal.phone}
              onChange={handlePersonalChange}
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={personal.address}
              onChange={handlePersonalChange}
            />
             <input
              type="text"
              name="linkedin"
              placeholder="Linkedin"
              value={personal.linkedin}
              onChange={handlePersonalChange}
            />
             <input
              type="text"
              name="github"
              placeholder="Github"
              value={personal.github}
              onChange={handlePersonalChange}
            />
          </section>

          <section>
            <h2>Education</h2>
            {education.map((edu) => (
              <div key={edu.id} className="education-item">
                <input
                  type="text"
                  name="school"
                  placeholder="School"
                  value={edu.school}
                  onChange={(e) => handleEducationChange(edu.id, e)}
                />
                <input
                  type="text"
                  name="degree"
                  placeholder="Degree"
                  value={edu.degree}
                  onChange={(e) => handleEducationChange(edu.id, e)}
                />
                <input
                  type="text"
                  name="from"
                  placeholder="From"
                  value={edu.from}
                  onChange={(e) => handleEducationChange(edu.id, e)}
                />
                <input
                  type="text"
                  name="to"
                  placeholder="To"
                  value={edu.to}
                  onChange={(e) => handleEducationChange(edu.id, e)}
                />
                <input
                  type="text"
                  name="gpa"
                  placeholder="Gpa"
                  value={edu.gpa}
                  onChange={(e) => handleEducationChange(edu.id, e)}
                />
                <button className="remove-btn" onClick={() => removeEducation(edu.id)}>Remove</button>
              </div>
            ))}
            <button className="add-btn" onClick={addEducation}>Add Education</button>
          </section>

          <section>
            <h2>Experience</h2>
            {experience.map((exp) => (
              <div key={exp.id} className="experience-item">
                <input
                  type="text"
                  name="company"
                  placeholder="Company"
                  value={exp.company}
                  onChange={(e) => handleExperienceChange(exp.id, e)}
                />
                <input
                  type="text"
                  name="position"
                  placeholder="Position"
                  value={exp.position}
                  onChange={(e) => handleExperienceChange(exp.id, e)}
                />
                <input
                  type="text"
                  name="from"
                  placeholder="From"
                  value={exp.from}
                  onChange={(e) => handleExperienceChange(exp.id, e)}
                />
                <input
                  type="text"
                  name="to"
                  placeholder="To"
                  value={exp.to}
                  onChange={(e) => handleExperienceChange(exp.id, e)}
                />
                <input
                  type="text"
                  name="url"
                  placeholder="Company URL"
                  value={exp.url}
                  onChange={(e) => handleExperienceChange(exp.id, e)}
                />
                <textarea
                  name="description"
                  placeholder="Description"
                  value={exp.description}
                  onChange={(e) => handleExperienceChange(exp.id, e)}
                />
                <button className="remove-btn" onClick={() => removeExperience(exp.id)}>Remove</button>
              </div>
            ))}
            <button className="add-btn" onClick={addExperience}>Add Experience</button>
          </section>

          <section>
            <h2>Skills</h2>
            <textarea
              name="skills"
              placeholder="List your skills separated by commas"
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
            />
          </section>
          <button className="add-btn" onClick={generatePDF}>Download PDF</button>
        </div>

        <div className="preview" ref={resumeRef}>
          <h2>Resume Preview</h2>
          <div className="resume">
            <h3>{personal.fullName}</h3>
            <p>{personal.email} | {personal.phone}</p>
            <p>{personal.address}</p>
            <Link to={personal.linkedin}>
             <p>{personal.linkedin}</p>
            </Link>
            <Link to={personal.github}>
            <p>{personal.github}</p>
            </Link>

            <h4>Education</h4>
            {education.map((edu) => (
              <div key={edu.id}>
                <p><strong>{edu.school}</strong> - {edu.degree}</p>
                <p>{edu.from} - {edu.to}</p>
                <p>{edu.gpa}</p>
              </div>
            ))}

            <h4>Experience</h4>
            {experience.map((exp) => (
              <div key={exp.id}>
                <p><strong>{exp.position}</strong> at {exp.company}</p>
                <p>{exp.from} - {exp.to}</p>
                <Link to={exp.url}>
                <p>{exp.url}</p>
                </Link>
                <p>{exp.description}</p>
              </div>
            ))}

            <h4>Skills</h4>
            <p>{skills}</p>
          </div>
        </div>
      </div>
      <div>
        <p className='owner'>
          Design & Created By Raushan Raj
        </p>
      </div>
    </div>
  );
}

export default App;
