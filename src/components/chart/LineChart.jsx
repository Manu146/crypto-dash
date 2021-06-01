import React, { useRef, useEffect } from "react";
import { createChart } from "lightweight-charts";
import chartOptions from "./chartOptions.json";
import useEventListener from "../../custom-hooks/useEventListener";

function debounce(callback, wait) {
  let timerId;
  return (...args) => {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      callback(...args);
    }, wait);
  };
}

export default function LineChart({ data, lastValue }) {
  const chartContainer = useRef();
  const chart = useRef();
  const lineChart = useRef();
  const handleResize = () => {
    let padding = parseFloat(
      getComputedStyle(chartContainer.current.parentElement).paddingLeft
    );
    let width = chartContainer.current.parentElement.clientWidth - padding * 2;
    chart.current.applyOptions({ width });
  };

  useEventListener("resize", debounce(handleResize, 10));

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

  return <div ref={chartContainer}></div>;
}
