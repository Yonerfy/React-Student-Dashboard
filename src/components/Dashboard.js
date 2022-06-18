import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
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
  const data = useSelector((state) => state.student);

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
  const t = data.filter((s) => s.assignment === "W6D2");
  // const t = calcAvarege(data, "W1D2-1");
  console.log(t);

  function handlerCheckbox(e) {
    const { name, value } = e.target;
  }

  return (
    <div>
      <h1>Dashbord Component</h1>
      <div>
        <label htmlFor="All">
          All
          <input type="checkbox" name="All" onClick={handlerCheckbox} />
        </label>
        <label htmlFor="fun">
          Fun
          <input type="checkbox" name="fun" onClick={handlerCheckbox} />
        </label>
        <label htmlFor="difficult">
          Difficult
          <input type="checkbox" name="difficult" onClick={handlerCheckbox} />
        </label>
        <label htmlFor="Evelyn">
          Evelyn
          <input type="checkbox" name="Evelyn" onClick={handlerCheckbox} />
        </label>
        <label htmlFor="Aranka">
          Aranka
          <input type="checkbox" name="Aranka" onClick={handlerCheckbox} />
        </label>
        <label htmlFor="Floris">
          Floris
          <input type="checkbox" name="Floris" onClick={handlerCheckbox} />
        </label>
        <label htmlFor="Hector">
          Hector
          <input type="checkbox" name="Hector" onClick={handlerCheckbox} />
        </label>
        <label htmlFor="Martina">
          Martina
          <input type="checkbox" name="Martina" onClick={handlerCheckbox} />
        </label>
        <label htmlFor="Rahima">
          Rahima
          <input type="checkbox" name="Rahima" onClick={handlerCheckbox} />
        </label>
        <label htmlFor="Maurits">
          Maurits
          <input type="checkbox" name="Maurits" onClick={handlerCheckbox} />
        </label>
        <label htmlFor="Wandra">
          Sandra
          <input type="checkbox" name="Wandra" onClick={handlerCheckbox} />
        </label>
        <label htmlFor="Wietske">
          Wietske
          <input type="checkbox" name="Wietske" onClick={handlerCheckbox} />
        </label>
        <label htmlFor="Storm">
          Storm
          <input type="checkbox" name="Storm" onClick={handlerCheckbox} />
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
              data: { stroke: "gold" },
              parent: { border: "1px solid #ccc" },
            }}
            data={dataAvareges}
            x="assignment"
            y="difficult"
          />
          <VictoryLine
            style={{
              data: { stroke: "tomato" },
              parent: { border: "1px solid #ccc" },
            }}
            data={dataAvareges}
            x="assignment"
            y="fun"
          />
        </VictoryGroup>
      </VictoryChart>
    </div>
  );
}
