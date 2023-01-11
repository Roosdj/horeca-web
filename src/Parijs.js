import React, { useState } from "react";

export default function Parijs() {
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
      <div className="Parijs">
        <a href="/" onClick={showList}>
          Parijs
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
      <div className="Parijs">
        <a href="/" onClick={hideList}>
          Parijs
        </a>
      </div>
    );
  }
}
