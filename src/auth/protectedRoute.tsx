import { Navigate } from "react-router-dom";
import { ReactNode } from "react";
import { AUTH } from "../config/Constant";

export default function ProtectedRoute({ children }: { children: ReactNode }) {

  if(AUTH) return <Navigate to={"/login"} />;
  return children;

}
