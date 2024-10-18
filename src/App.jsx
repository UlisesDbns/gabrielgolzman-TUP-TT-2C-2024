
// Libraries
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// Helpers

// Custom components
import Login from "./components/login/Login";
import Dashboard from "./components/dashboard/Dashboard";
import Protected from "./components/protected/Protected";
import NotFound from "./components/notFound/NotFound";
import { AuthContextProvider } from "./components/services/authContext/AuthContext";
import { TranslationContextProvider } from "./components/services/translationContext/TranslationContext";
import { ThemeContextProvider } from "./components/services/themeContext/ThemeContext";

// Stlyes

const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element:
        <Protected >
          <Dashboard />
        </Protected>
    },
    {
      path: "/login", element: <Login />
    },
    {
      path: "*", element: <NotFound />
    }
  ]);

  return (
    <div className="d-flex flex-column align-items-center">
      <ThemeContextProvider>
        <TranslationContextProvider>
          <AuthContextProvider>
            <RouterProvider router={router} />
          </AuthContextProvider>
        </TranslationContextProvider>
      </ThemeContextProvider>
    </div>
  );
};

export default App;

