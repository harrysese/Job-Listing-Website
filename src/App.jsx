import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  Router,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import MainLayout from "./layouts/MainLayout";
import Jobspage from "./pages/Jobspage";
import Addjobs from "./pages/Addjobs";
import NotFoundPage from "./pages/NotFoundPage";
const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout/>}>
    <Route index  element={<Home/>}/>
    <Route path="job" element={<Jobspage/>}/>
    <Route path="addjobs" element={<Addjobs/>}/>
    <Route path="*" element={<NotFoundPage/>}/>
    </Route>
  )
)
const App = () => {
  return <RouterProvider router={router}/>
};

export default App;
