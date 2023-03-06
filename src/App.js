import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import Home from "./components/pages/Home";
import { Root } from "./components/pages/RootLayout";
import { SpeedTest } from "./components/speed-test/SpeedTest";
import { Training } from "./components/pages/Training";
import { Challenge } from "./components/pages/Challenge";

const router = createBrowserRouter([
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
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
