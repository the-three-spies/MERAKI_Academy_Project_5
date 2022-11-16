import React from 'react'
// import { DatePicker } from 'react-responsive-datepicker'
import { useState } from 'react';
import "./index.css";
const Calender = () => {
    const [isOpen, setIsOpen] =useState(false)

  return (
    <div>
      <button
        onClick={() => {
          setIsOpen(true)
        }}
      >
        Open
      </button>
      {/* <DatePicker
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        defaultValue={new Date(2022, 8, 8)}
        minDate={new Date(2022, 10, 10)}
        maxDate={new Date(2023, 0, 10)}
        headerFormat='DD, MM dd'
      /> */}
    </div>
  )
}


export default Calender