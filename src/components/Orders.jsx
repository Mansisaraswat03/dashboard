"use client";
import React from "react";
import { groupNumber, ordersData, line3DOption } from "@/utils/data";
import ReactECharts from "echarts-for-react";
import Image from "next/image";

export const Orders = () => {
  return (
    <div className="flex flex-col gap-8 bg-black opacity-70 border-2 border-fourth-color rounded-2xl p-4">
      <div className="flex items-center justify-center gap-4">
        <Image src="/logo.png" alt="logo" width={400} height={400} className="w-24" />
      </div>

      <div
        className={`grey-container py-0 px-2 flex flex-col items-center gap-4`}
      >
        <span className="text-lg text-fourth-color font-bold">Amount</span>
        <span className="text-md font-semibold text-white">
          $ {groupNumber(4560)}
        </span>
      </div>

      <div className="flex flex-col w-full gap-6">
        {ordersData.map((order, index) => (
          <div key={index} className="text-gray-400">
            <div className="flex w-full justify-between text-sm mb-3">
              <span>{order.name}</span>
              <span className="text-fourth-color font-bold">
                $ {order.change}
              </span>
            </div>
            <div className="flex w-full justify-between text-sm ">
              <span>{order.type}</span>
              <span>Items: {order.items}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full">
        <h2 className="text-center text-lg font-semibold text-fourth-color">
          Split by orders
        </h2>
        <ReactECharts option={line3DOption} />
      </div>
    </div>
  );
};