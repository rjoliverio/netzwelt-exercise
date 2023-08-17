import React from "react";
import "../assets/css/LoginPage.css";

function LoginPage() {
  return (
    <div className="w-full flex items-center m-auto justify-center h-screen flex-col">
      <div className="border p-14 flex flex-col max-w-sm w-full">
        <div className="flex flex-col">
          <p>Username</p>
          <input type="text" className="p-2" name="username" />
        </div>
        <div className="flex flex-col">
          <p>Password</p>
          <input type="password" className="p-2" name="password" />
        </div>
        <div className="w-full flex justify-end mt-5">
          <input type="button" className="p-2" value="Login" />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
