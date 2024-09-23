/* eslint-disable react/prop-types */
import { useState } from "react";

export function Infos({
  showInfos,
  setShowInfos,
  generalInfos,
  setGeneralInfos,
}) {
  return (
    <section className="infosSection">
      {editCV(generalInfos, setGeneralInfos, showInfos, setShowInfos)}
    </section>
  );
}

function editCV(generalInfos, setGeneralInfos, showInfos, setShowInfos) {
  return (
    <>
      <h1>Personal informations</h1>
      <label htmlFor="name">
        Name
        <input
          id="name"
          type="text"
          placeholder="Your Name"
          value={generalInfos.name}
          onChange={(e) => setGeneralInfos({ ...generalInfos, name: e.target })}
        />
      </label>

      <label>
        Last Name
        <input
          placeholder="Your Last Name"
          type="text"
          value={generalInfos.lastName}
          onChange={(e) =>
            setGeneralInfos({ ...generalInfos, lastName: e.target.value })
          }
        />
      </label>

      <label htmlFor="phone">
        Phone Number
        <input
          type="tel"
          id="phone"
          placeholder="Your phone Number"
          value={generalInfos.phone}
          onChange={(e) =>
            setGeneralInfos({ ...generalInfos, phone: e.target.value })
          }
        />
      </label>
      <div className="buttons"></div>
    </>
  );
}
