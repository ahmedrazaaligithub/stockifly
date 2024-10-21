import React from 'react'
import { DatePicker } from 'antd';
function HomeFilter({data,setSelectedFilter}) {
const { RangePicker } = DatePicker;
    
  return (
    <>
      <RangePicker className="py-1 w-56" />
        <div className="flex justify-center gap-3">
          {data.map((data, index) => {
            return (
              <div
                key={index}
                className="bg-white shadow rounded  border border-[#ddd]  px-3 py-1 capitalize text-sm"
                onClick={() => setSelectedFilter(data)}
              >
                {" "}
                {data}{" "}
              </div>
            );
          })}
        </div>
    </>
  )
}

export default HomeFilter
