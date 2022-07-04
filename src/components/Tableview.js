import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { nanoid } from "nanoid";
import { selectFilterStudents } from "../features/filterSlice";
import { studentFilter } from "../features/filterSlice";
import { sameStudent } from "../features/filterSlice";

export default function Tableview() {
  const data = useSelector((state) => selectFilterStudents(state));
  const [diffOfFun, setDiffOfFun] = useState({ difficult: true, fun: true });
  const dispatch = useDispatch();
  const viewEl = data.map((student) => {
    return (
      <tr key={nanoid()}>
        <td>{student.name}</td>
        <td>{student.assignment}</td>
        {diffOfFun.difficult && <td>{student.difficult}</td>}
        {diffOfFun.fun && <td>{student.fun}</td>}
      </tr>
    );
  });

  function handlerCheckbox(e) {
    const { name, checked } = e.target;
    dispatch(studentFilter(name));
    dispatch(sameStudent(checked));
  }

  return (
    <div className="container">
      <h3 className="display-left">Tableview </h3>
      <div className="student-chk cotainer">
        <label htmlFor="all">
          All
          <input
            type="checkbox"
            name="all"
            onClick={handlerCheckbox}
            defaultChecked
          />
        </label>

        <label htmlFor="fun">
          Fun
          <input
            type="checkbox"
            name="fun"
            defaultChecked
            onClick={() =>
              setDiffOfFun((state) => ({ ...state, fun: !state.fun }))
            }
          />
        </label>

        <label htmlFor="difficult">
          Difficult
          <input
            type="checkbox"
            name="difficult"
            defaultChecked
            onClick={() =>
              setDiffOfFun((state) => ({
                ...state,
                difficult: !state.difficult,
              }))
            }
          />
        </label>

        <label htmlFor="Evelyn">
          Evelyn
          <input
            type="checkbox"
            name="Evelyn"
            onClick={handlerCheckbox}
            defaultChecked
          />
        </label>

        <label htmlFor="Aranka">
          Aranka
          <input
            type="checkbox"
            name="Aranka"
            onClick={handlerCheckbox}
            defaultChecked
          />
        </label>

        <label htmlFor="Floris">
          Floris
          <input
            type="checkbox"
            name="Floris"
            onClick={handlerCheckbox}
            defaultChecked
          />
        </label>

        <label htmlFor="Hector">
          Hector
          <input
            type="checkbox"
            name="Hector"
            onClick={handlerCheckbox}
            defaultChecked
          />
        </label>

        <label htmlFor="Martina">
          Martina
          <input
            type="checkbox"
            name="Martina"
            onClick={handlerCheckbox}
            defaultChecked
          />
        </label>

        <label htmlFor="Rahima">
          Rahima
          <input
            type="checkbox"
            name="Rahima"
            onClick={handlerCheckbox}
            defaultChecked
          />
        </label>
        <label htmlFor="Maurits">
          Maurits
          <input
            type="checkbox"
            name="Maurits"
            onClick={handlerCheckbox}
            defaultChecked
          />
        </label>

        <label htmlFor="Sandra">
          Sandra
          <input
            type="checkbox"
            name="Sandra"
            onClick={handlerCheckbox}
            defaultChecked
          />
        </label>

        <label htmlFor="Wietske">
          Wietske
          <input
            type="checkbox"
            name="Wietske"
            onClick={handlerCheckbox}
            defaultChecked
          />
        </label>

        <label htmlFor="Storm">
          Storm
          <input
            type="checkbox"
            name="Storm"
            onClick={handlerCheckbox}
            defaultChecked
          />
        </label>
      </div>
      <table>
        <tbody>
          <tr className="table-head">
            <td>Name</td>
            <td>Assignment</td>
            {diffOfFun.difficult && <td>Difficult</td>}
            {diffOfFun.fun && <td>fun</td>}
          </tr>
          {viewEl}
        </tbody>
      </table>
    </div>
  );
}
