import React, { useEffect, useState } from "react";
import { Table, Input } from "reactstrap";
import Rate from "./Rate";
import { node } from "./Data";

const getDaysArray = function (s, e) {
  for (var a = [], d = new Date(s); d <= e; d.setDate(d.getDate() + 1)) {
    a.push(new Date(d));
  }
  return a;
};

function Rates(props) {
  const [days, setDays] = useState();
  const [start, setStartDate] = useState(props.start);
  const [end, setEndDate] = useState(props.end);
  const [showRates, setRates] = useState(node);
  const handleSearch = (str) => {
    const results = node.filter((curr) =>
      curr.name.toLowerCase().includes(str.toLowerCase())
    );
    setRates(results);
  };

  useEffect(() => {
    setStartDate(props.start);
    setEndDate(props.end);
  }, [props]);

  useEffect(() => {
    if (end) {
      setDays(
        getDaysArray(start, end).map((v) => v.toISOString().slice(0, 10))
      );
    }
  }, [end]);

  return (
    <div>
      <Input
        type="text"
        className="mb-3 w-40"
        onChange={(e) => handleSearch(e.target.value)}
        placeholder="You're welcome to input some values"
      />
      <Table bordered hover style={{ overflowX: "auto", width: "100%" }}>
        <thead>
          <tr>
            <th></th>
            {days &&
              days.map((item, i) => {
                return <th key={i}>{item}</th>;
              })}
          </tr>
        </thead>
        <tbody>
          {showRates.map((item, i) => {
            return (
              <Rate
                key={i}
                Currency={item.name}
                id={item.id}
                start={start}
                end={end}
              />
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default Rates;
