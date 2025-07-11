import React, { useState } from "react";

const Popup = () => {
  const [open, setOpen] = useState(false);

  const togglePopup = () => {
    setOpen(!open);
  };

  const popupStyles = {
    position: "fixed",
    bottom: "24px",
    right: "24px",
    zIndex: 9999
  };

  const modalStyles = {
    width: "280px",
    maxHeight: "380px",
    background: "#fff",
    border: "1px solid #ccc",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
    padding: "12px",
    overflow: "auto",
    marginBottom: "8px"
  };

  const buttonStyles = {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    border: "none",
    background: "#004f98",
    color: "#fff",
    fontSize: "22px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  };

  const headerStyles = {
    marginTop: "0px",
    color: "#333",
    fontSize: "16px"
  };

  return React.createElement(
    "div",
    { style: popupStyles },
    open && React.createElement(
      "div",
      { style: modalStyles },
      React.createElement("h4", { style: headerStyles }, "Hello Open edX!"),
      React.createElement("p", null, "This is your XConnect popup! You can customize this content.")
    ),
    React.createElement(
      "button",
      {
        style: buttonStyles,
        onClick: togglePopup,
        "aria-label": "Toggle popup",
        type: "button"
      },
      open ? "×" : "+"
    )
  );
};

export default Popup;
