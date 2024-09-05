import React, { useRef } from "react";
import { Card } from "react-bootstrap";

const Debt = ({ debt }) => {
  console.log(debt);
  let textColor = "";
  let iconName = useRef({});

  debt.category == "Mortgage"
    ? (iconName.current = "fa-solid fa-house")
    : debt.category == "Car loan"
      ? (iconName.current = "fa-sharp fa-solid fa-car")
      : debt.category == "Credit Card"
        ? (iconName.current = "fa-sharp fa-solid fa-credit-card")
        : (iconName.current = "fa-sharp fa-solid fa-briefcase-medical");

  (debt.balance / debt.original) * 100 > 75
    ? (textColor = "danger")
    : (debt.balance / debt.original) * 100 > 50
      ? (textColor = "warning ")
      : (debt.balance / debt.original) * 100 > 25
        ? (textColor = "success")
        : (textColor = "info");

  return (
    <Card text={textColor} style={{ width: "600px" }}>
      <Card.Body>
        <Card.Title>{debt.title}</Card.Title>
        <Card.Subtitle>{debt.category}</Card.Subtitle>
        <p>
          <i class={iconName.current}></i>
        </p>
      </Card.Body>
    </Card>
  );
};

export default Debt;
