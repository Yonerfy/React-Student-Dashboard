import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { studentAdded } from "../features/studentSlice";
import { studentFilter } from "../features/filterSlice";
import { selectFilterStudents } from "../features/filterSlice";
import { studentTest } from "../features/studentSlice";
import { studentDelete } from "../features/studentSlice";
import StudentCheckbox from "./StudentCheckbox";
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
  const dispatch = useDispatch();
  const data = useSelector((state) => selectFilterStudents(state));

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
  const dataAvareges = newDataWithAvarege(data);

  function handlerCheckbox(e) {
    let studentArr = [];
    const { name, value, checked } = e.target;
    const checkbox = document.querySelectorAll('input[type="checkbox"]');
    checkbox.forEach(
      (chk) => chk.checked === true && studentArr.push(chk.name)
    );

    const filterDataAvg = dataAvareges.filter((student) =>
      studentArr.includes(student.name)
    );

    dispatch(studentTest(filterDataAvg));
    console.log(studentArr, filterDataAvg);
  }

  return (
    <div>
      <h1>Dashbord Component</h1>
      <div>
        <label htmlFor="all">
          All
          <input
            type="checkbox"
            name="all"
            onClick={handlerCheckbox}
            defaultChecked
          />
        </label>
        {/* <StudentCheckbox
          htmlFor="all"
          text="all"
          CpName="all"
          handlerCheckbox={handlerCheckbox}
        /> */}
        <label htmlFor="fun">
          Fun
          <input
            type="checkbox"
            name="fun"
            onClick={handlerCheckbox}
            defaultChecked
          />
        </label>
        <label htmlFor="difficult">
          Difficult
          <input
            type="checkbox"
            name="difficult"
            onClick={handlerCheckbox}
            defaultChecked
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
      <VictoryChart
        style={{ parent: { maxWidth: "90%" } }}
        domainPadding={10}
        theme={VictoryTheme.material}
        width={1000}
      >
        <VictoryLegend
          x={420}
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
        />
        <VictoryAxis
          style={{ tickLabels: { fontSize: 10 } }}
          dependentAxis
          tickValues={[1, 2, 3, 4, 5]}
          tickFormat={[1, 2, 3, 4, 5]}
        />
        <VictoryGroup>
          <VictoryStack>
            <VictoryBar
              barWidth={5}
              data={dataAvareges}
              x="assignment"
              y={"fun"}
              style={{ data: { fill: "tomato", width: 3 } }}
              alignment="end"
            />
          </VictoryStack>
          <VictoryStack>
            <VictoryBar
              data={dataAvareges}
              x="assignment"
              y={"difficult"}
              style={{ data: { fill: "gold", width: 5 } }}
              alignment="start"
            />
          </VictoryStack>
        </VictoryGroup>
      </VictoryChart>
      <VictoryChart
        style={{
          parent: { maxWidth: "90%" },
          data: { stroke: "#c43a31" },
        }}
        domainPadding={15}
        theme={VictoryTheme.material}
        width={1000}
      >
        <VictoryLegend
          x={420}
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
        />
        <VictoryAxis
          style={{ tickLabels: { fontSize: 10 } }}
          dependentAxis
          tickValues={[1, 2, 3, 4, 5]}
          tickFormat={[1, 2, 3, 4, 5]}
        />
        <VictoryGroup>
          <VictoryLine
            style={{
              data: { stroke: "gold", strokeWidth: 2 },
            }}
            data={dataAvareges}
            x="assignment"
            y={"difficult"}
          />
          <VictoryLine
            style={{
              data: { stroke: "tomato", strokeWidth: 2 },
            }}
            data={dataAvareges}
            y={"fun"}
          />
        </VictoryGroup>
      </VictoryChart>
    </div>
  );
}
