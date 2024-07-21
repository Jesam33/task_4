import React from "react";
import Sidebar from "../component/Sidebar";
import Header from "../component/Header";
import MainContent from "../component/MainContent";


const Dashboard = () => {

  return (
    <div className="flex h-">
      <div className="sideBar w-[20%] md:w-[10%] lg:w-[20%] h-full ">
        <Sidebar />
      </div>
      <div className="main w-[80%] md:w-[90%]  bg-[#b1d5f12a]">
          <Header />
          <MainContent />
        </div>
    </div>
  );
};

export default Dashboard;