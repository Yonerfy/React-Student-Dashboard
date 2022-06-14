import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
  VictoryBar,
  VictoryChart,
  VictoryTheme,
  VictoryStack,
  VictoryAxis,
  VictoryGroup,
  VictoryLegend,
} from "victory";

export default function Student() {
  const { studentName } = useParams();
  const data = useSelector((state) =>
    state.student.filter((student) => student.name === studentName)
  );

  return (
    <div>
      <h1>Student Component</h1>
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
            { name: data[0].name, symbol: { fill: "tomato", type: "star" } },
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
