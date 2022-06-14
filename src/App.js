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
        <div>
          <Link to={`/Student/Evelyn`}>Evelyn</Link>
          <Link to={`/Student/Aranka`}>Aranka</Link>
          <Link to={`/Student/Floris`}>Floris</Link>
          <Link to={`/Student/Hector`}>Hector</Link>
          <Link to={`/Student/Martina`}>Martina</Link>
          <Link to={`/Student/Rahima`}>Rahima</Link>
          <Link to={`/Student/Maurits`}>Maurits</Link>
          <Link to={`/Student/Sandra`}>Sandra</Link>
          <Link to={`/Student/Wietske`}>Wietske</Link>
          <Link to={`/Student/Storm`}>Storm</Link>
        </div>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/Student" element={<Student />} />
          <Route path="/Student/:studentName" element={<Student />} />
          <Route path="/Tableview" element={<Tableview />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
