import { createBrowserRouter } from "react-router-dom";
import { App } from "./App";
import { BoardPage } from "../pages/BoardPage";
import { HomePage } from "../pages/HomePage";
import { ProgramsPage } from "../pages/ProgramsPage";
import { SpacesPage } from "../pages/SpacesPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "spaces", element: <SpacesPage /> },
      { path: "programs", element: <ProgramsPage /> },
      { path: "board", element: <BoardPage /> }
    ]
  }
]);
