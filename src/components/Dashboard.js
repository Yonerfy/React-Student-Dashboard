import React from "react";
import { useSelector, useDispatch } from "react-redux";
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
  console.log(data);
  return (
    <div>
      <h1>Dashbord Component</h1>
      <div>
        <a href="#">Evelyn</a>
        <a href="#">Aranka</a>
        <a href="#">Floris</a>
        <a href="#">Hector</a>
        <a href="#">Martina</a>
        <a href="#">Rahima</a>
        <a href="#">Maurits</a>
        <a href="#">Sandra</a>
        <a href="#">Wietske</a>
        <a href="#">Storm</a>
      </div>
      <VictoryChart
        style={{ parent: { maxWidth: "90%" } }}
        domainPadding={10}
        theme={VictoryTheme.material}
        width={1000}
      >
        <VictoryLegend
          x={470}
          y={20}
          orientation="horizontal"
          gutter={20}
          data={[
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
              data={data}
              x="assignment"
              y={"fun"}
              style={{ data: { fill: "tomato", width: 3 } }}
              alignment="end"
            />
          </VictoryStack>
          <VictoryStack>
            <VictoryBar
              data={data}
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
