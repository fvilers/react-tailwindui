import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./home/HomePage";

const router = createBrowserRouter([{ element: <HomePage />, path: "/" }]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
