import React, { useEffect, useState } from "react";
import "../assets/css/LoginPage.css";
import useUser from "../utils/hooks/useUser";
import useTerritory from "../utils/hooks/useTerritory";

function LoginPage() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { loginUser, error, isLoading } = useUser();
  const { isLoading: isTerritoryLoading, getTerritories } = useTerritory();

  const handleClickLogin = (
    e: React.MouseEvent<HTMLInputElement, MouseEvent>
  ) => {
    e.preventDefault();
    loginUser(username, password);
  };

  useEffect(() => {
    getTerritories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (isTerritoryLoading) return null;

  return (
    <div className="w-full flex items-center m-auto justify-center h-screen flex-col">
      <div className="border p-14 flex flex-col max-w-sm w-full">
        <div className="flex flex-col">
          <p>Username</p>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            className="p-2"
            name="username"
          />
        </div>
        <div className="flex flex-col">
          <p>Password</p>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="p-2"
            name="password"
          />
        </div>
        {error && (
          <div className="w-full flex justify-center items-center mt-2 text-red">
            {error}
          </div>
        )}
        <div className="w-full flex justify-end mt-5">
          <input
            onClick={handleClickLogin}
            type="button"
            disabled={isLoading}
            className="p-2"
            value="Login"
          />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
