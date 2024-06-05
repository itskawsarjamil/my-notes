import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const useAuth = () => {
  const authInfo = useContext(AuthContext);
  //   console.log(authInfo);
  return authInfo;
};

export default useAuth;
