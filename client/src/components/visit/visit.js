import React from "react";
import "./visit.css";

export function VisitSection({ title, text, extra }) {
  return (
    <div className="visitSection">
      <div className="visitSectionTitle">{title}</div>
      <div className="visitSectionText">
        {text.map((line, i) => (
          <span key={i}>
            {line}
            <br />
          </span>
        ))}
        {extra}
      </div>
    </div>
  );
}
