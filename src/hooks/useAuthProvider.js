import { useState } from "react";

function useAuthContextProvider() {
  const [token, setToken] = useState("");
  return {
    token,
    setToken,
  };
}

export default useAuthContextProvider;
