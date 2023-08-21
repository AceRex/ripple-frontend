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
    labels: ["Mon", "Tue", "Wed"],
    datasets: [
      {
        label: "2020",
        data: [6, 3, 4],
        backgroundCOlor: "red",
        borderColor: "aqua",
        pointBorderColor: "red",
        tension: 0.4,
      },
      {
        label: "2021",
        data: [1, 4, 0],
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
        min: 0,
        max: 10,
      },
    },
  };
  return (
    <div className="mt-16">
      <Line data={data} options={options}></Line>
    </div>
  );
}
