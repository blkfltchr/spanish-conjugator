import { useContext } from "react";
import { RouterContext } from "../Context/CustomBrowserRouter";

export const useRouter = () => {
  return useContext(RouterContext);
};
