import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./src/components/Navbar";
import Body from "./src/components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import Error from "./src/components/Error";
import MenuCard from "./src/components/MenuCard";
import Cart from "./src/components/Cart";
import { Provider } from "react-redux";
import appStore from "./src/utils/appStore";
// import AboutClass from "./src/components/AboutClass";

const AppLayout = () => {
  return (
    <div>
      <Provider store={appStore}>
        <Navbar />
        <div className="m-4">
          <Outlet />
        </div>
      </Provider>
    </div>
  );
};

const routConfig = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      // {
      //   path: "/",
      //   element: <AboutClass />,
      // },

      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurant/:id",
        element: <MenuCard />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={routConfig} />);
