import React from "react";
import ProjectBody from "../Components/ProjectBody";
import SideBar from "../Components/SideBar";

const Dashboard = () => {
  const [add, showAdd]= React.useState(false)
  return <div>
    <SideBar showAdd={showAdd} add={add}/>
    <ProjectBody/>
  </div>;
};

export default Dashboard;