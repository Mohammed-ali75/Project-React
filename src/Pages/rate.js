import React from "react";

function rate({ name, percent }) {
  const NPercent = (percent * 121) / 100;
  const styler1 = {
    strokeDasharray: `${NPercent} 100`,
  };
  const styleRd1 = {
    position: "relative",
  };
  return (
    <>
      <div style={styleRd1}>
        <svg
          className="circle-container"
          viewBox="2 -2 28 36"
          xmlns="http://www.w3.org/2000/svg"
        >
          <linearGradient id="gradient">
            <stop className="stop1" offset="0%" />
            <stop className="stop2" offset="100%" />
          </linearGradient>
          <circle
            className="circle-container__progress"
            r="16"
            cx="16"
            cy="16"
            style={styler1}
            shape-rendering="geometricPrecision"
          ></circle>
        </svg>
        <div className="AllHRate">
          <h2 className="h2Rate">{percent}%</h2>
          <h3 className="h3Rate">{name}</h3>
        </div>
      </div>
    </>
  );
}

export default rate;
