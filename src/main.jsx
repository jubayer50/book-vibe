import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { Router } from "./Router/Router";
import BookProvider from "./Components/Context/BookContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BookProvider>
      <RouterProvider router={Router}></RouterProvider>
    </BookProvider>
  </StrictMode>,
);
