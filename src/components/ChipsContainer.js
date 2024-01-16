import React from "react";

function ChipsContainer({ chipData, chipButtonsHandler }) {
  return (
    <div className="chips-container">
      <ul className="chips">
        {chipData.map((data, index) => (
          <li key={index}>
            <div className="chip-btn">
              <img
                src="https://cdn.glitch.me/project-avatar/168c2849-9b38-4b27-9d79-31c05b054a21.png"
                alt="img-logo"
                className="logo-img-chip"
              />
              <span className="chip-data">{data}</span>
              <span className="del-chip" onClick={() => chipButtonsHandler(data)}>
                X
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ChipsContainer;
