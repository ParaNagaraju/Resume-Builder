import React, { useState } from "react";
import Edit from "./Edit";

const Template = () => {
  const [text, setText] = useState("sainath");
  const [role, setRole] = useState("software Engieneer");
  const [address, setAddress] = useState("21 Street, Texas,usa");
  const [phone, setPhone] = useState("9765548978");
  const [email, setEmail] = useState("abc@h.com");
  const [skill, setSkill] = useState("html \ncss \njavascript\nreactjs\n sql");
  const [social, setSocial] = useState("github Link\n linkdin link");
  const [about, setAbout] = useState(
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit ghfjjkdjk efkgmtjng tgygyuhni  nafgaraje vindod sainath"
  );
  const [work, setWork] = useState([]);
  console.log("workz", work.length);
  const [workex, setWorkex] = useState([]);

  const [education, setEducation] = useState([]);
  const [todos, setTodos] = useState([]);

  const [projects, setProjects] = useState(
    "this is my first project\n this is my second project\n this is my third project"
  );

  const [certificate, setCertificate] = useState("CERTIFICATEL1\nCERTIFICATE2");

  const [showCertificate, setShowcertificate] = useState(true);

  const deleteHeading = () => {
    setShowcertificate(false);
  };

  const handleCertificatechange = (newCer) => {
    setCertificate(newCer);
  };

  // const handleDelete = () => {
  //   setCertificate("");
  // };
  const changeHandler = (e) => {
    setTodos(e.target.value);
  };

  const submitHandler = (e) => {
    setEducation([...education, e]);
  };

  const changeHandler1 = (e) => {
    setWorkex(e.target.value);
  };

  const sumbmitHandler1 = (e) => {
    setWork([...work, e]);
  };

  // const deleteHandler = (indexvalue) => {
  //   const newedu = education.filter((made, index) => index !== indexvalue);
  //   setEducation(newedu);
  // };
  const handleTextchange = (newText) => {
    setText(newText);
  };
  const handleRolechange = (newRole) => {
    setRole(newRole);
  };
  const handleAddresschange = (newAddress) => {
    setAddress(newAddress);
  };
  const handlePhonechange = (newPhone) => {
    setPhone(newPhone);
  };
  const handleEmailchange = (newEmail) => {
    setEmail(newEmail);
  };
  const handleSkillchange = (newSkill) => {
    setSkill(newSkill);
  };
  const handleSocialchange = (newSocial) => [setSocial(newSocial)];
  const handleAboutchange = (newAbout) => {
    setAbout(newAbout);
  };
  const handleWorkchange = (newWork) => {
    setWork(newWork);
  };

  const handleProjectschange = (newProjects) => {
    setProjects(newProjects);
  };
  const handleDelete = (index) => {
    setWork((prevState) => prevState.filter((_, i) => i !== index));
  };

  return (
    <div className="resume">
      <div className="resume1">
        <div className="resume_left">
          <div className="resume_profile">
            <img src="https://i.imgur.com/eCijVBe.png" alt="profile_pic" />
          </div>
          <div className="resume_content">
            <div className="resume_item resume_info">
              <div className="title">
                <center>
                  <p className="bold">{text}</p>
                </center>
              </div>
              <p
                id="2"
                style={{ color: "white", fontSize: "18px", marginLeft: "10px" }}
              >
                {role}
              </p>
              <div className="address">
                <ul>
                  <li>
                    <div className="icon">
                      <i className="fas fa-map-signs"></i>
                    </div>

                    <div className="data" id="3">
                      {address} <br />
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="fas fa-mobile-alt"></i>
                    </div>
                    <div className="data" id="4">
                      {phone}
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="fas fa-envelope"></i>
                    </div>
                    <div className="data" id="5">
                      {email}
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="resume_item resume_skills">
              <div className="title" id="7">
                <p
                  style={{
                    color: "white",
                    fontSize: "18px",
                    marginLeft: "10px",
                  }}
                >
                  skill's
                </p>

                {skill.split("\n").map((line, index) => (
                  <ul key={index}>
                    <li>{line}</li>
                  </ul>
                ))}
              </div>
            </div>
            {showCertificate && (
              <div className="certifi">
                <div className="tittle">
                  <p
                    style={{
                      color: "white",
                      fontSize: "18px",
                      marginLeft: "10px",
                    }}
                    id="12"
                  >
                    C E R T I F I C A T I O N 'S
                  </p>

                  {certificate.split("\n").map((line, index) => (
                    <ul key={index}>
                      <li>{line}</li>
                    </ul>
                  ))}
                </div>
              </div>
            )}
            <div className="resume_item resume_social">
              <div className="title" id="8">
                <p
                  style={{
                    color: "white",
                    fontSize: "18px",
                    marginLeft: "10px",
                  }}
                >
                  Social
                </p>
                {social.split("\n").map((line, index) => (
                  <ul key={index}>
                    <div>
                      <li>{line}</li>
                    </div>
                  </ul>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="resume_right">
          <div className="resume_item resume_about">
            <div className="title" id="9">
              <p className="bold">About us</p>
            </div>

            {about.split("\n").map((line, index) => (
              <ul key={index}>
                <li>{line}</li>
              </ul>
            ))}
          </div>
          <div className="resume_item resume_work">
            <div className="title" id="10">
              <p className="bold" onChange={changeHandler1}>
                Work Experience
              </p>
              <div>
                {work.length !== 0 ? (
                  <>
                    {work.map((ed, ind) => {
                      return (
                        <div key={ind}>
                          <ul>
                            <div>
                              <li>
                                {ed.startDate1} - {ed.endDate1}
                              </li>
                            </div>
                            <li>
                              <div> {ed.role}</div>
                            </li>
                            <li>
                              <div> {ed.company}</div>
                            </li>
                            <li>
                              <div>{ed.summary}</div>
                            </li>
                          </ul>
                          <hr></hr>
                        </div>
                      );
                    })}
                  </>
                ) : (
                  <ul>
                    <li>
                      <div>start Date - end Date</div>
                    </li>
                    <li>
                      <div>role</div>
                    </li>
                    <li>
                      <div>company</div>
                    </li>
                    <li>
                      <div>summary</div>
                    </li>
                  </ul>
                )}
              </div>
            </div>
          </div>
          <div className="resume_item resume_education">
            <div className="title" id="11">
              <p className="bold" onChange={changeHandler}>
                education
              </p>
              {education.length !== 0 ? (
                education.map((edu, ind) => (
                  <div key={ind}>
                    <ul>
                      <div>
                        <li>
                          {edu.startDate} - {edu.endDate}
                        </li>
                      </div>

                      <li>
                        <div> {edu.degree}</div>
                      </li>
                      <li>
                        <div> {edu.college}</div>
                      </li>
                      <li>
                        <div>{edu.specialization}</div>
                      </li>
                    </ul>
                    <hr></hr>
                  </div>
                ))
              ) : (
                <div>
                  <ul>
                    <li>
                      <div>start Date - end Date</div>
                    </li>
                    <li>
                      <div>degree</div>
                    </li>
                    <li>
                      <div>college</div>
                    </li>
                    <li>
                      <div>specialization</div>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>

          <div className="resume_hobby">
            <div className="title">
              <p className="bold" id="12">
                Projects
              </p>

              {projects.split("\n").map((line, index) => (
                <ul key={index}>
                  <li>{line}</li>
                </ul>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* <div className="right-edit-btn"> */}
      <Edit
        text={text}
        onTextChange={handleTextchange}
        role={role}
        onRolechange={handleRolechange}
        address={address}
        handleAddresschange={handleAddresschange}
        phone={phone}
        handlePhonechange={handlePhonechange}
        email={email}
        handleEmailchange={handleEmailchange}
        skill={skill}
        handleSkillchange={handleSkillchange}
        social={social}
        handleSocialchange={handleSocialchange}
        about={about}
        handleAboutchange={handleAboutchange}
        // work={work}
        // handleWorkchange={handleWorkchange}
        education={education}
        // handleEducationchange={changeHandler}
        submitHandler={submitHandler}
        submitHandler1={sumbmitHandler1}
        // deleteHandler={deleteHandler}
        deleteHeading={deleteHeading}
        projects={projects}
        handleProjectschange={handleProjectschange}
        certificate={certificate}
        handleCertificatechange={handleCertificatechange}
        pSetWork={setWork}
        // handleDelete={setWork}
      />
      {/* </div> */}
    </div>
  );
};

export default Template;
