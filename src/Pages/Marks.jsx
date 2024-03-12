import React from "react";
import Subject from "../Components/Subject-Card/Subject";
import "./Css/Marks.css";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const Marks = () => {
  const data = [
    {
      name: "Maths-2",
      marks: 29,
    },
    {
      name: "Physics",
      marks: 18,
    },
    {
      name: "BEE",
      marks: 28,
    },
    {
      name: "Mechanics",
      marks: 24,
    },
  ];

  return (
    <div className="marks">
      <h1>Marks</h1>
      <div className="marks-top">
        <div className="subjects">
          <Subject
            subCode="mth"
            subName="Enginnering Mathematics-2"
            presentlec="29"
            totalLec={30}
            percent={96}
            icon={"functions"}
          />
          <Subject
            subCode="cs"
            subName="Enginnering Physics"
            presentlec={18}
            totalLec={30}
            percent={60}
            icon={"biotech"}
          />
          <Subject
            subCode="cg"
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
        </div>
      </div>
      <div className="marks-bottom">
        <AreaChart
          width={1000}
          height={250}
          data={data}
          margin={{ top: 40, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={1} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="1 1" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="marks"
            stroke="#8884d8"
            fillOpacity={0.5}
            fill="url(#colorPv)"
          />
        </AreaChart>
      </div>
    </div>
  );
};

export default Marks;
