import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ButtonsPage from "./pages/ButtonsPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";

const router = createBrowserRouter([
  { element: <HomePage />, path: "/" },
  { element: <ButtonsPage />, path: "/elements/buttons" },
  { element: <NotFoundPage />, path: "*" },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
