import React, { useState } from "react";

export default function Valencia() {
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
      <div className="Valencia">
        <a href="/" onClick={showList}>
          Valencia
        </a>
        <ol>
          <li>
            <a href="./">Oyster Bar</a>
          </li>
          <li>
            <a href="./">Restaurant X</a>
          </li>
          <li>
            <a href="./">Restaurant X</a>
          </li>
        </ol>
      </div>
    );
  } else {
    return (
      <div className="Valencia">
        <a href="/" onClick={hideList}>
          Valencia
        </a>
      </div>
    );
  }
}
