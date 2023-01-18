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
            <h2>Bak</h2>
            <div className="mouseMoveText">
              <a
                href="https://bakrestaurant.nl/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={bak} alt="restaurant-bak" />
              </a>
              <p>Hier komt de beoordeling van het restaurant</p>
            </div>
          </li>
          <li className="mouseMove">
            <h2>Bella Storia</h2>
            <div className="mouseMoveText">
              <a
                href="https://www.bellastoria.nl/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={bellaStoria} alt="restaurant-bella-storia" />
              </a>
              <p>Hier komt de beoordeling van het restaurant</p>
            </div>
          </li>
          <li className="mouseMove">
            <h2>Choux</h2>

            <div className="mouseMoveText">
              <a href="https://choux.nl/" target="_blank" rel="noreferrer">
                <img src={choux} alt="restaurant-choux" />
              </a>
              <p>Hier komt de beoordeling van het restaurant</p>
            </div>
          </li>
          <li className="mouseMove">
            <h2>Helling 7</h2>
            <div className="mouseMoveText">
              <a href="https://helling7.nl/" target="_blank" rel="noreferrer">
                <img src={helling7} alt="restaurant-helling7" />
              </a>
              <p>Hier komt de beoordeling van het restaurant</p>
            </div>
          </li>
          <li className="mouseMove">
            <h2>De Kas</h2>
            <div className="mouseMoveText">
              <a
                href="https://restaurantdekas.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={kas} alt="restaurant-de-kas" />
              </a>
              <p>Hier komt de beoordeling van het restaurant</p>
            </div>
          </li>
          <li className="mouseMove">
            <h2>Klaproos</h2>

            <div className="mouseMoveText">
              <a
                href="https://klaproosamsterdam.nl/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={klaproos} alt="restaurant-klaproos" />
              </a>
              <p>Hier komt de beoordeling van het restaurant</p>
            </div>
          </li>
          <li className="mouseMove">
            <h2>Otto Volante</h2>
            <div className="mouseMoveText">
              <a
                href="https://ottovolante.nl/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={ottoVolante} alt="restaurant-otto-volante" />
              </a>
              <p>Hier komt de beoordeling van het restaurant</p>
            </div>
          </li>
          <li className="mouseMove">
            <h2>Public Space</h2>
            <div className="mouseMoveText">
              <a
                href="https://www.publicspace.amsterdam/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={publicSpace} alt="restaurant-pulic-space" />
              </a>
              <p>Hier komt de beoordeling van het restaurant</p>
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
