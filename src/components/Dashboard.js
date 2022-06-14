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
} from "victory";

export default function Dashbord() {
  const data = useSelector((state) => state.student);
  const SCRUM = data.filter((student) => student.assignment === "SCRUM");
  const W1D11 = data.filter((student) => student.assignment === "W1D1-1");
  const W1D21 = data.filter((student) => student.assignment === "W1D2-1");
  const W1D22 = data.filter((student) => student.assignment === "W1D2-2");
  const W1D23 = data.filter((student) => student.assignment === "W1D2-3");
  const W1D24 = data.filter((student) => student.assignment === "W1D2-4");
  const W1D25 = data.filter((student) => student.assignment === "W1D2-5");
  const W1D31 = data.filter((student) => student.assignment === "W1D3-1");
  const W1D32 = data.filter((student) => student.assignment === "W1D3-2");
  const W1D34 = data.filter((student) => student.assignment === "W1D3-4");
  const W1D35 = data.filter((student) => student.assignment === "W1D3-5");
  const W1D3 = data.filter((student) => student.assignment === "W1D3");
  const W1D41 = data.filter((student) => student.assignment === "W1D4-1");
  const W1D4 = data.filter((student) => student.assignment === "W1D4");
  const W1D5 = data.filter((student) => student.assignment === "W1D5");
  const W2D11 = data.filter((student) => student.assignment === "W2D1-1");
  const W2D12 = data.filter((student) => student.assignment === "W2D1-2");
  const W2D21 = data.filter((student) => student.assignment === "W2D2-1");
  const W2D22 = data.filter((student) => student.assignment === "W2D2-2");
  const W2D23 = data.filter((student) => student.assignment === "W2D2-3");
  const W2D31 = data.filter((student) => student.assignment === "W2D3-1");
  const W2D32 = data.filter((student) => student.assignment === "W2D3-2");
  const W2D33 = data.filter((student) => student.assignment === "W2D3-3");
  const W2D41 = data.filter((student) => student.assignment === "W2D4-1");
  const W2D42 = data.filter((student) => student.assignment === "W2D4-2");
  const W2D43 = data.filter((student) => student.assignment === "W2D4-3");
  const W2D5 = data.filter((student) => student.assignment === "W2D5");
  const W3D11 = data.filter((student) => student.assignment === "W3D1-1");
  const W3D12 = data.filter((student) => student.assignment === "W3D1-2");
  const W3D13 = data.filter((student) => student.assignment === "W3D1-3");
  const W3D14 = data.filter((student) => student.assignment === "W3D1-4");
  const W3D21 = data.filter((student) => student.assignment === "W3D2-1");
  const W3D22 = data.filter((student) => student.assignment === "W3D2-2");
  const W3D23 = data.filter((student) => student.assignment === "W3D2-3");
  const W3D31 = data.filter((student) => student.assignment === "W3D3-1");
  const W3D32 = data.filter((student) => student.assignment === "W3D3-2");
  const W3D33 = data.filter((student) => student.assignment === "W3D3-3");
  const W3D34 = data.filter((student) => student.assignment === "W3D3-4");
  const W3D41 = data.filter((student) => student.assignment === "W3D4-1");
  const W3D42 = data.filter((student) => student.assignment === "W3D4-2");
  const W3D5 = data.filter((student) => student.assignment === "W3D5");
  const W4D21 = data.filter((student) => student.assignment === "W4D2-1");
  const W4D22 = data.filter((student) => student.assignment === "W4D2-2");
  const W4D23 = data.filter((student) => student.assignment === "W4D2-3");
  const W4D24 = data.filter((student) => student.assignment === "W4D2-4");
  const W4D31 = data.filter((student) => student.assignment === "W4D3-1");
  const W4D32 = data.filter((student) => student.assignment === "W4D3-2");
  const W4D33 = data.filter((student) => student.assignment === "W4D3-3");
  const W4D34 = data.filter((student) => student.assignment === "W4D3-4");
  const W4D35 = data.filter((student) => student.assignment === "W4D3-5");
  const W4D3 = data.filter((student) => student.assignment === "W4D3");
  const W5D41 = data.filter((student) => student.assignment === "W5D4-1");
  const W5D5 = data.filter((student) => student.assignment === "W5D5");
  const W6D11 = data.filter((student) => student.assignment === "W6D1-1");
  const W6D21 = data.filter((student) => student.assignment === "W6D2-1");
  const W6D2 = data.filter((student) => student.assignment === "W6D2");

  const allStudentAvereges = [
    {
      name: "Student",
      assignment: "SCRUM",
      difficult: calcAvarege(SCRUM),
      fun: calcAvarege(SCRUM, "fun"),
    },
    {
      name: "Student",
      assignment: "W1D1-1",
      difficult: calcAvarege(W1D11),
      fun: calcAvarege(W1D11, "fun"),
    },
    {
      name: "Student",
      assignment: "W1D2-1",
      difficult: calcAvarege(W1D21),
      fun: calcAvarege(W1D21, "fun"),
    },
    {
      name: "Student",
      assignment: "W1D2-2",
      difficult: calcAvarege(W1D22),
      fun: calcAvarege(W1D22, "fun"),
    },
    {
      name: "Student",
      assignment: "W1D2-3",
      difficult: calcAvarege(W1D23),
      fun: calcAvarege(W1D23, "fun"),
    },
    {
      name: "Student",
      assignment: "W1D2-4",
      difficult: calcAvarege(W1D24),
      fun: calcAvarege(W1D24, "fun"),
    },
    {
      name: "Student",
      assignment: "W1D2-5",
      difficult: calcAvarege(W1D25),
      fun: calcAvarege(W1D25, "fun"),
    },
    {
      name: "Student",
      assignment: "W1D3-1",
      difficult: calcAvarege(W1D31),
      fun: calcAvarege(W1D31, "fun"),
    },
    {
      name: "Student",
      assignment: "W1D3-2",
      difficult: calcAvarege(W1D32),
      fun: calcAvarege(W1D32, "fun"),
    },
    {
      name: "Student",
      assignment: "W1D3-4",
      difficult: calcAvarege(W1D34),
      fun: calcAvarege(W1D34, "fun"),
    },
    {
      name: "Student",
      assignment: "W1D3-5",
      difficult: calcAvarege(W1D35),
      fun: calcAvarege(W1D35, "fun"),
    },
    {
      name: "Student",
      assignment: "W1D3",
      difficult: calcAvarege(W1D3),
      fun: calcAvarege(W1D3, "fun"),
    },
    {
      name: "Student",
      assignment: "W1D4-1",
      difficult: calcAvarege(W1D41),
      fun: calcAvarege(W1D41, "fun"),
    },
    {
      name: "Student",
      assignment: "W1D4",
      difficult: calcAvarege(W1D4),
      fun: calcAvarege(W1D4, "fun"),
    },
    {
      name: "Student",
      assignment: "W1D5",
      difficult: calcAvarege(W1D5),
      fun: calcAvarege(W1D5, "fun"),
    },
    {
      name: "Student",
      assignment: "W2D1-1",
      difficult: calcAvarege(W2D11),
      fun: calcAvarege(W2D11, "fun"),
    },
    {
      name: "Student",
      assignment: "W2D1-2",
      difficult: calcAvarege(W2D12),
      fun: calcAvarege(W2D12, "fun"),
    },
    {
      name: "Student",
      assignment: "W2D2-1",
      difficult: calcAvarege(W2D21),
      fun: calcAvarege(W2D21, "fun"),
    },
    {
      name: "Student",
      assignment: "W2D2-2",
      difficult: calcAvarege(W2D22),
      fun: calcAvarege(W2D22, "fun"),
    },
    {
      name: "Student",
      assignment: "W2D2-3",
      difficult: calcAvarege(W2D23),
      fun: calcAvarege(W2D23, "fun"),
    },
    {
      name: "Student",
      assignment: "W2D3-1",
      difficult: calcAvarege(W2D31),
      fun: calcAvarege(W2D31, "fun"),
    },
    {
      name: "Student",
      assignment: "W2D3-2",
      difficult: calcAvarege(W2D32),
      fun: calcAvarege(W2D32, "fun"),
    },
    {
      name: "Student",
      assignment: "W2D3-3",
      difficult: calcAvarege(W2D33),
      fun: calcAvarege(W2D33, "fun"),
    },
    {
      name: "Student",
      assignment: "W2D4-1",
      difficult: calcAvarege(W2D41),
      fun: calcAvarege(W2D41, "fun"),
    },
    {
      name: "Student",
      assignment: "W2D4-2",
      difficult: calcAvarege(W2D42),
      fun: calcAvarege(W2D42, "fun"),
    },
    {
      name: "Student",
      assignment: "W2D4-3",
      difficult: calcAvarege(W2D43),
      fun: calcAvarege(W2D43, "fun"),
    },
    {
      name: "Student",
      assignment: "W2D5",
      difficult: calcAvarege(W2D5),
      fun: calcAvarege(W2D5, "fun"),
    },
    {
      name: "Student",
      assignment: "W3D1-1",
      difficult: calcAvarege(W3D11),
      fun: calcAvarege(W3D11, "fun"),
    },
    {
      name: "Student",
      assignment: "W3D1-2",
      difficult: calcAvarege(W3D12),
      fun: calcAvarege(W3D12, "fun"),
    },
    {
      name: "Student",
      assignment: "W3D1-3",
      difficult: calcAvarege(W3D13),
      fun: calcAvarege(W3D13, "fun"),
    },
    {
      name: "Student",
      assignment: "W3D1-4",
      difficult: calcAvarege(W3D14),
      fun: calcAvarege(W3D14, "fun"),
    },
    {
      name: "Student",
      assignment: "W3D2-1",
      difficult: calcAvarege(W3D21),
      fun: calcAvarege(W3D21, "fun"),
    },
    {
      name: "Student",
      assignment: "W3D2-2",
      difficult: calcAvarege(W3D22),
      fun: calcAvarege(W3D22, "fun"),
    },
    {
      name: "Student",
      assignment: "W3D2-3",
      difficult: calcAvarege(W3D23),
      fun: calcAvarege(W3D23, "fun"),
    },
    {
      name: "Student",
      assignment: "W3D3-1",
      difficult: calcAvarege(W3D31),
      fun: calcAvarege(W3D31, "fun"),
    },
    {
      name: "Student",
      assignment: "W3D3-2",
      difficult: calcAvarege(W3D32),
      fun: calcAvarege(W3D32, "fun"),
    },
    {
      name: "Student",
      assignment: "W3D3-3",
      difficult: calcAvarege(W3D33),
      fun: calcAvarege(W3D33, "fun"),
    },
    {
      name: "Student",
      assignment: "W3D3-4",
      difficult: calcAvarege(W3D34),
      fun: calcAvarege(W3D34, "fun"),
    },
    {
      name: "Student",
      assignment: "W3D4-1",
      difficult: calcAvarege(W3D41),
      fun: calcAvarege(W3D41, "fun"),
    },
    {
      name: "Student",
      assignment: "W3D4-2",
      difficult: calcAvarege(W3D42),
      fun: calcAvarege(W3D42, "fun"),
    },
    {
      name: "Student",
      assignment: "W3D5",
      difficult: calcAvarege(W3D5),
      fun: calcAvarege(W3D5, "fun"),
    },
    {
      name: "Student",
      assignment: "W4D2-1",
      difficult: calcAvarege(W4D21),
      fun: calcAvarege(W4D21, "fun"),
    },
    {
      name: "Student",
      assignment: "W4D2-2",
      difficult: calcAvarege(W4D22),
      fun: calcAvarege(W4D22, "fun"),
    },
    {
      name: "Student",
      assignment: "W4D2-3",
      difficult: calcAvarege(W4D23),
      fun: calcAvarege(W4D23, "fun"),
    },
    {
      name: "Student",
      assignment: "W4D2-4",
      difficult: calcAvarege(W4D24),
      fun: calcAvarege(W4D24, "fun"),
    },
    {
      name: "Student",
      assignment: "W4D3-1",
      difficult: calcAvarege(W4D31),
      fun: calcAvarege(W4D31, "fun"),
    },
    {
      name: "Student",
      assignment: "W4D3-2",
      difficult: calcAvarege(W4D32),
      fun: calcAvarege(W4D32, "fun"),
    },
    {
      name: "Student",
      assignment: "W4D3-3",
      difficult: calcAvarege(W4D33),
      fun: calcAvarege(W4D33, "fun"),
    },
    {
      name: "Student",
      assignment: "W4D3-4",
      difficult: calcAvarege(W4D34),
      fun: calcAvarege(W4D34, "fun"),
    },
    {
      name: "Student",
      assignment: "W4D3-5",
      difficult: calcAvarege(W4D35),
      fun: calcAvarege(W4D35, "fun"),
    },
    {
      name: "Student",
      assignment: "W4D3",
      difficult: calcAvarege(W4D3),
      fun: calcAvarege(W4D3, "fun"),
    },
    {
      name: "Student",
      assignment: "W5D4-1",
      difficult: calcAvarege(W5D41),
      fun: calcAvarege(W5D41, "fun"),
    },
    {
      name: "Student",
      assignment: "W5D5",
      difficult: calcAvarege(W5D5),
      fun: calcAvarege(W5D5, "fun"),
    },
    {
      name: "Student",
      assignment: "W6D1-1",
      difficult: calcAvarege(W6D11),
      fun: calcAvarege(W6D11, "fun"),
    },
    {
      name: "Student",
      assignment: "W6D2-1",
      difficult: calcAvarege(W6D21),
      fun: calcAvarege(W6D21, "fun"),
    },
    {
      name: "Student",
      assignment: "W6D2",
      difficult: calcAvarege(W6D2),
      fun: calcAvarege(W6D2, "fun"),
    },
  ];

  function calcAvarege(arr, funOrDifficult) {
    let funTotal = [];
    let length = arr.length;
    funOrDifficult === "fun"
      ? arr.forEach(({ fun }) => funTotal.push(parseInt(fun)))
      : arr.forEach(({ difficult }) => funTotal.push(parseInt(difficult)));
    const average = funTotal.reduce((a, b) => a + b);
    return Math.round(average / length);
  }
  return (
    <div>
      <h1>Dashbord Component</h1>
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
              data={allStudentAvereges}
              x="assignment"
              y={"fun"}
              style={{ data: { fill: "tomato", width: 3 } }}
              alignment="end"
            />
          </VictoryStack>
          <VictoryStack>
            <VictoryBar
              data={allStudentAvereges}
              x="assignment"
              y={"difficult"}
              style={{ data: { fill: "gold", width: 5 } }}
              alignment="start"
            />
          </VictoryStack>
        </VictoryGroup>
      </VictoryChart>
    </div>
  );
}
