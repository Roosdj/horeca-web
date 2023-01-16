import React, { useState } from "react";

export default function Amsterdam() {
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
      <div className="Amsterdam">
        <a href="/" onClick={showList}>
          Amsterdam
        </a>
        <ol>
          <li>
            <a href="./">Bak</a>
          </li>
          <li>
            <a href="./">Choux</a>
          </li>
          <li>
            <a href="./">CRADAM</a>
          </li>
        </ol>
      </div>
    );
  } else {
    return (
      <div className="Amsterdam">
        <a href="/" onClick={hideList}>
          Amsterdam
        </a>
      </div>
    );
  }
}
