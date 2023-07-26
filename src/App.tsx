import { useState, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import jsPDF from "jspdf";

function App() {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const template = useRef(null);

  const handleClick = () => {
    const doc = new jsPDF({
      format: "a4",
      unit: "px",
    });

    // Adding the fonts.
    doc.setFont("Inter-Regular", "normal");
    

    if (template.current) {
      doc.html(template.current, {
        async callback(doc) {
          await doc.save("document");
        },
      });
    }
  };
  return (
    <>
      <button ref={buttonRef} onClick={handleClick}>
        Exportar pdf
      </button>
      <div className="container" ref={template}>
        <div className="border1"></div>
        <div className="border2"></div>
        <div className="border3"></div>
      </div>
    </>
  );
}

export default App;
