import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Suspense, lazy } from "react";

// Lazy-loaded pages
const Home = lazy(() => import("../pages/Home"));
const Wishlist = lazy(() => import("../pages/Wishlist"));
const NotFound = lazy(() => import("../pages/NotFound"));
const SignIn = lazy(() => import("../pages/SignIn"));

const AppRouter = () => {
  return (
    <Router>
      <Suspense fallback={<div className="text-white">Loading...</div>}>
        <Routes>
          {/* Public routes */}
          <Route>
            <Route path="/" element={<Home />} />
            <Route path="/wishlist" element={<Wishlist />} />
          </Route>

          {/* Auth route */}
          <Route path="/signin" element={<SignIn />} />

          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default AppRouter;
