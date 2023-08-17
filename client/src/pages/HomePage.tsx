import React, { useEffect, useState } from "react";
import "../assets/css/HomePage.css";
import { mapNodes } from "../utils/helper/mapNodes";
import { ITerritory } from "../utils/interface/ITerritory";
import useTerritory from "../utils/hooks/useTerritory";

function HomePage() {
  const { getTerritories, territories } = useTerritory();
  const [mappedNode, setMappedNode] = useState<{
    [id: string]: ITerritory;
  } | null>(null);

  useEffect(() => {
    getTerritories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (territories) {
      setMappedNode(mapNodes(territories as ITerritory[]));

      let toggler = document.getElementsByClassName("caret");
      let i: number;
      for (i = 0; i < toggler.length; i++) {
        let el = toggler[i];
        el.addEventListener("click", function () {
          el.parentElement
            ?.querySelector(".nested")
            ?.classList.toggle("active");
          el.classList.toggle("caret-down");
        });
      }
    }
  }, [territories]);

  const traverse = (node: ITerritory, depth: number = 0) => {
    return (
      <li key={node.id}>
        <span className={`${node.children?.length && "caret"}`}>
          {node.name}
        </span>
        {node.children?.length ? (
          <ul className="nested">
            {node.children?.map((child) => traverse(child, depth + 1))}
          </ul>
        ) : null}
      </li>
    );
  };
  return (
    <div>
      <h2>Territories</h2>
      <p>Here are the list of territories</p>
      <ul id="myUL">
        {mappedNode && territories ? (
          territories
            ?.filter((node) => node.parent === null)
            .map((rootNode) => traverse(mappedNode[rootNode.id]))
        ) : (
          <li>Loading...</li>
        )}
      </ul>
    </div>
  );
}

export default HomePage;
