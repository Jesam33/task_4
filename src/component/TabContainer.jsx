import React, { useState, useEffect } from "react";
import Tab from "./Tab";
import TabContent from "./TabContent";
import SignUpForm from "./SignUpForm";
import LoginForm from "./LoginForm";

import CloseIcon from "@mui/icons-material/Close";

const TabContainer = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [currentStep, setCurrentStep] = useState(1);
  const [pendingLoginTabSwitch, setPendingLoginTabSwitch] = useState(false);

  const handleSwitchToLoginTab = () => {
    setPendingLoginTabSwitch(true);
    console.log('Working')
  };

  const handleNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  useEffect(() => {
    if (pendingLoginTabSwitch) {
      setActiveTab(1); // Assuming the second tab (index 1) is the login tab
      // setCurrentStep(1); // Reset step to initial step when switching to login tab
      setPendingLoginTabSwitch(false); // Reset the pending state
    }
  }, [pendingLoginTabSwitch]);

  



  const tabData = [
    {
      label: "Register",
      content: (
        <SignUpForm
          switchToLoginTab={handleSwitchToLoginTab}
          switchToNextStep={handleNextStep}
        />
      ),
    },
    { label: "Log In", content: <LoginForm /> },
  ];

  // bg-[#fbfbfb]

  return (
    <div className="tabs bg-red-900  w-full h-screen flex justify-center items-center">
      <div className="bg-[#ffffff] relative shadow-xl w-[95%] md:w-[50%] lg:w-[40%] rounded-[20px] lg:px-8 px-5 md:px-5 py-4 h-[85%]  ">
        <div className="tab-list w-full flex items-center justify-between py-2">
          {currentStep === 1 ? (
            <div className="flex gap-3">
              {tabData.map((tab, index) => (
                <Tab
                  key={index}
                  label={tab.label}
                  isActive={index === activeTab}
                  onClick={() => setActiveTab(index)}
                />
              ))}
            </div>
          ) : (
            <h2>
              {currentStep === 2
                ? "Personal Details"
                : currentStep === 4
                ? ""
                : "Additional Details"}
            </h2>
          )}

          <CloseIcon />
        </div>
        <div className="tab-content-list">
          {tabData.map((tab, index) => (
            <TabContent key={index} isActive={index === activeTab}>
              {tab.content}
            </TabContent>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TabContainer;
