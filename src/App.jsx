import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import MainLayout from "./layouts/MainLayout";
import Jobspage from "./pages/Jobspage";
import NotFoundPage from "./pages/NotFoundPage";
import JobPage from "./pages/JobPage";
import Addjobs from "./pages/Addjobs";
const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout/>}>
    <Route index  element={<Home/>}/>
    <Route path="jobs" element={<Jobspage/>}/>
    <Route path="jobs/:id" element={<JobPage/>}/>
    <Route path="*" element={<NotFoundPage/>}/>
    <Route path='addjobs' element={<Addjobs/>}/>
    </Route>
  )
)
const App = () => {
  return <RouterProvider router={router}/>
};

export default App;
