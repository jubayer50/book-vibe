import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import HomePage from "../Pages/HomePage/HomePage";
import Books from "../Pages/Books/Books";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import BookDetail from "../Components/BookDetail/BookDetail";
import PagesToRead from "../Pages/PagesToRead/PagesToRead";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        element: <HomePage></HomePage>,
      },
      {
        path: "/books",
        element: <Books></Books>,
      },
      {
        path: "/book-detail/:bookId",
        element: <BookDetail></BookDetail>,
        loader: () => fetch("/booksData.json"),
      },
      { path: "/pages-to-read", element: <PagesToRead></PagesToRead> },
    ],
    errorElement: <ErrorPage></ErrorPage>,
  },
]);
