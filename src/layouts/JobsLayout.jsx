import { Outlet } from "react-router-dom";
import JobsNavbar from "../components/JobsNavbar";

const JobsLayout = () => {
  return (
    <>
    <JobsNavbar/>
    <Outlet/>

    </>
  )
}

export default JobsLayout