import "./App.css";
import Dashboard from "./components/Dashboard";
import Student from "./components/Student";
import StudentProfil from "./components/StudentProfil";
import Tableview from "./components/Tableview";
import { Link, Routes, Route } from "react-router-dom";
import { studentFilter } from "./features/filterSlice";
import { sameStudent } from "./features/filterSlice";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  return (
    <div className="App">
      <header className="App-header">
        <h1>Yonerfy Student Dashbord</h1>
        <nav className="nav-base nav-main">
          <Link
            to="/"
            onClick={(e) => {
              dispatch(studentFilter(e.target.name));
              dispatch(sameStudent(e.target.checked));
            }}
          >
            Dashboard
          </Link>
          <Link to="/StudentProfil">Student Profil</Link>
          <Link
            to="/Tableview"
            onClick={(e) => {
              dispatch(studentFilter(e.target.name));
              dispatch(sameStudent(e.target.checked));
            }}
          >
            Tableview
          </Link>
        </nav>
      </header>

      <main className="container">
        <div className="nav-base nav-second">
          <Link to={`/Evelyn`}>Evelyn</Link>
          <Link to={`/Aranka`}>Aranka</Link>
          <Link to={`/Floris`}>Floris</Link>
          <Link to={`/Hector`}>Hector</Link>
          <Link to={`/Martina`}>Martina</Link>
          <Link to={`/Rahima`}>Rahima</Link>
          <Link to={`/Maurits`}>Maurits</Link>
          <Link to={`/Sandra`}>Sandra</Link>
          <Link to={`/Wietske`}>Wietske</Link>
          <Link to={`/Storm`}>Storm</Link>
        </div>
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route path="/:studentName" element={<Student />} />
          <Route path="/Tableview" element={<Tableview />} />
          <Route path="/StudentProfil" element={<StudentProfil />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
