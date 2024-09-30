
// Libraries
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// Helpers

// Custom components
import Login from "./components/login/Login";
import Dashboard from "./components/dashboard/Dashboard";
import Protected from "./components/protected/Protected";
import NotFound from "./components/notFound/NotFound";

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
      path: "/login", element: <Login onLogin={() => { }} />
    },
    {
      path: "*", element: <NotFound />
    }
  ]);

  return (
    <div className="d-flex flex-column align-items-center">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;

