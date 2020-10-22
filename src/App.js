import React, { useState } from "react";
import Rates from "./Components/Rates";
import { Container } from "reactstrap";
import DatePicker from "react-datepicker";

const getDatePair = () => {
  var today = new Date();
  var lastWeek = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() - 6,
    today.getHours()
  );
  return {
    today,
    lastWeek,
  };
};

function App() {
  const [startDate, setStartDate] = useState(getDatePair().lastWeek);
  const [endDate, setEndDate] = useState(getDatePair().today);
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };
  return (
    <Container className="m-auto">
      <div className="d-flex justify-content-center flex-column mt-5">
        <Rates start={startDate} end={endDate} />
        <DatePicker
          selected={startDate}
          onChange={onChange}
          startDate={startDate}
          endDate={endDate}
          selectsRange
          inline
        />
      </div>
    </Container>
  );
}

export default App;
