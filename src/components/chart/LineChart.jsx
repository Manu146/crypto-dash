import React, { useRef, useEffect } from "react";
import { createChart } from "lightweight-charts";
import chartOptions from "./chartOptions.json";
import useResizeObserver from "../../custom-hooks/useResizeObserver";
import { DefaultContainer } from "../layout/DefaultContainer";

/*function debounce(callback, wait) {
  let timerId;
  return (...args) => {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      callback(...args);
    }, wait);
  };
}*/

export default function LineChart({ data, lastValue }) {
  const chartContainer = useRef();
  const parentContainer = useRef();
  const chart = useRef();
  const lineChart = useRef();
  const { width, height } = useResizeObserver(parentContainer);

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

  useEffect(() => {
    chart.current.applyOptions({ width, height });
  }, [width, height]);

  return (
    <DefaultContainer ref={parentContainer}>
      <div ref={chartContainer}></div>
    </DefaultContainer>
  );
}
