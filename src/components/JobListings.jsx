import JobListing from './JobListing';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Spinner from './Spinner';

const JobListings = ({ isHome = false }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const apiUrl = '/api/v1/jobs';
        const res = await fetch(apiUrl);
        if (!res.ok) {
          throw new Error(`Failed to fetch jobs: ${res.status}`);
        }
        const data = await res.json();
        setJobs(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  const jobsToDisplay = isHome ? jobs.slice(0, 3) : jobs;

  return (
    <section className={`bg-blue-50 px-4 py-10 ${isHome?'':'h-screen'}`}>
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          Browse Jobs
        </h2>

        {loading ? (
          <Spinner loading={loading} />
        ) : error ? (
          <p className="text-red-500 text-center">Error: {error}</p>
        ) : jobs.length === 0 ? (
          <p className="text-gray-500 text-center">No jobs available at the moment. Please check back later.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {jobsToDisplay.map((job) => (
              <JobListing key={job.id} job={job} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default JobListings;
