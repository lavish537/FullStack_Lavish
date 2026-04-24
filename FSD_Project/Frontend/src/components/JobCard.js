import React from "react";

export default function JobCard({ job, onDelete, showActions = true }) {
  return (
    <div className="job-card">
      <h3>{job.title}</h3>
      <p><strong>Company:</strong> {job.company}</p>
      <p><strong>Location:</strong> {job.location}</p>
      <p><strong>Salary:</strong> {job.salary}</p>

      {showActions && (
        <div className="job-actions">
          <button onClick={() => window.location.href = `/edit/${job.id}`}>✏️ Edit</button>
          <button onClick={() => onDelete(job.id)}>🗑️ Delete</button>
        </div>
      )}
    </div>
  );
}
