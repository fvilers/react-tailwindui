import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ButtonsPage from "./pages/ButtonsPage";
import CircularButtonsPage from "./pages/CircularButtonsPage";
import HomePage from "./pages/HomePage";
import InputGroupsPage from "./pages/InputGroupsPage";
import LinksPage from "./pages/LinksPage";
import NotFoundPage from "./pages/NotFoundPage";

const router = createBrowserRouter([
  { element: <HomePage />, path: "/" },
  { element: <ButtonsPage />, path: "/elements/buttons" },
  { element: <CircularButtonsPage />, path: "/elements/circular-buttons" },
  { element: <LinksPage />, path: "/elements/links" },
  { element: <InputGroupsPage />, path: "/forms/input-groups" },
  { element: <NotFoundPage />, path: "*" },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
