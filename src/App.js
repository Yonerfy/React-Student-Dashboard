import "./App.css";
import Dashboard from "./components/Dashboard";
import Student from "./components/Student";
import Tableview from "./components/Tableview";
import { Link, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Yonerfy Student Dashbord</p>
      </header>

      <main>
        <nav>
          <Link to="/">Dashboard</Link>
          <Link to="/Student">Student</Link>
          <Link to="/Tableview">Tableview</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/Student" element={<Student />} />
          <Route path="/Tableview" element={<Tableview />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
