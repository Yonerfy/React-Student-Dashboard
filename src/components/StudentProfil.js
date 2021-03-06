import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function StudentProfil() {
  const data = useSelector((state) => state.studentExtraData);
  const StudentProfilEl = data.map((student) => {
    return (
      <div className="student-card">
        <Link to={`/${student.firstName}`}>
          <img src={student.photo} width={100} alt="" height={100} />

          <h3>Name: </h3>
          <p>{`${student.firstName} ${student.last_name}`}</p>
          <h3>Email:</h3>
          <p>{student.email}</p>
          <h3>Phone Number:</h3>
          <p>{student.PhoneNumber}</p>
        </Link>
      </div>
    );
  });

  return (
    <div className="container">
      <h3 className="display-left">Students Profiles</h3>
      <div className="student-profil">{StudentProfilEl}</div>
    </div>
  );
}
