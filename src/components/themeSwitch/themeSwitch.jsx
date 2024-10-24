import React from 'react'
import { Switch } from "antd";
function ThemeSwitch({defaultChecked,onChange,label}) {
  return (
    <>
    <p className='mb-3 text-sm '>{label}</p>
    <Switch defaultChecked={defaultChecked} onChange={onChange} />
    </>
  )
}

export default ThemeSwitch
