import React, { useRef, useEffect } from "react";
import { createChart } from "lightweight-charts";
import chartOptions from "./chartOptions.json";
import useResizeObserver from "../../custom-hooks/useResizeObserver";
import { DefaultContainer } from "../layout/DefaultContainer";

export default function LineChart({ data, lastValue }) {
  const chartContainer = useRef();
  const parentContainer = useRef();
  const chart = useRef();
  const lineChart = useRef();
  const resizeCallback = ({ width, height }) => {
    chart.current.applyOptions({ width, height });
  };
  const [width, height] = useResizeObserver(parentContainer, resizeCallback);

  useEffect(() => {
    chart.current = createChart(chartContainer.current, chartOptions);
    lineChart.current = chart.current.addAreaSeries({
      topColor: "rgba(239, 131, 84, 0.56)",
      bottomColor: "rgba(239, 131, 84, 0.04)",
      lineColor: "#EF8354",
      lineWidth: 3,
    });
    lineChart.current.setData(data);

    return () => {
      chart.current.remove();
    };
  }, []);

  useEffect(() => {
    if (lastValue) {
      lineChart.current.update(lastValue);
    }
  }, [lastValue]);

  return (
    <DefaultContainer ref={parentContainer}>
      <div ref={chartContainer}></div>
    </DefaultContainer>
  );
}
