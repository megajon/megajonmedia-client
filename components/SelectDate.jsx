import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const SelectDate = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      // showTimeSelect
      // timeFormat="hh:mm"
      // timeIntervals={15}
      // timeCaption="time"
      dateFormat="MMMM d, yyyy"
    />
  );
}

export default SelectDate;