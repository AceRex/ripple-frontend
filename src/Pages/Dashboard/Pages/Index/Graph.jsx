import { Line } from "react-chartjs-2";
import {
  Chart as ChartJs,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip,
} from "chart.js";

ChartJs.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip
);

export default function Graph() {
  const data = {
    labels: ["Q1", "Q2", "Q3"],
    datasets: [
      {
        label: "2020",
        data: [20000, 300000, 6000000],
        backgroundCOlor: "red",
        borderColor: "aqua",
        pointBorderColor: "red",
        tension: 0.4,
      },
      {
        label: "2021",
        data: [10000, 7000000, 3000000],
        backgroundCOlor: "green",
        borderColor: "red",
        pointBorderColor: "green",
        fill: true,
        tension: 0.4,
      },
    ],
  };
  const options = {
    plugins: {
      legend: true,
    },
    scales: {
      y: {
        min: 10000,
        max: 10000000,
      },
    },
  };
  return (
    <div className="mt-16">
      <Line data={data} options={options}></Line>
    </div>
  );
}
