import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Cart from "./cart";
import Products from "./products";
import RootLayout from "./rootLayout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { path: "/", element: <Products /> },
        { path: "/cart", element: <Cart /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
