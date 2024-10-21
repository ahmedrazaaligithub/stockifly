import React, { useEffect, useState } from "react";
import {
  BarCharts,
  DoughnutChart,
  HomeFilter,
  Layout,
  LineChart,
} from "../../components/components";
import { TfiStatsUp } from "react-icons/tfi";
import { PiBagLight } from "react-icons/pi";
import { AiOutlineTag } from "react-icons/ai";
import { AiOutlineBank } from "react-icons/ai";


function Dashboard() {
  const [selectedFilter, setSelectedFilter] = useState();
  const filterByDuration = [
    "today",
    "yesterday",
    "last 7 days",
    "this month",
    "This Year",
  ];
  const stats = [
    {
      amount: "$48,162.07",
      text: "Total Sales",
      icon: <TfiStatsUp />,
    },
    {
      amount: "$139.00",
      text: "Total Expense",
      icon: <PiBagLight />,
    },
    {
      amount: "$32,177.15",
      text: "Payment Sale",
      icon: <AiOutlineTag />,
    },
    {
      amount: "$22,047.18",
      text: "Payment Recived",
      icon: <AiOutlineBank />,
    },
  ];
  const topSellingProducts = [
    { name: "Apple iMac", value: 40, color: "#20C997" },
    { name: "Acer Aspire Desktop", value: 25, color: "#6f42c1" },
    { name: "Sony Bravia Google TV", value: 20, color: "#ff7c43" },
    { name: "Dell OptiPlex Desktop Computer", value: 15, color: "#f8c146" },
  ];
  const salesAndPurchasesData = [
    { date: "2024-10-10", purchases: 2000, sales: 500 },
    { date: "2024-10-11", purchases: 1500, sales: 400 },
    { date: "2024-10-12", purchases: 46000, sales: 12000 },
    { date: "2024-10-13", purchases: 10000, sales: 6000 },
    { date: "2024-10-14", purchases: 25000, sales: 15000 },
    { date: "2024-10-15", purchases: 1000, sales: 35000 },
    { date: "2024-10-16", purchases: 500, sales: 1000 },
  ];
  const mockData = [
    { date: "2024-10-04", paymentSent: 0, paymentReceived: 4000 },
    { date: "2024-10-08", paymentSent: 500, paymentReceived: 2000 },
    { date: "2024-10-10", paymentSent: 1500, paymentReceived: 3000 },
    { date: "2024-10-11", paymentSent: 4000, paymentReceived: 5000 },
    { date: "2024-10-12", paymentSent: 7000, paymentReceived: 1000 },
    { date: "2024-10-13", paymentSent: 9000, paymentReceived: 800 },
    { date: "2024-10-15", paymentSent: 12000, paymentReceived: 0 },
    { date: "2024-10-16", paymentSent: 20000, paymentReceived: 15000 },
  ];

  useEffect(() => {
    console.log("selectedFilter", selectedFilter);
  }, [selectedFilter]);
  return (
    <Layout selected={"2"}>
      {/* filter section */}
      <div className="flex justify-between items-center">
        <HomeFilter data={filterByDuration} setSelectedFilter={setSelectedFilter}/>
      </div>
      {/* stats section */}
      <div className="flex gap-2 mt-6">
        {stats?.map((data, index) => {
          return (
            <div
              key={index}
              className="flex gap-10 py-5 container mx-auto px-3 rounded shadow bg-white flex-1"
            >
              <p className="h-full bg-secondary rounded p-4 text-white text-2xl">
                {data?.icon}
              </p>
              <div>
                <p className="text-xl font-medium ">{data?.amount}</p>
                <p className="text-sm text-gray ">{data?.text}</p>
              </div>
            </div>
          );
        })}
      </div>
      {/* charts */}

      <div className="grid grid-cols-4 grid-rows-2  gap-6 w-full mt-6">
        <div className="col-span-1 row-start-1 row-end-2 bg-white flex flex-col gap-4 rounded">
          <p className="mx-3 py-3 border-b mb-6 border-[#ddd] font-medium text-xl">
            Top Selling Products
          </p>
          <DoughnutChart data={topSellingProducts} height={"200px"} />
        </div>

        <div className="col-span-3 row-start-1 row-end-3 bg-white rounded">
          <p className="mx-3 py-3 mb-8 border-b border-[#ddd] font-medium text-xl">
            Sales & Purchase
          </p>
          <div className="px-2 ">
            <BarCharts data={salesAndPurchasesData} />
          </div>
        </div>
      </div>
      <div className="flex-1 bg-white p-4 mt-6">
        <p className="mx-3 py-3 border-b mb-6 border-[#ddd] font-medium text-xl">
          Payments
        </p>
        <LineChart data={mockData} />
      </div>
    </Layout>
  );
}

export default Dashboard;
