import React, { useEffect, useState } from "react";
import { getJobs, deleteJob } from "../services/api";
import JobCard from "../components/JobCard";

export default function JobManagement() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    loadJobs();
  }, []);

  const loadJobs = async () => {
    const data = await getJobs();
    setJobs(data);
  };

  const handleDelete = async (id) => {
    await deleteJob(id);
    loadJobs();
  };

  return (
    <div className="job-management">
      <h1>Manage Jobs</h1>
      <p>Edit or delete jobs directly from here.</p>

      <div className="job-list">
        {jobs.map((job) => (
          <JobCard
            key={job.id}
            job={job}
            onDelete={handleDelete}
            showActions={true}   // Keep Edit/Delete here
          />
        ))}
      </div>
    </div>
  );
}
