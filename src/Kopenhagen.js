import React, { useState } from "react";

import ancestrale from "./images/ancestrale.png";
import beast from "./images/beast.png";
import frank from "./images/frank.png";
import gasolineGrill from "./images/gasoline-grill.png";
import lillePetraCafé from "./images/lille-petra-café.png";
import pluto from "./images/pluto.png";
import raw from "./images/42raw.png";

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
          <div className="container">
            <li className="mouseMove">
              <h2>Ancetrale</h2>
              <div className="mouseMoveText">
                <div className="row">
                  <div className="col-md-3">
                    <a
                      href="https://ancestrale.dk/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={ancestrale} alt="oysters-frank" />
                    </a>
                  </div>
                  <div className="col-md-8">
                    <p>
                      "Je hebt de keuze uit een tastingmenu of je kan losse
                      gerechtjes bestellen. Wij raden het tastingmenu aan, goeie
                      porties en je krijgt alles te proeven. De Belgische chef
                      komt in het Nederlands uitleggen wat er op je bord ligt.
                      Hij houdt van experimenteren met technieken en smaken en
                      dat proef je. Zo hebben wij zuurdesembrood ijs gegeten,
                      echt heerlijk!"
                    </p>
                  </div>
                </div>
              </div>
            </li>
            <li className="mouseMove">
              <h2>Beast</h2>
              <div className="mouseMoveText">
                <div className="row">
                  <div className="col-md-3">
                    <a
                      href="https://www.baest.dk/en/welcome/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={beast} alt="pizza-beast" />
                    </a>
                  </div>
                  <div className="col-md-8">
                    <p>
                      "Naast heerlijke 'organic' zuurdesem pizza hebben ze ook
                      heerlijke charcuterie en maken ze hun eigen kazen zoals
                      burrata en ricotta. Naast pizza heb je dus ook lekkere
                      andere gerechten."
                    </p>
                  </div>
                </div>
              </div>
            </li>
            <li className="mouseMove">
              <h2>Frank</h2>
              <div className="mouseMoveText">
                <div className="row">
                  <div className="col-md-3">
                    <a
                      href="https://restaurantfrank.dk/frank/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={frank} alt="oysters-frank" />
                    </a>
                  </div>
                  <div className="col-md-8">
                    <p>
                      "Gek genoeg werd ons aangeraden om niet voor het
                      tastingmenu te gaan maar gerechten te bestellen. "
                    </p>
                  </div>
                </div>
              </div>
            </li>
            <li className="mouseMove">
              <h2>Gasoline Grill</h2>
              <div className="mouseMoveText">
                <div className="row">
                  <div className="col-md-3">
                    <a
                      href="https://www.gasolinegrill.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={gasolineGrill} alt="burgers-gasoline-grill" />
                    </a>
                  </div>
                  <div className="col-md-8">
                    <p>
                      "Ga je naar Kopenhagen, dan heeft vast iemand gezegd dat
                      je naar Gasoline Grill moet. En dat is niet onterecht. Het
                      lijkt een fastfood keten maar dan met verse ingrediënten
                      en je burger wordt op bestelling gemaakt. Ga maar gewoon
                      langs, dan ben jij de volgende keer degene die de burger
                      aanraadt."
                    </p>
                  </div>
                </div>
              </div>
            </li>
            <li className="mouseMove">
              <h2>Lille Petra Café</h2>
              <div className="mouseMoveText">
                <div className="row">
                  <div className="col-md-3">
                    <a
                      href="https://www.andtradition.com/lille-petra"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src={lillePetraCafé}
                        alt="breakfast-lille-petra-café"
                      />
                    </a>
                  </div>
                  <div className="col-md-8">
                    <p>
                      "Wij hebben er heerlijk ontbeten maar je kan er ook goed
                      lunchen. De koffie is zoals je hem het liefst drinkt. Met
                      mooi weer kan je in het leuke binnentuintje zitten. Met
                      minder weer moet je op tijd zijn want er zijn maar weinig
                      tafeltjes in dit populaire cafeetje."
                    </p>
                  </div>
                </div>
              </div>
            </li>
            <li className="mouseMove">
              <h2>Pluto</h2>
              <div className="mouseMoveText">
                <div className="row">
                  <div className="col-md-3">
                    <a
                      href="https://restaurantpluto.dk/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={pluto} alt="dinner-pluto" />
                    </a>
                  </div>
                  <div className="col-md-8">
                    <p>
                      "Restaurant Pluto heeft een beetje iets weg van een Franse
                      bistro. Je kan het zo gek maken als je zelf wil: oesters,
                      kaviaar, brioche met kreeft maar er zijn ook heerlijke
                      groentengerechtjes. Als je veel wil proeven kan je
                      meerdere gerechten delen maar je kan ook voor- en
                      hoofdgerecht bestellen. Daarnaast zijn er goeie cocktails
                      te krijgen en is het er altijd gezellig druk. Daarom wel
                      even reserveren (zoals bij alles eigenlijk in Kopenhagen).
                      "
                    </p>
                  </div>
                </div>
              </div>
            </li>
            <li className="mouseMove">
              <h2>42Raw</h2>
              <div className="mouseMoveText">
                <div className="row">
                  <div className="col-md-3">
                    <a
                      href="https://www.42raw.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={raw} alt="breakfast-42raw" />
                    </a>
                  </div>
                  <div className="col-md-8">
                    <p>
                      "Goeie plek voor een gezond ontbijte of lunch. Een zaak
                      zoals elke stad er wel een paar heeft. Smoothiebowls,
                      goeie koffie, pokébowls en gezonde burgers. Wel je
                      portemonnee meenemen, het is een stuk duurder dan je bent
                      gewend."
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
      <div className="Kopenhagen">
        <a href="/" onClick={hideList}>
          Kopenhagen
        </a>
      </div>
    );
  }
}
