import React, { useState, useRef } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export default function Page() {
  const [startDate, setStartDate] = useState(new Date());
  const inputRef = useRef(null);

  const handleTouchStart = (e) => {
    e.preventDefault();
    inputRef.current.setFocus();
  };

  return (
    <div onTouchStart={handleTouchStart}>
      <DatePicker
        onChange={(date) => setStartDate(date)}
        ref={inputRef}
      />
    </div>
  );
}