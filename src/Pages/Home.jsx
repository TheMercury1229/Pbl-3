import React from "react";
import "./Css/Home.css";
import Subject from "../Components/Subject-Card/Subject";
import TimeTable from "../Components/TimeTable/Timetable.jsx";
// import TimeTable from "../Components/Table/Table";
const Home = () => {
  return (
    <>
      <h1>Attendance</h1>
      <div className="subjects">
        <Subject
          subCode="eg"
          subName="Enginnering Graphics"
          presentlec="12"
          totalLec={14}
          percent={86}
          icon={"draw"}
        />
        <Subject
          subCode="mth"
          subName="Enginnering Mathematics-2"
          presentlec="27"
          totalLec={29}
          percent={93}
          icon={"functions"}
        />
        <Subject
          subCode="cs"
          subName="Enginnering Physics"
          presentlec={27}
          totalLec={30}
          percent={90}
          icon={"biotech"}
        />
        <Subject
          subCode="cg"
          subName="Enginnering Mechanics"
          presentlec={24}
          totalLec={25}
          percent={96}
          icon={"architecture"}
        />
        <Subject
          subCode="mth"
          subName="Basic Electrical Enginnering"
          presentlec={24}
          totalLec={25}
          percent={96}
          icon={"mode"}
        />
      </div>

      <h1>Timetable</h1>
      <TimeTable />
    </>
  );
};

export default Home;
