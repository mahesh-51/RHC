import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import { RouterProvider } from "react-router-dom";
import router from "./config/routes";

function App() {

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
