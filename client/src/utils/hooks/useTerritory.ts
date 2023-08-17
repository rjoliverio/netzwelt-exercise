import { useState } from "react";
import { ITerritory } from "../interface/ITerritory";
import { axios } from "../../lib/axios";
import { useLocation, useNavigate } from "react-router-dom";

const useTerritory = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [territories, setTerritories] = useState<Array<ITerritory>>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const getTerritories = async () => {
    setIsLoading(true);
    await axios
      .get<Array<ITerritory>>("/")
      .then((res) => {
        setTerritories(res.data);
        if (location.pathname.includes("/account/login")) navigate("/");
      })
      .catch((err) => {
        if (err?.response?.status === 402) navigate("/account/login");
      })
      .finally(() => setIsLoading(false));
  };

  return {
    territories,
    isLoading,
    getTerritories,
  };
};

export default useTerritory;
