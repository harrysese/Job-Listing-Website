import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ViewAllJobs from "./components/ViewAllJobs";
import Homecards from "./components/Homecards";
import JobListings from "./components/JobListings";
const App = () => {

  return (
    <>
    <Navbar/>
    <Hero title={"React Dev"} subtitle={"Find a react job"}/>
    <Homecards/>
    <JobListings/>
    <ViewAllJobs/>
    </>
      
  );
};

export default App;
