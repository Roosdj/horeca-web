import React, { useState } from "react";
import frank from "./images/frank.png";

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
          <li className="mouseMove">
            <a href="https://ancestrale.dk/" target="_blank" rel="noreferrer">
              Ancetrale
            </a>
            <span className="mouseMoveText">
              Hier komt de beoordeling van het restaurant
            </span>
          </li>
          <li className="mouseMove">
            <a
              href="https://restaurantfrank.dk/frank/"
              target="_blank"
              rel="noreferrer"
            >
              Frank
            </a>
            <div className="mouseMoveText">
              <img src={frank} alt="oysters-frank" />
              Hier komt de beoordeling van het restaurant
            </div>
          </li>
          <li className="mouseMove">
            <a href="./">Gasoline Grill</a>
            <span className="mouseMoveText">
              Hier komt de beoordeling van het restaurant
            </span>
          </li>
          <li className="mouseMove">
            <a href="./">Lille Petra café</a>
            <span className="mouseMoveText">
              Hier komt de beoordeling van het restaurant
            </span>
          </li>
          <li className="mouseMove">
            <a href="./">Pluto</a>
            <span className="mouseMoveText">
              Hier komt de beoordeling van het restaurant
            </span>
          </li>
          <li className="mouseMove">
            <a href="./">Raw42</a>
            <span className="mouseMoveText">
              Hier komt de beoordeling van het restaurant
            </span>
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
