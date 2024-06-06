import React, { useContext } from "react";
import { AuthContext } from "../contects/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const LoginOut = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const { logOut } = useContext(AuthContext);

  const handleLoginOut = async () => {
    console.log("logout");
    await logOut()
      .then(() => {
        alert("sign-out successfully");
        navigate(from, { replace: true });
      })
      .catch((error) => {});
  };

  return (
    <div className="h-screen flex bg-teal-100 items-center justify-center">
      <button
        className="bg-red-700 px-8 py-2 text-white rounded"
        onClick={handleLoginOut}
      >
        Logout
      </button>
    </div>
  );
};

export default LoginOut;
