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
          <div className="container">
            <li className="mouseMove">
              <h2>Casa Montaña</h2>
              <div className="mouseMoveText">
                <div className="row">
                  <div className="col-md-3">
                    <a
                      href="https://www.emilianobodega.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {/* <img src= alt="restaurant-bak" /> */}
                    </a>
                  </div>
                  <div className="col-md-8">
                    <p>
                      "Tapas! En dan gewoon hele goeie en in een omgeving zoals
                      je het wil hebben. Grote oude wijnvaten, bruin, overal wat
                      te zien. Het is erg populair dus even reserveren of buiten
                      in de rij met een drankje in je hand kennis maken met
                      locals. Smakelijk!"
                    </p>
                  </div>
                </div>
              </div>
            </li>
            <li className="mouseMove">
              <h2>Canalla Bistro by Richard Camarena</h2>
              <div className="mouseMoveText">
                <div className="row">
                  <div className="col-md-3">
                    <a
                      href="https://m.canallabistro.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {/* <img src= alt="restaurant-bak" /> */}
                    </a>
                  </div>
                  <div className="col-md-8">
                    <p>
                      "Allemaal lekkere gerechtjes van de bekende chef uit
                      Valencia, Richard Camarena. Voor ieder wat wils:
                      pizzetta's, curry's en burgers. Dit klinkt platter dan wat
                      ze serveren, anders maar gewoon even een kijkje nemen op
                      hun website. Mocht je nou te weinig tijd hebben, dan heeft
                      chef Richard Camarena ook Central Bar in El Mercado
                      Central de València."
                    </p>
                  </div>
                </div>
              </div>
            </li>
            <li className="mouseMove">
              <h2>Puesto N°5</h2>
              <div className="mouseMoveText">
                <div className="row">
                  <div className="col-md-3">
                    <a
                      href="https://www.ostraspedrin.es/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {/* <img src= alt="restaurant-bak" /> */}
                    </a>
                  </div>
                  <div className="col-md-8">
                    <p>
                      "Bij Ostras Pedrín kun je lekker veel bestellen zodat je
                      genoeg hebt gegeten als diner, maar je kunt hier ook heel
                      goed een lekker drankje bestellen met wat kleine hapjes.
                      Naast natuurlijk een kaart vol oesters hebben ze ook
                      zee-egels, conserveren en andere lekkere dingen. Klein
                      maar heel fijn barretje!"
                    </p>
                  </div>
                </div>
              </div>
            </li>
            <li className="mouseMove">
              <h2>Ostras Pedrín</h2>
              <div className="mouseMoveText">
                <div className="row">
                  <div className="col-md-3">
                    <a
                      href="https://www.ostraspedrin.es/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {/* <img src= alt="restaurant-bak" /> */}
                    </a>
                  </div>
                  <div className="col-md-8">
                    <p>
                      "Bij Ostras Pedrín kun je lekker veel bestellen zodat je
                      genoeg hebt gegeten als diner, maar je kunt hier ook heel
                      goed een lekker drankje bestellen met wat kleine hapjes.
                      Naast natuurlijk een kaart vol oesters hebben ze ook
                      zee-egels, conserveren en andere lekkere dingen. Klein
                      maar heel fijn barretje!"
                    </p>
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
      <div className="Valencia">
        <a href="/" onClick={hideList}>
          Valencia
        </a>
      </div>
    );
  }
}
