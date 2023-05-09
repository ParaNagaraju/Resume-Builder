import React, { useState } from 'react';
import Resumeform from './Resumeform';

function Resume() {
  const [resume, setResume] = useState([]);

  function handleAddDetails(details) {
    setResume([...resume, details]);
  }

  return (
    <div>
      <h1>My Resume</h1>
      <div>
      < Resumeform onSubmit={handleAddDetails} />
      </div>
      <h2>Details</h2>
      <ul>
        {resume.map((details, index) => (
          <li key={index}>
            Name: {details.name}<br />
            Email: {details.email}<br />
            Phone: {details.phone}<br />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Resume;
