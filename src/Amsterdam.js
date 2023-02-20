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
          <div className="container">
            <li className="mouseMove">
              <h2>Bak</h2>
              <div className="mouseMoveText">
                <div className="row">
                  <div className="col-md-3">
                    <a
                      href="https://bakrestaurant.nl/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={bak} alt="restaurant-bak" />
                    </a>
                  </div>
                  <div className="col-md-8">
                    <p>Hier komt de beoordeling van het restaurant</p>
                  </div>
                </div>
              </div>
            </li>
            <li className="mouseMove">
              <h2>Bella Storia</h2>
              <div className="mouseMoveText">
                <div className="row">
                  <div className="col-md-3">
                    <a
                      href="https://www.bellastoria.nl/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={bellaStoria} alt="restaurant-bella-storia" />
                    </a>
                  </div>
                  <div className="col-md-8">
                    <p>Hier komt de beoordeling van het restaurant</p>
                  </div>
                </div>
              </div>
            </li>
            <li className="mouseMove">
              <h2>Choux</h2>

              <div className="mouseMoveText">
                <div className="row">
                  <div className="col-md-3">
                    <a
                      href="https://choux.nl/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={choux} alt="restaurant-choux" />
                    </a>
                  </div>
                  <div className="col-md-8">
                    <p>Hier komt de beoordeling van het restaurant</p>
                  </div>
                </div>
              </div>
            </li>
            <li className="mouseMove">
              <h2>Helling 7</h2>
              <div className="mouseMoveText">
                <div className="row">
                  <div className="col-md-3">
                    <a
                      href="https://helling7.nl/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={helling7} alt="restaurant-helling7" />
                    </a>
                  </div>
                  <div className="col-md-8">
                    <p>Hier komt de beoordeling van het restaurant</p>
                  </div>
                </div>
              </div>
            </li>
            <li className="mouseMove">
              <h2>De Kas</h2>
              <div className="mouseMoveText">
                <div className="row">
                  <div className="col-md-3">
                    <a
                      href="https://restaurantdekas.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={kas} alt="restaurant-de-kas" />
                    </a>
                  </div>
                  <div className="col-md-8">
                    <p>Hier komt de beoordeling van het restaurant</p>
                  </div>
                </div>
              </div>
            </li>
            <li className="mouseMove">
              <h2>Klaproos</h2>

              <div className="mouseMoveText">
                <div className="row">
                  <div className="col-md-3">
                    <a
                      href="https://klaproosamsterdam.nl/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={klaproos} alt="restaurant-klaproos" />
                    </a>
                  </div>
                  <div className="col-md-8">
                    <p>Hier komt de beoordeling van het restaurant</p>
                  </div>
                </div>
              </div>
            </li>
            <li className="mouseMove">
              <h2>Otto Volante</h2>
              <div className="mouseMoveText">
                <div className="row">
                  <div className="col-md-3">
                    <a
                      href="https://ottovolante.nl/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={ottoVolante} alt="restaurant-otto-volante" />
                    </a>
                  </div>
                  <div className="col-md-8">
                    <p>Hier komt de beoordeling van het restaurant</p>
                  </div>
                </div>
              </div>
            </li>
            <li className="mouseMove">
              <h2>Public Space</h2>
              <div className="mouseMoveText">
                <div className="row">
                  <div className="col-md-3">
                    <a
                      href="https://www.publicspace.amsterdam/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={publicSpace} alt="restaurant-pulic-space" />
                    </a>
                  </div>
                  <div className="col-md-8">
                    <p>Hier komt de beoordeling van het restaurant</p>
                  </div>
                </div>
              </div>
            </li>
          </div>
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
