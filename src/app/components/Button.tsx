import React from 'react'

const Button = (props:any) => {
  return (
    <div className='flex justify-center pt-2 pb-4'>
        <button className={`${props.bgColor} px-2 py-2 text-white rounded-lg items-center`}>
      {props.btnText}
      </button>
    </div>
  )
}

export default Button
