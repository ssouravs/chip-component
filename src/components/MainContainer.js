import React, { useState } from "react";
import ChipsContainer from "./ChipsContainer";
import InputContainer from "./InputContainer";
import { skills } from '../utils/dataset'

function MainContainer() {
  const [input, setInput] = useState("");
  const [skillSet, setSkillSet] = useState([...skills]);
  const [chipData, setChipData] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [showRecommendation, setShowRecommendation] = useState(false);

  const handleInputChange = (e) => {
    const inputVal = e.target.value;
    setInput(inputVal);

    if (inputVal === "") {
      setFilteredList([...skillSet]);
    } else {
      setFilteredList((prevList) =>
        skillSet.filter((skill) => skill.toLowerCase().startsWith(inputVal.toLowerCase()))
      );
    }

    setShowRecommendation(inputVal !== "" && filteredList.length > 0);
  };

  const handleChips = (chipValue) => {
    setChipData([...chipData, chipValue]);
    setSkillSet(skillSet.filter((skill) => skill !== chipValue));
    setFilteredList(filteredList.filter((item) => item !== chipValue));
    setInput("");
  };

  const chipButtonsHandler = (data) => {
    setChipData(chipData.filter((chip) => data !== chip));
    setSkillSet([...skillSet, data]);
  };

  return (
    <div className="main-container">
      <ChipsContainer chipData={chipData} chipButtonsHandler={chipButtonsHandler} />
      <InputContainer
        input={input}
        handleInputChange={handleInputChange}
        showRecommendation={showRecommendation}
        handleChips={handleChips}
        filteredList={filteredList}
      />
    </div>
  );
}

export default MainContainer;
