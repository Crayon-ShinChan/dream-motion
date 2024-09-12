"use client";

import { VChart } from "@visactor/react-vchart";
import { IPieChartSpec, registerMorph } from "@visactor/vchart";
import { useTheme } from "nextra-theme-docs";
import { useState, useEffect } from "react";

const pieSpec: IPieChartSpec = {
  type: "pie",
  data: [
    {
      values: [
        { type: "1", value: Math.random() },
        { type: "2", value: Math.random() },
        { type: "3", value: Math.random() },
      ],
    },
  ],
  outerRadius: 0.8,
  innerRadius: 0.6,
  valueField: "value",
  categoryField: "type",
  tooltip: {
    visible: false,
  },
};

const barSpec = Object.assign({}, pieSpec, {
  type: "bar",
  xField: "type",
  yField: "value",
  seriesField: "type",
});

const specs = [pieSpec, barSpec];

export default function GlobalAnimation() {
  const { theme } = useTheme();
  console.log("theme", theme);
  const [specIndex, setSpecIndex] = useState(0);

  useEffect(() => {
    registerMorph();
    setInterval(() => {
      setSpecIndex((specIndex + 1) % specs.length);
    }, 2000);
  }, [specIndex]);

  return <VChart spec={specs[specIndex]} />;
}

// const vchart = new VChart(specs[0], { dom: CONTAINER_ID });

// vchart.renderSync();
// let count = 1;
// setInterval(() => {
//   vchart.updateSpec(specs[count % 2]);
//   count++;
// }, 2000);
