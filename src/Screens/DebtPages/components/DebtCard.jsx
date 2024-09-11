import {
  faBriefcaseMedical,
  faCar,
  faCreditCard,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import React from "react";

export const DebtCard = ({debt}) => {
  console.log(debt);
  let borderColor = "";
  let debtIcon;
  const debtPercentage = (debt.balance / debt.original) * 100;
  const topType =
    debt.category === "Credit Card" ? "Limit: " : "Original Amount: ";

  switch (debt.category) {
    case "Mortgage":
      debtIcon = <FontAwesomeIcon icon={faHouse} />;
      break;
    case "Car loan":
      debtIcon = <FontAwesomeIcon icon={faCar} />;
      break;
    case "Credit Card":
      debtIcon = <FontAwesomeIcon icon={faCreditCard} />;
      break;
    default:
      debtIcon = <FontAwesomeIcon icon={faBriefcaseMedical} />;
  }

  if (debtPercentage > 75) {
    borderColor = "border-red-500";
  } else if (debtPercentage > 50) {
    borderColor = "border-yellow-500";
  } else if (debtPercentage > 25) {
    borderColor = "border-green-500";
  } else {
    borderColor = "blue-500";
  }

  return (
    <Card className={`w-auto h-auto border-2 m-2 ${borderColor}`} isPressable>
      <CardHeader>{debt.title}</CardHeader>
      <CardBody>
        <div className="flex flex-row gap-x-4">
          <p className="flex-auto">{debtIcon}</p>
          <div className="flex-auto">
            <div>
              {topType}: {debt.original}
            </div>
            <div>Balance: {debt.balance}</div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};