import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./home/HomePage";
import NotFoundPage from "./not-found/NotFoundPage";

const router = createBrowserRouter([
  { element: <HomePage />, path: "/" },
  { element: <NotFoundPage />, path: "*" },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
