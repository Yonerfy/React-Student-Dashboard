import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  VictoryBar,
  VictoryChart,
  VictoryTheme,
  VictoryStack,
  VictoryAxis,
  VictoryGroup,
  VictoryLabel,
} from "victory";

export default function Dashbord() {
  const data = useSelector((state) => state.student);
  console.log(data);
  return (
    <div>
      <h1>Dashbord Component</h1>
      <div>
        <label htmlFor="evelyn">
          Evelyn
          <input type="checkbox" name="evelyn" id="evelyn" />
        </label>
        <label htmlFor="aranka">
          Aranka
          <input type="checkbox" name="aranka" id="aranka" />
        </label>
        <label htmlFor="floris">
          Floris
          <input type="checkbox" name="floris" id="floris" />
        </label>
        <label htmlFor="hector">
          Hector
          <input type="checkbox" name="hector" id="hector" />
        </label>
        <label htmlFor="martina">
          Martina
          <input type="checkbox" name="martina" id="martina" />
        </label>
        <label htmlFor="rahima">
          Rahima
          <input type="checkbox" name="rahima" id="rahima" />
        </label>
        <label htmlFor="sandra">
          Sandra
          <input type="checkbox" name="sandra" id="sandra" />
        </label>
        <label htmlFor="wietske">
          Wietske
          <input type="checkbox" name="wietske" id="wietske" />
        </label>
        <label htmlFor="storm">
          Storm
          <input type="checkbox" name="storm" id="storm" />
        </label>
      </div>
      <VictoryChart
        style={{ parent: { maxWidth: "90%" } }}
        domainPadding={10}
        theme={VictoryTheme.material}
        width={1000}
      >
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
