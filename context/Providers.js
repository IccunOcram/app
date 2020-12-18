import React from "react";
import AuthProvider from "./AuthContext";

export default function Providers({ children }) {
  return <AuthProvider>{children}</AuthProvider>;
}
