"use client";
import { finalResults, groupNumber, parallelOption } from "@/utils/data";
import ReactECharts from "echarts-for-react";

const Statistics = () => {
  return (
    <div className="flex flex-col gap-4 h-full bg-black opacity-70 border-2 border-fourth-color rounded-2xl">
      <h1 className="text-3xl font-semibold text-fourth-color text-center my-3">
        Final Results
      </h1>
      <div className="flex justify-center lg:justify-between flex-col lg:flex-row grey-container">
        {finalResults.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-sm text-gray-400 gap-2"
          >
            <span>{item.label}</span>
            <span className="font-bold text-lg">
              {typeof item.value === "number"
                ? `$ ${groupNumber(item.value)}`
                : item.value}
            </span>
          </div>
        ))}
      </div>
      <h1 className="text-3xl font-semibold text-fourth-color text-center my-3">
        Complete Graph
      </h1>
      <ReactECharts option={parallelOption} />
    </div>
  );
};

export default Statistics;