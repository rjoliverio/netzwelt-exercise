import React, { useEffect, useState } from "react";
import "../assets/css/HomePage.css";
import { mapNodes } from "../utils/helper/mapNodes";
import { territories } from "../assets/json/dummyTerritories";
import { ITerritory } from "../utils/interface/ITerritory";

function HomePage() {
  const [initial] = useState(false);
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, [initial]);

  console.log(mapNodes(territories.data));
  useEffect(() => {
    if (!domLoaded) return;

    let toggler = document.getElementsByClassName("caret");
    let i: number;
    for (i = 0; i < toggler.length; i++) {
      let el = toggler[i];
      toggler[i].addEventListener("click", function () {
        el.parentElement?.querySelector(".nested")?.classList.toggle("active");
        el.classList.toggle("caret-down");
      });
    }
    setDomLoaded(false);
  }, [domLoaded]);
  const mappedNodes = mapNodes(territories.data);

  const traverse = (node: ITerritory, depth: number = 0) => {
    return (
      <li>
        <span className={`${node.children?.length && "caret"}`}>
          {node.name}
        </span>
        {node.children?.length ? (
          <ul className="nested">
            {node.children.map((child) => traverse(child, depth + 1))}
          </ul>
        ) : null}
      </li>
    );
  };
  return (
    <div className="App">
      <h2>Territories</h2>
      <p>Here are the list of territories</p>
      <ul id="myUL">
        {territories.data
          .filter((node) => node.parent === null)
          .map((rootNode) => traverse(mappedNodes[rootNode.id]))}
      </ul>
    </div>
  );
}

export default HomePage;
