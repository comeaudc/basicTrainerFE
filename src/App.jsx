import { Routes, Route } from "react-router-dom";

// Pages
import LandingPage from "./pages/LandingPage";
import AuthPage from "./pages/AuthPage";
import Dashbord from "./pages/Dashboard";
import NotFound from "./pages/NotFound";

// Components
import Nav from "./components/Nav/Nav";
import ProtectedRoutes from "./components/ProtectedRoutes";

import "./App.css";

function App() {
  return (
    <>
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/dashboard" element={<Dashbord />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
