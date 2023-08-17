import { useState } from "react";
import { ITerritory } from "../interface/ITerritory";
import { axios } from "../../lib/axios";
import { useNavigate } from "react-router-dom";

const useTerritory = () => {
  const navigate = useNavigate();
  const [territories, setTerritories] = useState<Array<ITerritory>>();
  const getTerritories = async () => {
    await axios
      .get<Array<ITerritory>>("/")
      .then((res) => setTerritories(res.data))
      .catch((err) => {
        console.log(err);
        if (err?.response?.status === 402) navigate("/account/login");
      });
  };

  return {
    territories,
    getTerritories,
  };
};

export default useTerritory;
