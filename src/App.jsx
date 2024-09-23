import { useState } from "react";
import "./style/App.css";
import "./style/reset.css";
import { Infos, Education, Experience, ImageUploader } from "./components";

export default function App() {
  const [editInfo, setEditInfo] = useState({});
  const [showInfos, setShowInfos] = useState(false);
  const [generalInfos, setGeneralInfos] = useState({
    name: "Gino",
    lastName: "Pinoli",
    phone: "phone213465756485",
    schoolName: "schoolMamel",
    dateOfStudy: "1234444 -43211",
    titleOfStudy: "titleTOP",
    companyName: "Penguins",
    positionTitle: "positionCEO",
    responsabilities: "responsibleAlot",
    dateWorking: "124334 - 342112",
  });

  return (
    <>
      {showInfos
        ? showCV(generalInfos, editInfo, setEditInfo, setGeneralInfos)
        : editCV(generalInfos, setGeneralInfos, showInfos, setShowInfos)}
    </>
  );
}

function editCV(generalInfos, setGeneralInfos, showInfos, setShowInfos) {
  return (
    <div className="cvContainer">
      <Infos
        showInfos={showInfos}
        setShowInfos={setShowInfos}
        generalInfos={generalInfos}
        setGeneralInfos={setGeneralInfos}
      />
      <Education
        showInfos={showInfos}
        setShowInfos={setShowInfos}
        generalInfos={generalInfos}
        setGeneralInfos={setGeneralInfos}
      />
      <Experience
        showInfos={showInfos}
        setShowInfos={setShowInfos}
        generalInfos={generalInfos}
        setGeneralInfos={setGeneralInfos}
      />
      <button className="submitButton" onClick={() => setShowInfos(!showInfos)}>
        💾
      </button>
    </div>
  );
}

function showCV(generalInfos, editInfo, setEditInfo, setGeneralInfos) {
  const education = ["schoolName", "dateOfStudy", "titleOfStudy"];
  const experience = [
    "companyName",
    "positionTitle",
    "responsabilities",
    "dateWorking",
  ];
  const contact = ["name", "lastName", "phone"];
  const calls = { editInfo, setEditInfo, generalInfos, setGeneralInfos };
  return (
    <>
      <h1 className="cvTitle">
        {generalInfos.name + " " + generalInfos.lastName}
      </h1>
      <div className="cvVisualContainer">
        {/* LEFT */}
        <div className="leftSide">
          <div className="mainDiv">
            <h2>EDUCATION</h2>
            <div className="educationDiv sectionDiv">
              {education.map((item) => makeEditableItem(item, calls))}
            </div>
          </div>
          <div className="mainDiv">
            <h2>EXPERIENCE</h2>
            <div className="experienceDiv sectionDiv">
              {experience.map((item) => makeEditableItem(item, calls))}
            </div>
          </div>
        </div>
        {/* RIGHT */}
        <div className="rightSide">
          <div className="mainDiv imgUploadDiv">
            <ImageUploader />
          </div>
          <div className="mainDiv">
            <h2>CONTACT ME</h2>
            <div className="contactMeDiv sectionDiv">
              {contact.map((item) => makeEditableItem(item, calls))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function makeEditableItem(item, calls) {
  const { editInfo, setEditInfo, generalInfos, setGeneralInfos } = calls;

  return !editInfo[item] ? (
    <div
      className={item + "Container " + "infoAndButtonContainer"}
      onClick={() => setEditInfo((prev) => ({ ...prev, [item]: !prev[item] }))}
    >
      <div className={item + "Div " + "infoDiv"}>
        {generalInfos[item]}
        <button
          className={item + "Button " + "infoButton"}
          onClick={() =>
            setEditInfo((prev) => ({ ...prev, [item]: !prev[item] }))
          }
        >
          ✏️
        </button>
      </div>
    </div>
  ) : (
    <div className={item + "Container" + "infoAndButtonContainer"}>
      <input
        autoFocus
        className={item + "Input"}
        value={generalInfos[item]}
        onChange={(e) =>
          setGeneralInfos({ ...generalInfos, [item]: e.target.value })
        }
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            setEditInfo((prev) => ({ ...prev, [item]: !prev[item] }));
          }
        }}
      />
      <button
        className={item + "Button"}
        onClick={() =>
          setEditInfo((prev) => ({ ...prev, [item]: !prev[item] }))
        }
      >
        ✅
      </button>
    </div>
  );
}
