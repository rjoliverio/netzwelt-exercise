import { ITerritory } from "../interface/ITerritory";

export const mapNodes = (data: Array<ITerritory>) => {
  let nodeMap: { [id: string]: ITerritory } = {};
  data.forEach((node) => {
    nodeMap[parseInt(node.id)] = node;
    nodeMap[parseInt(node.id)].children = [];
  });

  Object.keys(nodeMap).forEach((nodeId) => {
    const node = nodeMap[parseInt(nodeId)];
    if (node.parent !== null) {
      nodeMap[parseInt(node.parent)].children?.push(node);
    }
  });

  return nodeMap;
};
