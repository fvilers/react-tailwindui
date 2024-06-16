import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ButtonsPage from "./pages/ButtonsPage";
import CircularButtonsPage from "./pages/CircularButtonsPage";
import HomePage from "./pages/HomePage";
import LinksPage from "./pages/LinksPage";
import NotFoundPage from "./pages/NotFoundPage";

const router = createBrowserRouter([
  { element: <HomePage />, path: "/" },
  { element: <ButtonsPage />, path: "/elements/buttons" },
  { element: <CircularButtonsPage />, path: "/elements/circular-buttons" },
  { element: <LinksPage />, path: "/elements/links" },
  { element: <NotFoundPage />, path: "*" },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
