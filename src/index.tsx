import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Layout from "./components/Layout";
import {
  createBrowserRouter,
  RouterProvider,
  useLocation,
  useOutlet,
} from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import Contact from "./pages/Contact";

const routes = [
  {
    path: "/",
    element: <Home />,
    nodeRef: React.createRef(),
  },
  {
    path: "/projects",
    element: <Projects />,
    nodeRef: React.createRef(),
  },
  {
    path: "/contact",
    element: <Contact />,
    node: React.createRef(),
  },
];

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: routes.map((route) => ({
      index: route.path === "/",
      path: route.path === "/" ? undefined : route.path,
      element: route.element,
    })),
  },
]);

function App() {
  const currentOutlet = useOutlet();
  const location = useLocation();
  const { nodeRef } =
    routes.find((route) => route.path === location.pathname) ?? {};
  return (
    <Layout>
      <SwitchTransition>
        <CSSTransition
          key={location.pathname}
          nodeRef={nodeRef as React.Ref<HTMLElement | undefined>}
          timeout={300}
          classNames="page"
          unmountOnExit
        >
          {(state: any) => (
            <div
              ref={nodeRef as React.RefObject<HTMLDivElement>}
              className="page"
            >
              {currentOutlet}
            </div>
          )}
        </CSSTransition>
      </SwitchTransition>
    </Layout>
  );
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
