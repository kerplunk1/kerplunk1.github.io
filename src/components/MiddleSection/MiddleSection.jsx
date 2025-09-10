import ExperienceDetails from "../ExperienceDetails/ExperienceDetails";
import Contacts from "../Contacts/Contacts";
import AboutMe from "../AboutMe/AboutMe";
import Tabs from "../Tabs/Tabs";
import { useState } from "react";


export default function MiddleSection() {
  const [activeTab, setActiveTab] = useState("about");

  const renderTabContent = () => {
    switch (activeTab) {
      case "about":
        return <AboutMe />;
      case "experience":
        return <ExperienceDetails />;
      case "contacts":
        return <Contacts />;
    }
  };

  return (
    <>
      <section className="middle">
        <Tabs activeKey={activeTab} onSelect={setActiveTab} className="tabs"/>
        <div>{renderTabContent()}</div>
      </section>
    </>
  );
}