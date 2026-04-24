import React, { useState, useEffect } from "react";
import { getJob, updateJob } from "../services/api";
import { useParams, useNavigate } from "react-router-dom";

export default function EditJob() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [job, setJob] = useState({
    title: "",
    company: "",
    location: "",
    salary: ""
  });

  // Load job details when component mounts or id changes
  useEffect(() => {
    const loadJob = async () => {
      try {
        const data = await getJob(id);
        setJob(data);
      } catch (error) {
        console.error("Error loading job:", error);
      }
    };
    loadJob();
  }, [id]);

  // Handle input changes
  const handleChange = (e) => {
    setJob({ ...job, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateJob(id, job);
      alert("Job updated successfully!");
      navigate("/");
    } catch (error) {
      alert("Error updating job. Please try again.");
      console.error(error);
    }
  };

  return (
    <div className="form">
      <h2>Edit Job</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Job Title"
          value={job.title}
          onChange={handleChange}
        />
        <input
          type="text"
          name="company"
          placeholder="Company"
          value={job.company}
          onChange={handleChange}
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={job.location}
          onChange={handleChange}
        />
        <input
          type="number"
          name="salary"
          placeholder="Salary"
          value={job.salary}
          onChange={handleChange}
        />
        <button type="submit">Update Job</button>
      </form>
    </div>
  );
}
