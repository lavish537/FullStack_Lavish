const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();
app.use(cors());
app.use(express.json());

// Get all jobs
app.get("/getJobs", (req, res) => {
  db.query("SELECT * FROM jobs", (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

// Get single job
app.get("/getJob/:id", (req, res) => {
  const { id } = req.params;
  db.query("SELECT * FROM jobs WHERE id=?", [id], (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results[0]);
  });
});

// Add job
app.post("/addJob", (req, res) => {
  const { title, company, location, salary } = req.body;
  db.query(
    "INSERT INTO jobs (title, company, location, salary) VALUES (?, ?, ?, ?)",
    [title, company, location, salary],
    (err) => {
      if (err) return res.status(500).send(err);
      res.json({ message: "Job added successfully!" });
    }
  );
});

// Update job
app.put("/updateJob/:id", (req, res) => {
  const { id } = req.params;
  const { title, company, location, salary } = req.body;
  db.query(
    "UPDATE jobs SET title=?, company=?, location=?, salary=? WHERE id=?",
    [title, company, location, salary, id],
    (err) => {
      if (err) return res.status(500).send(err);
      res.json({ message: "Job updated successfully!" });
    }
  );
});

// Delete job
app.delete("/deleteJob/:id", (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM jobs WHERE id=?", [id], (err) => {
    if (err) return res.status(500).send(err);
    res.json({ message: "Job deleted successfully!" });
  });
});

app.listen(5000, () => console.log("Server running on http://localhost:5000"));
