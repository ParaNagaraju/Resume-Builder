import React, { useState } from "react";

const Edit = (props) => {
  const [education, setEducation] = useState({
    startDate: "",
    endDate: "",
    college: "",
    specialization: "",
  });
  const [educationList, setEducationList] = useState([]);

  const [work, setWork] = useState({
    startDate1: "",
    endDate1: "",
    role: "",
    company: "",
    summary: "",
  });
  const [workList, setWorkList] = useState([]);
  console.log("worklist", workList);

  const [showForm, setShowForm] = useState(false);

  const changeNameas = (e) => {
    props.onTextChange(e.target.value);
  };

  const changeRoleas = (e) => {
    props.onRolechange(e.target.value);
  };

  const changeAddressas = (e) => {
    props.handleAddresschange(e.target.value);
  };

  const changePhoneas = (e) => {
    props.handlePhonechange(e.target.value);
  };

  const changeEmailas = (e) => {
    props.handleEmailchange(e.target.value);
  };
  const changeSkillas = (e) => {
    props.handleSkillchange(e.target.value);
  };
  const changeAboutas = (e) => {
    props.handleAboutchange(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setEducationList([...educationList, education]);
    props.psetEducation([...educationList, education]);
  };
  const sumbmitHandler1 = (e) => {
    e.preventDefault();
    setWorkList([...workList, work]);
    props.pSetWork([...workList, work]);

  };

  function deleteWork1(e, ind) {
    e.preventDefault();
    console.log("event", e);
    console.log("index", ind);
    setEducationList(educationList.filter((_, i) => i !== ind));
    props.psetEducation(educationList.filter((_, i) => i !== ind));
  }

  function deleteWork(e, ind) {
    e.preventDefault();
    console.log("event", e);
    console.log("index", ind);
    setWorkList(workList.filter((_, i) => i !== ind));
    props.pSetWork(workList.filter((_, i) => i !== ind));

   
  }
  const changeProjectsas = (e) => {
    props.handleProjectschange(e.target.value);
  };
  const changeSocialas = (e) => {
    props.handleSocialchange(e.target.value);
  };
  const changeCeras = (e) => {
    props.handleCertificatechange(e.target.value);
  };
  const deleteHead = (e) => {
    e.preventDefault();
    props.deleteHeading(e.target.value);
  };

  return (
    <div className="edit-form" style={{ color: "black" }}>
      <button onClick={() => setShowForm(!showForm)}>Edit</button>
      {showForm && (
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            marginTop: "20px",
          }}
        >
          <input
            type="text"
            placeholder="name"
            onChange={changeNameas}
            className="input-fields"
          />
          <input
            type="text"
            name="role"
            onChange={changeRoleas}
            placeholder="role"
            className="input-fields"
          />
          {/* <label> */}
          <input
            type="text"
            name="address"
            placeholder="Address"
            onChange={changeAddressas}
            className="input-fields"
          />
          <input
            type="text"
            name="phoneno"
            placeholder="phoneno"
            onChange={changePhoneas}
            className="input-fields"
          />
          <input
            type="text"
            name="email"
            placeholder="email"
            onChange={changeEmailas}
            className="input-fields"
          />
          <label>
            <textarea
              name="skills"
              onChange={changeSkillas}
              rows="3"
              cols="40"
              placeholder="skills
              {use enter to add multiple skills}"
            ></textarea>
          </label>
          <label>
            {/* CERTIFICATION: */}
            <textarea
              name="certificate"
              onChange={changeCeras}
              rows="3"
              cols="40"
              placeholder="Certificates
              {use enter to add multiple Certificates}"
            ></textarea>
            <br></br>
            <button onClick={deleteHead}>delete</button>
          </label>
          <br></br>
          <label>
            {/* Social */}
            <textarea
              rows="3"
              cols="40"
              name="Social"
              onChange={changeSocialas}
              placeholder="social 
              {use enter to add multiple links}"
            ></textarea>
          </label>
          <br></br>
          <div>
            <textarea
              name="aboutus"
              onChange={changeAboutas}
              rows="3"
              cols="40"
              placeholder="Profile Summary"
            ></textarea>
          </div>
          Work Experience
          <div className="work">
            <label>
              <input
                type="date"
                style={{ width: "35%", height: "25px" }}
                onChange={(e) =>
                  setWork((prevWork) => ({
                    ...prevWork,
                    startDate1: e.target.value,
                  }))
                }
                placeholder="from"
              ></input>
              <input
                type="date"
                style={{ width: "35%", marginLeft: "10px", height: "25px" }}
                onChange={(e) =>
                  setWork((prevWork) => ({
                    ...prevWork,
                    endDate1: e.target.value,
                  }))
                }
                placeholder="to"
              ></input>
              <input
                type="text"
                style={{ margin: "1%", height: "25px" }}
                placeholder="role"
                onChange={(e) =>
                  setWork((prevWork) => ({
                    ...prevWork,
                    role: e.target.value,
                  }))
                }
              ></input>
              <br></br>
              <input
                type="text"
                style={{ margin: "2%", height: "25px" }}
                onChange={(e) =>
                  setWork((prevWork) => ({
                    ...prevWork,
                    company: e.target.value,
                  }))
                }
                placeholder="company Name"
              ></input>
              <br></br>
              <input
                type="text"
                style={{ margin: "2%", height: "25px" }}
                onChange={(e) =>
                  setWork((prevWork) => ({
                    ...prevWork,
                    summary: e.target.value,
                  }))
                }
                placeholder="summary"
              ></input>
            </label>

            {workList.map((ed, ind) => {
              console.log("index", ind);
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
                  <button onClick={(e) => deleteWork(e, ind)}>delete</button>
                </div>
              );
            })}

            <input
              type="submit"
              style={{ height: "40px" }}
              onClick={(e) => sumbmitHandler1(e)}
              value="Add"
              name="Add"
            ></input>
          </div>
          <br></br>
          <br></br>
          Education
          <div className="work">
            <label>
              <input
                type="date"
                style={{ width: "35%", height: "25px" }}
                onChange={(e) =>
                  setEducation((prevWork) => ({
                    ...prevWork,
                    startDate: e.target.value,
                  }))
                }
                placeholder="from"
              ></input>
              <input
                type="date"
                style={{ width: "35%", marginLeft: "10px", height: "25px" }}
                onChange={(e) =>
                  setEducation((prevWork) => ({
                    ...prevWork,
                    endDate: e.target.value,
                  }))
                }
                placeholder="to"
              ></input>
              <br></br>
              <input
                type="text"
                style={{ margin: "2%", height: "25px" }}
                onChange={(e) =>
                  setEducation((prevWork) => ({
                    ...prevWork,
                    college: e.target.value,
                  }))
                }
                placeholder="university or college"
              ></input>
              <br></br>
              <input
                type="text"
                style={{ margin: "2%", height: "25px" }}
                onChange={(e) =>
                  setEducation((prevWork) => ({
                    ...prevWork,
                    specialization: e.target.value,
                  }))
                }
                placeholder="specialization"
              ></input>
            </label>

            {educationList.map((ed, ind) => {
              console.log("index", ind);
              return (
                <div key={ind}>
                  <ul>
                    <div>
                      <li>
                        {ed.startDate} - {ed.endDate}
                      </li>
                    </div>
                   
                    <li>
                      <div> {ed.college}</div>
                    </li>
                    <li>
                      <div>{ed.specialization}</div>
                    </li>
                  </ul>
                  <button onClick={(e) => deleteWork1(e, ind)}>delete</button>
                </div>
              );
            })}

            <input
              type="submit"
              style={{ height: "30px" }}
              onClick={(e) => submitHandler(e)}
              value="Add"
              name="Add"
            ></input>

           
          </div>
          <label>
            <textarea
              placeholder=" Projects"
              name="projects"
              onChange={changeProjectsas}
              rows="3"
              cols="40"
            ></textarea>
          </label>
          <br></br>
        </form>
      )}
    </div>
  );
};

export default Edit;
