import React from "react";

function InputContainer({ input, handleInputChange, showRecommendation, handleChips, filteredList }) {
  return (
    <div className="input-container">
      <div className="input-box">
        <input
          value={input}
          onChange={handleInputChange}
          placeholder="Type your input here"
          className="input"
        />
      </div>
      {showRecommendation && (
        <div className="recommendation">
          <ul className="recommended-item">
            {filteredList.map((item, index) => (
              <li key={index} onClick={() => handleChips(item)}>
                <div className="chip-item">
                  <img
                    src="https://cdn.glitch.me/project-avatar/168c2849-9b38-4b27-9d79-31c05b054a21.png"
                    alt="img-logo"
                    className="logo-img"
                  />
                  <span>{item}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default InputContainer;
