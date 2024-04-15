import React from 'react';
import { cardsData, groupNumber } from "@/utils/data";
const DashboardDetails = () => {
  return (
    <div className="flex flex-col gap-8 bg-black opacity-70 p-8 border-2 border-fourth-color rounded-2xl">
      <div className="flex items-center justify-between">
        <h1 className="text-xl lg:text-3xl font-semibold text-fourth-color text-center my-3">
          Dashboard
        </h1>
        <select className="border-none bg-main-color p-1.5 lg:p-2.5 font-semibold rounded-md text-sm text-white">
        {["day","week","month"].map((item,index)=>(
          <option key={index} value="" className="bg-main-color text-white">
            1 {item}
          </option>
        ))}
        </select>
      </div>
      <div className="flex justify-center lg:justify-between flex-wrap">
        {cardsData.map((card, index) => (
          <div className="flex flex-col gap-4 text-white" key={index}>
            <div className="text-sm lg:text-lg">
              <span>{card.title} </span>
              <span className="ml-0.5 text-sm font-bold text-fourth-color">
                + {card.change}
              </span>
            </div>

            <div className="flex justify-center items-center text-sm">
              <span>$</span>
              <span className="font-extrabold ml-2">
                {groupNumber(card.amount)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DashboardDetails
