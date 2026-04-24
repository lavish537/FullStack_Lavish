import axios from "axios";

const API_URL = "http://localhost:5000";

// Get all jobs
export const getJobs = async () => {
  const res = await axios.get(`${API_URL}/getJobs`);
  return res.data;
};

// Get single job
export const getJob = async (id) => {
  const res = await axios.get(`${API_URL}/getJob/${id}`);
  return res.data;
};

// Add job
export const addJob = async (job) => {
  await axios.post(`${API_URL}/addJob`, job);
};

// Update job
export const updateJob = async (id, job) => {
  await axios.put(`${API_URL}/updateJob/${id}`, job);
};

// Delete job
export const deleteJob = async (id) => {
  await axios.delete(`${API_URL}/deleteJob/${id}`);
};
