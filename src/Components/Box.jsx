import React from "react";

const Box = ({ text,textColor,lightBackground }) => {
  return (
    <div
      style={{
        border: `2px solid ${textColor}`,
        backgroundColor: lightBackground, 
        color: textColor,
        padding: "20px",
        borderRadius: "5px", 
      }}
    >
      {text}
    </div>
  );
};

export default Box;
