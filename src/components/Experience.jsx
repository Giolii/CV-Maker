/* eslint-disable react/prop-types */
export function Experience({
  showInfos,
  setShowInfos,
  generalInfos,
  setGeneralInfos,
}) {
  return (
    <section className="experienceSection">
      {editCV(generalInfos, setGeneralInfos, showInfos, setShowInfos)}
    </section>
  );
}

function editCV(generalInfos, setGeneralInfos, showInfos, setShowInfos) {
  return (
    <>
      <h1>Experience</h1>
      <label htmlFor="companyName">
        Company Name
        <input
          id="companyName"
          type="text"
          placeholder="Company"
          value={generalInfos.companyName}
          onChange={(e) =>
            setGeneralInfos({ ...generalInfos, companyName: e.target.value })
          }
        />
      </label>
      <label htmlFor="positionTitle">
        Position Title
        <input
          id="position Title"
          placeholder="junior / senior"
          type="text"
          value={generalInfos.positionTitle}
          onChange={(e) =>
            setGeneralInfos({ ...generalInfos, positionTitle: e.target.value })
          }
        />
      </label>

      <label htmlFor="responsabilities">
        Responsabilities
        <input
          type="text"
          id="responsabilities"
          placeholder="Your responsabilities"
          value={generalInfos.responsabilities}
          onChange={(e) =>
            setGeneralInfos({
              ...generalInfos,
              responsabilities: e.target.value,
            })
          }
        />
      </label>

      <label htmlFor="dateWorking">
        Date working
        <input
          type="dateWorking"
          id="dateWorking"
          placeholder="MMYY - MMYY"
          value={generalInfos.dateWorking}
          onChange={(e) =>
            setGeneralInfos({
              ...generalInfos,
              dateWorking: e.target.value,
            })
          }
        />
      </label>
    </>
  );
}
