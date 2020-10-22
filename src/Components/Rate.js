import React, { useState, useEffect } from "react";

function Rate(props) {
  const [CurrencyRates, setCR] = useState([]);
  const id = props.id;
  const Currency = props.Currency;
  const [startDate, setStartDate] = useState(props.start);
  const [endDate, setEndDate] = useState(props.end);

  useEffect(() => {
    fetch(
      `https://www.nbrb.by/API/ExRates/Rates/Dynamics/${id}?startDate=${startDate
        .toISOString()
        .substring(0, 10)}&endDate=${
        endDate && endDate.toISOString().substring(0, 10)
      } `
    )
      .then((response) => response.json())
      .then((data) => {
        setCR(data);
      });
  }, [endDate]);

  useEffect(() => {
    setStartDate(props.start);
    if (props.end) setEndDate(props.end);
  }, [props]);

  return (
    <tr>
      <td>{Currency}</td>
      {CurrencyRates
        ? CurrencyRates.map((item, i) => {
            return <td key={i}>{item.Cur_OfficialRate}</td>;
          })
        : null}
    </tr>
  );
}

export default Rate;
