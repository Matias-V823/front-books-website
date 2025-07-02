import { Navigate } from "react-router";
import { useAppStore } from "../store/useAppStore";
import type { JSX } from "react";

interface ProtectedRouteProps {
  children: JSX.Element;
  requireAdmin?: boolean;
}

export const ProtectedRoute = ({ children, requireAdmin }: ProtectedRouteProps) => {
  const isAuthenticated = useAppStore((state) => state.isAuthenticated);
  const user = useAppStore((state) => state.user);


  if (!isAuthenticated || !user) {
    return <Navigate to="/login" replace />;
  }

  if (requireAdmin && !user.roles.includes("ADMIN")) {
    return <Navigate to="/" />;
  }

  if (!requireAdmin && user.roles.includes("ADMIN")) {
    return <Navigate to="/admin/home" replace />;
  }

  return children;
};
