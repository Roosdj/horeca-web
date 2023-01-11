import React, { useState } from "react";

export default function Lissabon() {
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
      <div className="Lissabon">
        <a href="/" onClick={showList}>
          Lissabon
        </a>
        <ol>
          <li>
            <a href="./">Le Mary Celeste</a>
          </li>
          <li>
            <a href="./">Restaurant X</a>
          </li>
        </ol>
      </div>
    );
  } else {
    return (
      <div className="Lissabon">
        <a href="/" onClick={hideList}>
          Lissabon
        </a>
      </div>
    );
  }
}
