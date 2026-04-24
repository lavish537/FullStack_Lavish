import React, { useState } from "react";
import { addJob } from "../services/api";
import { useNavigate } from "react-router-dom";

export default function AddJob() {
  const [job, setJob] = useState({ title: "", company: "", location: "", salary: "" });
  const navigate = useNavigate();

  const handleChange = (e) => setJob({ ...job, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addJob(job);
    navigate("/");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Add Job</h2>
      <input name="title" placeholder="Title" value={job.title} onChange={handleChange} />
      <input name="company" placeholder="Company" value={job.company} onChange={handleChange} />
      <input name="location" placeholder="Location" value={job.location} onChange={handleChange} />
      <input name="salary" placeholder="Salary" value={job.salary} onChange={handleChange} />
      <button type="submit">Save</button>
    </form>
  );
}
