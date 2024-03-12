import React from "react";
import Subject from "../Components/Subject-Card/Subject";
import "./Css/Attendance.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const Attendance = () => {
  const dataTheory = [
    {
      name: "Overall",
      Individual: 90,
      Class: 92,
    },
    {
      name: "EM-2",
      Individual: 96,
      Class: 94,
    },
    {
      name: "Physics",
      Individual: 90,
      Class: 87,
    },
    {
      name: "Mechanics",
      Individual: 80,
      Class: 90,
    },
    {
      name: "BEE",
      Individual: 93,
      Class: 90,
    },
    {
      name: "Graphics",
      Individual: 96,
      Class: 91,
    },

    {
      name: "CS",
      Individual: 90,
      Class: 60,
    },
  ];
  const labTheory = [
    {
      name: "Overall",
      Individual: 93,
      Class: 98,
    },
    {
      name: "EM-2",
      Individual: 80,
      Class: 96,
    },
    {
      name: "Physics",
      Individual: 100,
      Class: 94,
    },
    {
      name: "Mechanics",
      Individual: 90,
      Class: 97,
    },
    {
      name: "BEE",
      Individual: 93,
      Class: 90,
    },
    {
      name: "Graphics",
      Individual: 85,
      Class: 97,
    },

    {
      name: "CAD",
      Individual: 80,
      Class: 90,
    },
    {
      name: "PBL",
      Individual: 100,
      Class: 98,
    },
  ];

  return (
    <>
      <div className="attendance">
        <div className="attendance-top">
          <h1>Attendance</h1>
          <div className="theory">
            <h2 className="text-muted sub-heading">Theory</h2>
            <div className="subjects">
              <Subject
                subCode="mth"
                subName="Overall Attendance"
                presentlec="126"
                totalLec={140}
                percent={90}
                icon={"pie_chart"}
              />
              <Subject
                subCode="cg"
                subName="Enginnering Mathematics-2"
                presentlec="29"
                totalLec={30}
                percent={96}
                icon={"functions"}
              />
              <Subject
                subCode="net"
                subName="Enginnering Physics"
                presentlec={27}
                totalLec={30}
                percent={90}
                icon={"biotech"}
              />
              <Subject
                subCode="cs"
                subName="Enginnering Mechanics"
                presentlec={24}
                totalLec={30}
                percent={80}
                icon={"architecture"}
              />
              <Subject
                subCode="mth"
                subName="Basic Electrical Enginnering"
                presentlec={28}
                totalLec={30}
                percent={93}
                icon={"mode"}
              />
              <Subject
                subCode="mth"
                subName="Enginnering Graphics"
                presentlec="18"
                totalLec={20}
                percent={96}
                icon={"draw"}
              />
              <Subject
                subCode="cs"
                subName="Communication Skills"
                presentlec="9"
                totalLec={10}
                percent={90}
                icon={"hub"}
              />
            </div>
            <div className="attendance-chart">
              <BarChart width={900} height={300} data={dataTheory}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Class" fill="#8884d8" />
                <Bar dataKey="Individual" fill="#82ca9d" />
              </BarChart>
            </div>
          </div>
          <div className="lab">
            <h2 className="text-muted sub-heading">Lab</h2>
            <div className="subjects">
              <Subject
                subCode="mth"
                subName="Overall Attendance"
                presentlec="56"
                totalLec={60}
                percent={93}
                icon={"pie_chart"}
              />
              <Subject
                subCode="cg"
                subName="Enginnering Mathematics-2"
                presentlec="8"
                totalLec={10}
                percent={80}
                icon={"functions"}
              />
              <Subject
                subCode="net"
                subName="Enginnering Physics"
                presentlec={10}
                totalLec={10}
                percent={100}
                icon={"biotech"}
              />
              <Subject
                subCode="cs"
                subName="Enginnering Mechanics"
                presentlec={9}
                totalLec={10}
                percent={90}
                icon={"architecture"}
              />
              <Subject
                subCode="mth"
                subName="Basic Electrical Enginnering"
                presentlec={28}
                totalLec={30}
                percent={93}
                icon={"mode"}
              />
              <Subject
                subCode="net"
                subName="Enginnering Graphics"
                presentlec="6"
                totalLec={7}
                percent={85}
                icon={"draw"}
              />
              <Subject
                subCode="mth"
                subName="Computer Aided Design"
                presentlec="8"
                totalLec={10}
                percent={80}
                icon={"dvr"}
              />
              <Subject
                subCode="cs"
                subName="Project Based Learning"
                presentlec="10"
                totalLec={10}
                percent={100}
                icon={"explore"}
              />
            </div>
            <div className="attendance-chart">
              <BarChart width={900} height={300} data={labTheory}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Class" fill="#8884d8" />
                <Bar dataKey="Individual" fill="#82ca9d" />
              </BarChart>
            </div>
          </div>
        </div>
        <div className="attendance-bottom"></div>
      </div>
    </>
  );
};

export default Attendance;
