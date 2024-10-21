import { Button } from 'antd'
import React from 'react'

function ThemeButton({children,className ,htmlType,onClick ,bgColor,textColor}) {
  return (
    <Button htmlType={htmlType} onClick={onClick} className={`${bgColor ? bgColor:"bg-blue"} ${textColor?textColor:"text-white"}   !py-3 border-none hover:!bg-inherit hover:border hover:border-blue  hover:!text-blue  ${className}`}>
      {children}
    </Button>
  )
}

export default ThemeButton
