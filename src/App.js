import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import Home from "./components/pages/Home/Home";
import { Root } from "./components/Layout/RootLayout";
import { SpeedTest } from "./components/pages/SpeedTest";
import { Training } from "./components/pages/Training";
import { Challenge } from "./components/pages/Challenge/Challenge";

const router = createBrowserRouter({
  routes: [
    {
      path: "/",
      children: [
        { index: true, element: <Home /> },
        {
          path: "actions",
          element: <Root />,
          children: [
            { path: "test", element: <SpeedTest /> },
            { path: "training", element: <Training /> },
            { path: "challenge", element: <Challenge /> },
          ],
        },
      ],
    },
  ],
  basename: "/my-app",
});

function App() {
  return <RouterProvider router={router} />;
}

export default App;
