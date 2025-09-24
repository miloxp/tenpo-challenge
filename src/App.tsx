import { BrowserRouter, Route, Routes, Navigate } from "react-router";
import { PrivateRoute } from "@/components/PrivateRoute";
import Login from "./pages/Login";

import { AuthProvider } from "./context/auth";
import PageLayout from "@/components/PageLayout";
import Virtualized from "./pages/Virtualized";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <PrivateRoute>
                <PageLayout />
              </PrivateRoute>
            }
          >
            <Route index element={<Navigate to="/virtualized" replace />} />
            <Route path="virtualized" element={<Virtualized />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
