import React, { useEffect } from 'react'
import { Breadcrumb } from "antd";
import { useLocation, useParams } from 'react-router-dom';
function Breadcrumbs({collapsed}) {
  const location = useLocation()
  const currentPage =location.pathname.split('/')
  useEffect(()=>{
console.log('location',location.pathname.split('/'));

  },[])
  return (
    <div className={`top-0 !ms-0 ${
      collapsed ? "md:!ms-20" : " md:!ms-[200px]"
    }  bg-white px-4 py-4  `}
  >
    <div className="">
      <p className='text-2xl font-semibold capitalize' >{currentPage[2]}</p>

    </div>
    </div>
  )
}

export default Breadcrumbs
