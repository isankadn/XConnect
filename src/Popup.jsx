import React, { useState } from "react";
import "./popup.css";             // or inline styles

export default function Popup() {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ position: "fixed", bottom: 24, right: 24, zIndex: 9_999 }}>
      {open && (
        <div
          style={{
            width: 280,
            maxHeight: 380,
            background: "#fff",
            border: "1px solid #ccc",
            borderRadius: 8,
            boxShadow: "0 2px 8px rgba(0,0,0,.2)",
            padding: 12,
            overflow: "auto",
          }}
        >
          <h4 style={{ marginTop: 0 }}>Hello Open edX!</h4>
          <p>You can put anything here.</p>
        </div>
      )}
      <button
        style={{
          width: 40,
          height: 40,
          borderRadius: "50%",
          border: 0,
          background: "#004f98",
          color: "#fff",
          fontSize: 22,
          cursor: "pointer",
        }}
        onClick={() => setOpen(!open)}
        aria-label="Toggle pop-up"
      >
        {open ? "–" : "+"}
      </button>
    </div>
  );
}
