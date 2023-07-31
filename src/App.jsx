import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet
} from "react-router-dom";
import Home from "./Home/Home";
import Product from "./pages/Product/Product";
import Products from "./pages/Products/Products";   
import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/NavBar/NavBar";
import "./app.scss";

const Layout = () => {
  return (
    <div className="app">
          <NavBar/>
          <Outlet/>
          <Footer/>
    </div>
  )
}

function App() {
  
  const router = createBrowserRouter([
      {
    path: "/",
    element:<Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/products/:id",
        element:<Products/>
      },
      {
        path:"/product/:id",
        element:<Product/>
      },
    ]
  },

  ])

  return (
      <div>
        <RouterProvider router = {router}/>
      </div>
  )
}

export default App
