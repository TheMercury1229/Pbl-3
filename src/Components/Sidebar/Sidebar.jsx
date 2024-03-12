import React from "react";
import "./Sidebar.css";
import profileImg from "../../assets/assets/Profileimage.webp";
const Sidebar = () => {
  const sidebarItems = [
    {
      title: "Course",
      content: " BE. Artificial Intelligence And Data Science",
    },
    { title: "DOB", content: "28-Feb-2004" },
    { title: "Contact", content: "1234567890" },
    { title: "Email", content: "abc@gmail.com" },
    { title: "Address", content: "Ghost town Road, New York, America" },
  ];
  return (
    <aside>
      <div className="profile">
        <div className="top">
          <div className="profile-photo">
            <img src={profileImg} alt="StudentImg" />
          </div>
          <div className="info">
            <p>
              Hey, <strong>Alex</strong>{" "}
            </p>
            <small className="text-muted">11209</small>
          </div>
        </div>
        <div className="about">
          {sidebarItems.map((item) => (
            <div key={item.title}>
              <h5>{item.title}</h5>
              <p>{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
