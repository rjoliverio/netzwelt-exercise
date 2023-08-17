export interface ITerritory {
  id: string;
  name: string;
  parent: string | null;
  children?: Array<ITerritory>;
}
