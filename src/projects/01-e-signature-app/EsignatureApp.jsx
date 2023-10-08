import React, { useState } from "react";
import Title from "../components/Title";

export default function EsignatureApp() {
  const [name, setName] = useState("Your Signature");
  const [date, setDate] = useState("Select Date");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const inputStyle = {
    border: "none",
    borderBottom: "2px dotted",
    outline: "none",
    padding: ".35rem 0",
  };
  document.body.style.background = "#eee";
  return (
    <div className="container text-center">
      <Title classes={"title"} text={name} />
      <Title classes={"main-title mb-4"} text={!date ? "DoB" : date} />
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda illo
        natus nulla omnis, tenetur fugiat consequuntur voluptatem officia
        explicabo nobis repellendus, labore pariatur architecto at quis hic.
        Vel, esse minus?
      </p>
      <footer
        className="d-flex"
        style={{
          justifyContent: "space-around",
          position: "relative",
          top: "40vh",
        }}
      >
        <input
          type="date"
          value={""}
          style={inputStyle}
          onChange={handleDateChange}
        />
        <input
          type="text"
          value={name}
          style={inputStyle}
          onChange={handleNameChange}
        />
      </footer>
    </div>
  );
}
