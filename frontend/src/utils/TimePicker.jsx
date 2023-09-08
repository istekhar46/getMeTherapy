import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
// import './TimePicker.css'; // Custom styles for the timepicker

const TimePicker = ({ selectedTime, onChange }) => {
  const [startDate, setStartDate] = useState(selectedTime);

  // Define your time range here
  const minTime = new Date();
  minTime.setHours(9, 30, 0, 0); // 9:30 AM

  const maxTime = new Date();
  maxTime.setHours(10, 0, 0, 0); // 10:00 AM

  const handleTimeChange = (time) => {
    if (time >= minTime && time <= maxTime) {
      setStartDate(time);
      onChange(time);
    }
  };

  return (
    <DatePicker
      selected={startDate}
      onChange={handleTimeChange}
      showTimeSelect
      showTimeSelectOnly
      timeIntervals={30}
      timeFormat="HH:mm"
      minTime={minTime}
      maxTime={maxTime}
      dateFormat="h:mm aa"
      className="border rounded-lg py-2 px-3 text-gray-700"
    />
  );
};

export default TimePicker;
