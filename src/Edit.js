import React, { useState } from "react";

const Edit = (props) => {
  const [startDate, setStartDate] = useState("2015");
  const [endDate, setEndDate] = useState("2018");
  const [college, setCollege] = useState("college");
  const [degree, setDegree] = useState("degree");
  const [specialization, setSpecialization] = useState("specialization");

  const [startDate1, setStartDate1] = useState("2015");
  const [endDate1, setEndDate1] = useState("2018");
  const [role, setRole] = useState("role");
  const [company, setCompany] = useState("company Name");
  const [summary, setSummary] = useState("summary");

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

  // const changeWork = (e) => {
  //   props.handleWorkchange(e.target.value);
  // };
  // const deleteHandler = (e) => {
  //   e.preventDefault();
  //   props.deleteHandler(e.target.value);
  // };

  const submitHandler = (e) => {
    e.preventDefault();
    props.submitHandler({
      startDate,
      endDate,
      degree,
      college,
      specialization,
    });
  };

  const sumbmitHandler1 = (e) => {
    e.preventDefault();
    props.submitHandler1({
      startDate1,
      endDate1,
      role,
      company,
      summary,
    });
  };
  const changeProjectsas = (e) => {
    props.handleProjectschange(e.target.value);
  };
  const changeSocialas = (e) => {
    props.handleSocialchange(e.target.value);
  };
  const changeCeras = (e) => {
    props.handleCertificatechange(e.target.value);
  };

  return (
    <div className="edit-form" style={{ color: "black" }}>
      <form>
        <input type="text" placeholder="name" onChange={changeNameas} />
        <input
          type="text"
          name="role"
          onChange={changeRoleas}
          placeholder="role"
        />
        <label>
          <input
            type="text"
            name="address"
            placeholder="Address"
            onChange={changeAddressas}
          />
        </label>
        <br></br>
        <label>
          <input
            type="text"
            name="phoneno"
            placeholder="phoneno"
            onChange={changePhoneas}
          />
        </label>
        <br></br>
        <label>
          <input
            type="text"
            name="email"
            placeholder="email"
            onChange={changeEmailas}
          />
        </label>
        <br></br>
        <label>
          Skills:
          {/* <textarea name="text" onChange={changeSkillas}  /> */}
          <textarea
            name="skills"
            onChange={changeSkillas}
            rows="2"
            cols="30"
          ></textarea>
        </label>
        <label>
          CERTIFICATION:
          <textarea
            name="certificate"
            onChange={changeCeras}
            rows="2"
            cols="30"
          ></textarea>
        </label>
        <br></br>
        <label>
          Social
          <textarea
            name="Social"
            onChange={changeSocialas}
            rows="2"
            cols="30"
          ></textarea>
        </label>
        <br></br>
        <label>
          Aboutus
          <textarea
            name="aboutus"
            onChange={changeAboutas}
            rows="2"
            cols="30"
          ></textarea>
          work Experience
          <div className="work">
            <label>
              <input
                type="date"
                style={{ width: "35%", height: "25px" }}
                onChange={(e) => setStartDate1(e.target.value)}
                placeholder="from"
              ></input>
              <input
                type="date"
                style={{ width: "35%", marginLeft: "10px", height: "25px" }}
                onChange={(e) => setEndDate1(e.target.value)}
                placeholder="to"
              ></input>
              <input
                type="text"
                style={{ margin: "1%", height: "25px" }}
                placeholder="role"
                onChange={(e) => setRole(e.target.value)}
              ></input>
              <br></br>
              <input
                type="text"
                style={{ margin: "2%", height: "25px" }}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="company Name"
              ></input>
              <br></br>
              <input
                type="text"
                style={{ margin: "2%", height: "25px" }}
                onChange={(e) => setSummary(e.target.value)}
                placeholder="summary"
              ></input>
            </label>

            <input
              type="submit"
              style={{ height: "40px" }}
              onClick={(e) => sumbmitHandler1(e)}
              value="Add"
              name="Add"
            ></input>
          </div>
          <br></br>
        </label>
        <br></br>
        Education
        <div className="work">
          <label>
            <input
              type="date"
              style={{ width: "35%", height: "25px" }}
              onChange={(e) => setStartDate(e.target.value)}
              placeholder="from"
            ></input>
            <input
              type="date"
              style={{ width: "35%", marginLeft: "10px", height: "25px" }}
              onChange={(e) => setEndDate(e.target.value)}
              placeholder="to"
            ></input>
            <input
              type="text"
              style={{ margin: "1%", height: "25px" }}
              placeholder="degree"
              onChange={(e) => setDegree(e.target.value)}
            ></input>
            <br></br>
            <input
              type="text"
              style={{ margin: "2%", height: "25px" }}
              onChange={(e) => setCollege(e.target.value)}
              placeholder="university or college"
            ></input>
            <br></br>
            <input
              type="text"
              style={{ margin: "2%", height: "25px" }}
              onChange={(e) => setSpecialization(e.target.value)}
              placeholder="specialization"
            ></input>
          </label>
          <input
            type="submit"
            style={{ height: "40px" }}
            onClick={(e) => submitHandler(e)}
            value="Add"
            name="Add"
          ></input>

          {/* <input
            type="submit"
            value="delete"
            style={{ height: "40px" }}
            name="Add"
            onClick={(index) => deleteHandler(index)}
          ></input> */}
        </div>
        <label>
          Projects
          <textarea
            name="projects"
            onChange={changeProjectsas}
            rows="4"
            cols="30"
          ></textarea>
        </label>
        <br></br>
      </form>
    </div>
  );
};

export default Edit;
