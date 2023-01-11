import React, { useState } from "react";

export default function Kopenhagen() {
  const [list, setList] = useState("false");

  function showList(event) {
    event.preventDefault();
    setList("false");
  }

  function hideList(event) {
    event.preventDefault();
    setList("true");
  }

  if (list === "true") {
    return (
      <div className="Kopenhagen">
        <a href="/" onClick={showList}>
          Kopenhagen
        </a>
        <ol>
          <li>
            <a href="./">Frank</a>
          </li>
          <li>
            <a href="./">Pluto</a>
          </li>
          <li>
            <a href="./">Ancetrale</a>
          </li>
          <li>
            <a href="./">Gasoline Grill</a>
          </li>
          <li>
            <a href="./">Raw42</a>
          </li>
          <li>
            <a href="./">Lille Petra café</a>
          </li>
        </ol>
      </div>
    );
  } else {
    return (
      <div className="Kopenhagen">
        <a href="/" onClick={hideList}>
          Kopenhagen
        </a>
      </div>
    );
  }
}
