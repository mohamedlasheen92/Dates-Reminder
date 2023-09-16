import { Container, Row } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import "./index.css";

import { data } from "./data";

import DatesCount from "./components/DatesCount";
import DatesList from "./components/DatesList";
import DatesAction from "./components/DatesAction";

function App() {
  const [allData, setAllData] = useState(data);

  const deleteData = () => {
    setAllData([]);
  };
  const showData = () => {
    setAllData(data);
  };

  useEffect(() => {
    setAllData([]);
  }, []);

  return (
    <>
      <h1 className="fs-2 text-center my-2 fw-bold text-dark">
        Dates Reminder
      </h1>

      <Container>
        <Row className="justify-content-center mb-2">
          <DatesCount data={allData} />
        </Row>
        <Row className="justify-content-center mb-2">
          <DatesList data={allData} />
        </Row>
        <Row className="justify-content-center">
          <DatesAction deleteAllFunc={deleteData} showAllFunc={showData} />
        </Row>
      </Container>
    </>
  );
}

export default App;
