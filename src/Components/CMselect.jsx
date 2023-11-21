import React from "react";

const SelectInput = () => {
  return (
    <div>
      <select
        style={{
          width: "100%",
          padding: "8px",
          boxSizing: "border-box",
          height: "60px",
          marginTop: "20px",
        }}
      >
        <option value="option1">--Select--</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
        {/* Add more options as needed */}
      </select>
    </div>
  );
};

export default SelectInput;
