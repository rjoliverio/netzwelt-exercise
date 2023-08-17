import { useState } from "react";
import { axios } from "../../lib/axios";
import { IUserResponse } from "../interface/IUser";
import { useNavigate } from "react-router-dom";

const useUser = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<Pick<IUserResponse, "data"> | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const loginUser = async (username: string, password: string) => {
    setIsLoading(true);
    await axios
      .post<IUserResponse>("/account/login", { username, password })
      .then((res) => {
        localStorage.setItem("netzweltAccessToken", res.data.data.accessToken);
        setUser({ data: res.data.data });
        navigate("/");
      })
      .catch((err) => {
        setError(err.response.data.message || err.message);
      })
      .finally(() => setIsLoading(false));
  };
  return {
    user,
    error,
    isLoading,
    loginUser,
  };
};

export default useUser;
