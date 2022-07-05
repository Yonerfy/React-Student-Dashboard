import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { studentFilter } from "../features/filterSlice";
import { sameStudent } from "../features/filterSlice";
import { selectFilterStudents } from "../features/filterSlice";

import {
  VictoryBar,
  VictoryChart,
  VictoryTheme,
  VictoryStack,
  VictoryAxis,
  VictoryGroup,
  VictoryLegend,
  VictoryLine,
} from "victory";

export default function Dashbord() {
  const [toggleFunDifficult, setToggleFunDifficult] = useState({
    fun: true,
    difficult: true,
  });

  const [chkState, setChkState] = useState([
    { name: "all", checkbox: false },
    { name: "Evelyn", checkbox: true },
    { name: "Aranka", checkbox: true },
    { name: "Floris", checkbox: true },
    { name: "Hector", checkbox: true },
    { name: "Martina", checkbox: true },
    { name: "Rahima", checkbox: true },
    { name: "Maurits", checkbox: true },
    { name: "Sandra", checkbox: true },
    { name: "Wietske", checkbox: true },
    { name: "Storm", checkbox: true },
  ]);

  const dispatch = useDispatch();
  const data = useSelector((state) => selectFilterStudents(state));
  const dataAvareges = newDataWithAvarege(data);

  function funDifficultToggle(name) {
    name === "fun"
      ? setToggleFunDifficult((toggleFunDifficult) => ({
          ...toggleFunDifficult,
          fun: !toggleFunDifficult.fun,
        }))
      : setToggleFunDifficult((toggleFunDifficult) => ({
          ...toggleFunDifficult,
          difficult: !toggleFunDifficult.difficult,
        }));
  }

  function calcAvarege(arr, assignment, funOrDifficult) {
    let funTotal = [];
    const assignementArr = arr.filter(
      (student) => student.assignment === assignment
    );
    let length = assignementArr.length;
    funOrDifficult === "fun"
      ? assignementArr.forEach(({ fun }) => funTotal.push(parseInt(fun)))
      : assignementArr.forEach(({ difficult }) =>
          funTotal.push(parseInt(difficult))
        );
    const average = funTotal.reduce((a, b) => a + b);

    return Math.round(average / length);
  }

  function newDataWithAvarege(data) {
    return data.map((student) => {
      return {
        name: student.name,
        assignment: student.assignment,
        difficult: calcAvarege(data, student.assignment),
        fun: calcAvarege(data, student.assignment, student.fun),
      };
    });
  }

  function handlerCheckbox(e) {
    const { name, checked } = e.target;
    dispatch(studentFilter(name));
    dispatch(sameStudent(checked));
  }

  function handlerChange(e) {
    const { checked, name } = e.target;
    setChkState((state) => {
      return state.map((student) => {
        return (
          student.name === name &&
          checked && { ...state, checked: !state.checkbox }
        );
      });
    });
  }

  return (
    <div className="container">
      <h3 className="display-left">Filtering students</h3>
      <div className="student-chk cotainer">
        <label htmlFor="all">
          All
          <input
            type="checkbox"
            name="all"
            onClick={handlerCheckbox}
            onChange={handlerChange}
            checked={chkState[0].checkbox}
          />
        </label>

        <label htmlFor="fun">
          Fun
          <input
            type="checkbox"
            name="fun"
            onClick={(e) => funDifficultToggle(e.target.name)}
            defaultChecked
          />
        </label>

        <label htmlFor="difficult">
          Difficult
          <input
            type="checkbox"
            name="difficult"
            onClick={(e) => funDifficultToggle(e.target.name)}
            defaultChecked
          />
        </label>

        <label htmlFor="Evelyn">
          Evelyn
          <input
            type="checkbox"
            name="Evelyn"
            onClick={handlerCheckbox}
            onChange={handlerChange}
            checked={chkState[1].checkbox}
          />
        </label>

        <label htmlFor="Aranka">
          Aranka
          <input
            type="checkbox"
            name="Aranka"
            onClick={handlerCheckbox}
            onChange={handlerChange}
            checked={chkState[2].checkbox}
          />
        </label>

        <label htmlFor="Floris">
          Floris
          <input
            type="checkbox"
            name="Floris"
            onClick={handlerCheckbox}
            onChange={handlerChange}
            checked={chkState[3].checkbox}
          />
        </label>

        <label htmlFor="Hector">
          Hector
          <input
            type="checkbox"
            name="Hector"
            onClick={handlerCheckbox}
            onChange={handlerChange}
            checked={chkState[4].checkbox}
          />
        </label>

        <label htmlFor="Martina">
          Martina
          <input
            type="checkbox"
            name="Martina"
            onClick={handlerCheckbox}
            onChange={handlerChange}
            checked={chkState[5].checkbox}
          />
        </label>

        <label htmlFor="Rahima">
          Rahima
          <input
            type="checkbox"
            name="Rahima"
            onClick={handlerCheckbox}
            onChange={handlerChange}
            checked={chkState[6].checkbox}
          />
        </label>

        <label htmlFor="Maurits">
          Maurits
          <input
            type="checkbox"
            name="Maurits"
            onClick={handlerCheckbox}
            onChange={handlerChange}
            checked={chkState[7].checkbox}
          />
        </label>

        <label htmlFor="Sandra">
          Sandra
          <input
            type="checkbox"
            name="Sandra"
            onClick={handlerCheckbox}
            onChange={handlerChange}
            checked={chkState[8].checkbox}
          />
        </label>

        <label htmlFor="Wietske">
          Wietske
          <input
            type="checkbox"
            name="Wietske"
            onClick={handlerCheckbox}
            onChange={handlerChange}
            checked={chkState[9].checkbox}
          />
        </label>

        <label htmlFor="Storm">
          Storm
          <input
            type="checkbox"
            name="Storm"
            onClick={handlerCheckbox}
            onChange={handlerChange}
            checked={chkState[10].checkbox}
          />
        </label>
      </div>
      <VictoryChart
        style={{ parent: { maxWidth: "100%" } }}
        domainPadding={10}
        theme={VictoryTheme.material}
        width={1000}
      >
        <VictoryLegend
          x={0}
          y={20}
          orientation="horizontal"
          gutter={20}
          data={[
            {
              name: "Average of all student",
              symbol: { fill: "tomato", type: "star" },
            },
            { name: "Fun", symbol: { fill: "tomato" } },
            { name: "Difficult", symbol: { fill: "gold" } },
          ]}
        />

        <VictoryAxis
          style={{ tickLabels: { angle: 50, fontSize: 10, padding: 15 } }}
          tickValues={dataAvareges.map((assig) => assig.assignment)}
          tickFormat={dataAvareges.map((assig) => assig.assignment)}
        />
        <VictoryAxis
          style={{ tickLabels: { fontSize: 10 } }}
          dependentAxis
          tickValues={[1, 2, 3, 4, 5]}
          tickFormat={[1, 2, 3, 4, 5]}
        />
        <VictoryGroup>
          <VictoryStack>
            {toggleFunDifficult.fun && (
              <VictoryBar
                barWidth={5}
                data={dataAvareges}
                x="assignment"
                y={"fun"}
                style={{ data: { fill: "tomato", width: 3 } }}
                alignment="end"
              />
            )}
          </VictoryStack>
          <VictoryStack>
            {toggleFunDifficult.difficult && (
              <VictoryBar
                data={dataAvareges}
                x="assignment"
                y={"difficult"}
                style={{ data: { fill: "gold", width: 5 } }}
                alignment="start"
              />
            )}
          </VictoryStack>
        </VictoryGroup>
      </VictoryChart>
      <VictoryChart
        style={{
          parent: { maxWidth: "100%" },
          data: { stroke: "#c43a31" },
        }}
        domainPadding={15}
        theme={VictoryTheme.material}
        width={1000}
      >
        <VictoryLegend
          x={0}
          y={20}
          orientation="horizontal"
          gutter={20}
          data={[
            {
              name: "Average of all student",
              symbol: { fill: "tomato", type: "star" },
            },
            { name: "Fun", symbol: { fill: "tomato" } },
            { name: "Difficult", symbol: { fill: "gold" } },
          ]}
        />
        <VictoryAxis
          style={{ tickLabels: { angle: 50, fontSize: 10, padding: 15 } }}
          tickValues={dataAvareges.map((assig) => assig.assignment)}
          tickFormat={dataAvareges.map((assig) => assig.assignment)}
        />
        <VictoryAxis
          style={{ tickLabels: { fontSize: 10 } }}
          dependentAxis
          tickValues={[1, 2, 3, 4, 5]}
          tickFormat={[1, 2, 3, 4, 5]}
        />
        <VictoryGroup>
          {toggleFunDifficult.fun && (
            <VictoryLine
              style={{
                data: { stroke: "tomato", strokeWidth: 2 },
              }}
              data={dataAvareges}
              x="assignment"
              y={"fun"}
            />
          )}
          {toggleFunDifficult.difficult && (
            <VictoryLine
              style={{
                data: { stroke: "gold", strokeWidth: 2 },
              }}
              data={dataAvareges}
              y={"difficult"}
            />
          )}
        </VictoryGroup>
      </VictoryChart>
    </div>
  );
}
