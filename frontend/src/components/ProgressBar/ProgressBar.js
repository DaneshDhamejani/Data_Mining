import React from "react";

const ProgressBar = (props) => {
  const { bgcolor, completed, success } = props;
  console.log("completed", completed);
  const containerStyles = {
    height: 20,
    width: "100%",
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    margin: 50,
  };

  const fillerStyles = {
    height: "100%",
    width: `${completed}%`,
    backgroundColor: bgcolor,
    borderRadius: "inherit",
    textAlign: "right",
    transition: "width 1s ease-in-out",
  };

  const labelStyles = {
    padding: 5,
    color: "white",
    fontWeight: "bold",
  };
  if (success) {
    return (
      <div>
        <div style={containerStyles}>
          <div style={fillerStyles}>
            <span
              style={labelStyles}
              role="progressbar"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              Loading ....
            </span>
          </div>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default ProgressBar;
