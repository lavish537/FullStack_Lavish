import React, { useState } from "react";
import { deleteJob } from "../services/api";
import { useNavigate } from "react-router-dom";

export default function DeleteJob() {
  const [id, setId] = useState("");
  const navigate = useNavigate();

  // Handle delete action
  const handleDelete = async (e) => {
    e.preventDefault();
    if (!id) {
      alert("Please enter a Job ID to delete");
      return;
    }
    try {
      await deleteJob(id); // call API
      alert("Job deleted successfully!");
      navigate("/"); // redirect back to Home
    } catch (error) {
      alert("Error deleting job. Please try again.");
      console.error(error);
    }
  };

  return (
    <div className="form">
      <h2>Delete Job</h2>
      <form onSubmit={handleDelete}>
        <input
          type="number"
          placeholder="Enter Job ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <button type="submit">Delete</button>
      </form>
    </div>
  );
}
