import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { Router } from "./Router/Router";
import BookProvider from "./Components/Context/BookContext";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BookProvider>
      <RouterProvider router={Router}></RouterProvider>
      <ToastContainer />
    </BookProvider>
  </StrictMode>,
);
