/* eslint-disable react/prop-types */
export function Education({
  showInfos,
  setShowInfos,
  generalInfos,
  setGeneralInfos,
}) {
  return (
    <section className="educationSection">
      {editCV(generalInfos, setGeneralInfos, showInfos, setShowInfos)}
    </section>
  );
}

function editCV(generalInfos, setGeneralInfos, showInfos, setShowInfos) {
  return (
    <>
      <h1>Education</h1>
      <label htmlFor="schoolName">
        School Name
        <input
          id="schoolName"
          type="text"
          placeholder="School"
          value={generalInfos.schoolName}
          onChange={(e) =>
            setGeneralInfos({ ...generalInfos, schoolName: e.target.value })
          }
        />
      </label>
      <label htmlFor="titleOfStudy">
        Title of study
        <input
          id="titleOfStudy"
          placeholder="Your title"
          type="text"
          value={generalInfos.titleOfStudy}
          onChange={(e) =>
            setGeneralInfos({ ...generalInfos, titleOfStudy: e.target.value })
          }
        />
      </label>

      <label htmlFor="dateOfStudy">
        Date of study
        <input
          type="numbers"
          id="dateOfStudy"
          placeholder="MMYY - MMYY"
          value={generalInfos.dateOfStudy}
          onChange={(e) =>
            setGeneralInfos({ ...generalInfos, dateOfStudy: e.target.value })
          }
        />
      </label>
    </>
  );
}
