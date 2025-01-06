import Hero from "../components/Hero";
import ViewAllJobs from "../components/ViewAllJobs";
import Homecards from "../components/Homecards";
import JobListings from "../components/JobListings";

const Home = () => {
  return (
   <>
      <Hero title="React Dev" subtitle="Find a react job"/>
      <Homecards />
      <JobListings isHome={true} />
      <ViewAllJobs />
   </>
  )
}

export default Home