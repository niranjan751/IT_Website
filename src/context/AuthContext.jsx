import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext(null);

const API_URL = "/api/auth";

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      const stored = localStorage.getItem("zoho_user");
      return stored ? JSON.parse(stored) : null;
    } catch {
      return null;
    }
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const clearError = () => setError(null);

  // ── Sign In ─────────────────────────────────────────────────────
  const signIn = async (email, password) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${API_URL}/signin`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Sign in failed");
      localStorage.setItem("zoho_user", JSON.stringify(data));
      setUser(data);
      return { success: true, user: data };
    } catch (err) {
      setError(err.message);
      return { success: false, error: err.message };
    } finally {
      setLoading(false);
    }
  };

  // ── Sign Up / Get Ready ─────────────────────────────────────────
  const signUp = async (formData) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${API_URL}/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Sign up failed");
      localStorage.setItem("zoho_user", JSON.stringify(data));
      setUser(data);
      return { success: true, user: data };
    } catch (err) {
      setError(err.message);
      return { success: false, error: err.message };
    } finally {
      setLoading(false);
    }
  };

  // ── SSO Login ───────────────────────────────────────────────────
  const ssoLogin = async (orgDomain) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${API_URL}/sso`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ orgDomain }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "SSO login failed");
      const ssoUser = { _id: "sso", name: orgDomain, email: `sso@${orgDomain}`, token: data.token };
      localStorage.setItem("zoho_user", JSON.stringify(ssoUser));
      setUser(ssoUser);
      return { success: true, user: ssoUser };
    } catch (err) {
      setError(err.message);
      return { success: false, error: err.message };
    } finally {
      setLoading(false);
    }
  };

  // ── Logout ───────────────────────────────────────────────────────
  const logout = () => {
    localStorage.removeItem("zoho_user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, error, clearError, signIn, signUp, ssoLogin, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
  return ctx;
}
