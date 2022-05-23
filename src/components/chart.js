import React from "react";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);

export const options = {
	legend: {
		display: false,
	},
};

export const data = {
	labels: [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	],
	datasets: [
		{
			data: [15339, 21345, 18483, 24003, 23489, 24092, 12034],
			lineTension: 0,
			backgroundColor: "transparent",
			borderColor: "#007bff",
			borderWidth: 4,
			pointBackgroundColor: "#007bff",
		},
	],
};

export default function Chart() {
	return <Line options={options} data={data} />;
}
