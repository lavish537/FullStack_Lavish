import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AddJob from "./pages/AddJob";
import EditJob from "./pages/EditJob";
import DeleteJob from "./pages/DeleteJob";
import JobManagement from "./pages/Jobsmanagement";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddJob />} />
        <Route path="/edit/:id" element={<EditJob />} />
        <Route path="/delete" element={<DeleteJob />} />
        <Route path="/manage" element={<JobManagement />} /> 
      </Routes>
    </Router>
  );
}

export default App;
