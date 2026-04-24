import React, { useEffect, useState } from "react";
import { getJobs } from "../services/api";
import JobCard from "../components/JobCard";

export default function Home() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    loadJobs();
  }, []);

  const loadJobs = async () => {
    const data = await getJobs();
    setJobs(data);
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to Job Portal</h1>
        <p>Find your dream job, build your career, and connect with top companies.</p>
      </section>

      {/* Quick Links */}
      <section className="quick-links">
        <h2>Quick Access</h2>
        <div className="links-grid">
          <a href="/add" className="link-card">➕ Add Job</a>
          <a href="/delete" className="link-card">🗑️ Delete Job</a>
          <a href="/manage" className="link-card">✏️ Manage Jobs</a>
        </div>
      </section>

      {/* Featured Jobs */}
      {jobs.length > 0 && (
        <section className="featured-jobs">
          <h2>Featured Jobs</h2>
          <div className="job-list">
            {jobs.slice(0, 2).map((job) => (
              <JobCard key={job.id} job={job} showActions={false} />
            ))}
          </div>
        </section>
      )}

      {/* Available Jobs */}
      <h2>Available Jobs</h2>
      <div className="job-list">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} showActions={false} />
        ))}
      </div>
    </div>
  );
}
