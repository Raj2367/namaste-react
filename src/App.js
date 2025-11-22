import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Cart from "./components/Cart.js";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";
import Footer from "./components/Footer.js";
import OrderSuccess from "./components/OrderSuccess.js";
const Grocery = lazy(() => import("./components/Grocery.js"));
const About = lazy(() => import("./components/AboutUs.js"));

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello world from JAVAscript"
// );
// console.log(heading); // object

// React Component
// Class based component - OLD
// Functional component - NEW

const App = () => {
  return (
    <Provider store={appStore}>
      <div className="app">
        <Header />
        <Outlet /> {/** render all children of App component */}
        <Footer />
      </div>
    </Provider>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <About name="pruthwi" />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/restaurant/:resid",
        element: <RestaurantMenu />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order/success",
        element: <OrderSuccess />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router} />);
