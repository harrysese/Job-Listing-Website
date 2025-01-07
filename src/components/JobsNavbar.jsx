import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { useState, useEffect } from "react";
import debounce from "lodash.debounce";

const JobsNavbar = () => {
  const linkClass = ({ isActive }) =>
    isActive
      ? "bg-black text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
      : "text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2";

  const [query, setQuery] = useState("");
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);

  // Debounced fetch function to send the search request
  const fetchJobs = async (searchQuery) => {
    setLoading(true);
    try {
      const response = await fetch(`/api/v1/jobs?q=${searchQuery}`);
      const data = await response.json();
      setJobs(data);  // Store the fetched job results
    } catch (error) {
      console.error("Error fetching jobs:", error);
    } finally {
      setLoading(false);
    }
  };

  // Debounce the search function to reduce unnecessary API calls
  const debouncedFetchJobs = debounce(fetchJobs, 500);

  useEffect(() => {
    if (query) {
      debouncedFetchJobs(query);
    } else {
      setJobs([]);  // Clear results when query is empty
    }

    return () => debouncedFetchJobs.cancel();  // Cleanup on unmount
  }, [query]);

  return (
    <nav className="bg-indigo-700 border-b border-indigo-500">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            <img className="h-10 w-auto" src={logo} alt="React Jobs" />
            <span className="hidden md:block text-white text-2xl font-bold ml-2">
              React Jobs
            </span>
            <input
              type="text"
              name="searchbar"
              id="searchbar"
              placeholder="Search for a job"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="ml-20 pl-4 rounded-3xl w-72 focus:outline-none"
            />
            {/* Live search results */}
            {query && (
              <div className="absolute left-72 top-[56px] bg-white shadow-lg  mt-2 w-72 z-10">
                {loading ? (
                  <div className="text-center py-2">Loading...</div>
                ) : jobs.length > 0 ? (
                  jobs.map((job) => (
                    <div key={job.id} className="p-2 border-b border-gray-200">
                      <NavLink to={`/jobs/${job.id}`} className="block text-black">
                        {job.title}
                      </NavLink>
                    </div>
                  ))
                ) : (
                  <div className="p-2 text-center text-gray-500">No jobs found</div>
                )}
              </div>
            )}
            <div className="md:ml-auto">
              <div className="flex space-x-2">
                <NavLink to="/" className={linkClass}>
                  Home
                </NavLink>
                <NavLink to="/jobs" className={linkClass}>
                  Jobs
                </NavLink>
                <NavLink to="/addjobs" className={linkClass}>
                  Add Jobs
                </NavLink>
                <NavLink to="/login" className={linkClass}>
                  Login
                </NavLink>
                <NavLink to="/signup" className={linkClass}>
                  Sign Up
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default JobsNavbar;
