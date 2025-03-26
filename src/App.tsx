import { RouterProvider } from "react-router";
import router from "./routes";
import React from "react";
function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={router}></RouterProvider>
    </React.StrictMode>
  );
}

export default App;
