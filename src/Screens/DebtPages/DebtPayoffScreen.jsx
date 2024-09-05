import CircularSlider from "@fseehawer/react-circular-slider";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useParams } from "react-router";
import CustomNavbar from "../../Components/navbar";

const DebtPayoffScreen = () => {
  const { debtTitle } = useParams();
  const { debtBalance } = useParams();
  const { debtInterest } = useParams();
  const { debtOriginal } = useParams();
  const { debtCategory } = useParams();
  const minimumPayment =
    debtCategory === "Credit Card"
      ? parseFloat(debtBalance) * 0.0255
      : (((parseFloat(debtBalance) * (parseFloat(debtInterest) / 100)) / 12) *
          (1 + parseFloat(debtInterest) / 12) ** (30 * 12)) /
        ((1 + parseFloat(debtInterest) / 12) ** (30 * 12) - 1);
  const [paymentAmount, setPaymentAmount] = useState(minimumPayment);
  const [showValue, setShowValue] = useState(true);
  const [intPaid, setIntPaid] = useState(0);
  const [totalPayments, setTotalPayments] = useState(0);

  const calcPayoff = () => {
    let tempInterest = 0;
    let principal = 0;
    let interestPaid = 0;
    let payments = 0;
    let balance = parseFloat(debtBalance);
    let intrest = parseFloat(debtInterest) / 100;
    while (balance > 0) {
      tempInterest = balance * (intrest / 12);
      interestPaid += tempInterest;
      principal = paymentAmount - tempInterest;
      balance = balance - principal;
      payments++;
    }
    setTotalPayments(payments);
    setIntPaid(interestPaid);
    setShowValue(false);
  };

  return (
    <div>
      <CustomNavbar />
      <header className="App-header">{debtTitle} Payoff schedule</header>
      <body className="App-body">
        <p>
          <label>Debt limit or original value</label>
        </p>
        <p>
          <label>$</label>
          {parseFloat(debtOriginal).toFixed(2)}
        </p>
        <p>
          <label>Debt balance</label>
        </p>
        <p>
          <label>$</label>
          {parseFloat(debtBalance).toFixed(2)}
        </p>
        <p>
          <label>Debt interest rate</label>
        </p>
        <p>
          {parseFloat(debtInterest).toFixed(2)}
          <label>%</label>
        </p>
        <p>
          <label>Minimum payment</label>
        </p>
        <p>
          <label>$</label>
          {minimumPayment.toFixed(2)}
        </p>
        <p hidden={showValue}>
          <label>Total number of Monthly Payments</label>
        </p>
        <p hidden={showValue}>{totalPayments}</p>
        <p hidden={showValue}>
          <label>Total Interest Paid</label>
        </p>
        <p hidden={showValue}>
          <label>$</label>
          {intPaid}
        </p>
        <p>
          <CircularSlider
            label="Payment Amount"
            labelColor="#FFFFFF"
            knobColor="#049313"
            progressColorFrom="#F30B0B"
            progressColorTo="#049313"
            trackColor="#FFFFFF"
            min={parseFloat(minimumPayment).toFixed(2)}
            max={parseFloat(debtBalance).toFixed(2)}
            prependToValue="$"
            onChange={(value) => {
              setPaymentAmount(value);
            }}
          />
        </p>
        <p>
          <Button variant="secondary" size="lg" onClick={calcPayoff}>
            Show Pay off Schedule
          </Button>
        </p>
      </body>
    </div>
  );
};

export default DebtPayoffScreen;
