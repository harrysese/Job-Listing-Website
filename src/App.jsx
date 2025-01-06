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
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage"
import EditJobPage from "./pages/EditJobPage";
const deleteJob = async (jobId) => {
  await fetch(`/api/v1/jobs/${jobId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

const editJob=async(editJob)=>{
  await fetch(`/api/v1/jobs/${editJob.id}`,{
    method:"PATCH",
    headers:{
      "Content-Type":"application/json",
    },
    body:JSON.stringify(editJob)
    
  });

}
const addJob = async (newJob) => {
  await fetch("/api/v1/jobs", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newJob),
  });
  return;
};
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path="jobs" element={<Jobspage />} />
      <Route path="editjob/:id" element={<EditJobPage editJob={editJob}/>}/>
      <Route path="jobs/:id" element={<JobPage deleteJob={deleteJob} />} />
      <Route path="*" element={<NotFoundPage />} />
      <Route path="addjobs" element={<Addjobs addJobSubmit={addJob} />} />
      <Route path="login" element={<LoginPage/>} />
      <Route path="signup" element={<SignupPage/>} />
    </Route>
  )
);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
