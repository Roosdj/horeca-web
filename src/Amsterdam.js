import React, { useState } from "react";
import bak from "./images/bak.png";
import bellaStoria from "./images/bella-storia.png";
import choux from "./images/choux.png";
import helling7 from "./images/helling7.png";
import kas from "./images/kas.png";
import klaproos from "./images/klaproos.png";
import ottoVolante from "./images/otto-volante.png";
import publicSpace from "./images/public-space.png";

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
          <li className="mouseMove">
            <a href="https://bakrestaurant.nl/">Bak</a>
            <div className="mouseMoveText">
              <img src={bak} alt="restaurant-bak" />
              <span>Hier komt de beoordeling van het restaurant</span>
            </div>
          </li>
          <li className="mouseMove">
            <a href="https://www.bellastoria.nl/">Bella Storia</a>
            <div className="mouseMoveText">
              <img src={bellaStoria} alt="restaurant-bella-storia" />
              <span>Hier komt de beoordeling van het restaurant</span>
            </div>
          </li>
          <li className="mouseMove">
            <a href="https://choux.nl/">Choux</a>
            <div className="mouseMoveText">
              <img src={choux} alt="restaurant-choux" />
              <span>Hier komt de beoordeling van het restaurant</span>
            </div>
          </li>
          <li className="mouseMove">
            <a href="https://helling7.nl/">Helling 7</a>
            <div className="mouseMoveText">
              <img src={helling7} alt="restaurant-helling7" />
              <span>Hier komt de beoordeling van het restaurant</span>
            </div>
          </li>
          <li className="mouseMove">
            <a href="https://restaurantdekas.com/">De Kas</a>
            <div className="mouseMoveText">
              <img src={kas} alt="restaurant-de-kas" />
              <span>Hier komt de beoordeling van het restaurant</span>
            </div>
          </li>
          <li className="mouseMove">
            <a href="https://klaproosamsterdam.nl/">Klaproos</a>
            <div className="mouseMoveText">
              <img src={klaproos} alt="restaurant-klaproos" />
              <span>Hier komt de beoordeling van het restaurant</span>
            </div>
          </li>
          <li className="mouseMove">
            <a href="https://ottovolante.nl/">Otto Volante</a>
            <div className="mouseMoveText">
              <img src={ottoVolante} alt="restaurant-otto-volante" />
              <span>Hier komt de beoordeling van het restaurant</span>
            </div>
          </li>
          <li className="mouseMove">
            <a href="https://www.publicspace.amsterdam/">Public Space</a>
            <div className="mouseMoveText">
              <img src={publicSpace} alt="restaurant-pulic-space" />
              <span>Hier komt de beoordeling van het restaurant</span>
            </div>
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
