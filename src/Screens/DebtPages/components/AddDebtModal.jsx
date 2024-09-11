import { Modal } from "@nextui-org/react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import React, { useEffect, useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import { useNavigate, useParams } from "react-router-dom";
import { db } from "../../../firebase";

const AddDebtModal = ({ open, closeAction }) => {
  const [title, setTitle] = useState("");
  const [limit, setLimit] = useState("");
  const [balance, setBalance] = useState("");
  const [interest, setInterest] = useState("");
  const [category, setCategory] = useState("");
  const auth = getAuth();
  const navigate = useNavigate();
  let uid = useRef({});
  let emailAdd = useRef({});
  let { keyCode } = useParams();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      uid.current = currentUser.uid;
      emailAdd.current = currentUser.email;
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const createDebt = async (e) => {
    e.preventDefault(e);
    console.log(keyCode);
    if (validateTitle(title) === false) {
      alert("Title too short");
      return;
    }
    if (validateLimit(limit) === false) {
      alert("Limit too small");
      return;
    }
    if (validateBalance(balance) === false) {
      alert("Balance too low");
      return;
    }
    if (validateInterest(interest) === false) {
      alert("Interest too low");
      return;
    }

    await addDoc(collection(db, "Users", keyCode, "Debts"), {
      title: title,
      balance: balance,
      category: category,
      original: limit,
      interest: interest,
      createby: emailAdd.current,
    });
    navigate("/debts");
  };

  const validateTitle = (e) => {
    if (e == null || e.trim().length < 2) {
      return false;
    } else {
      return true;
    }
  };

  const validateLimit = (e) => {
    if (e != null) {
      var bal = parseFloat(e);
      if (bal < 100) {
        return false;
      } else {
        return true;
      }
    }
  };

  const validateBalance = (e) => {
    if (e != null) {
      var bal = parseFloat(e);
      if (bal < 1.0) {
        return false;
      } else {
        return true;
      }
    }
  };

  const validateInterest = (e) => {
    if (e != null) {
      var bal = parseFloat(e);
      if (bal < 1.0) {
        return false;
      } else {
        return true;
      }
    }
  };

  return (
    <Modal isOpen={open} onOpenChange={closeAction}>
      <div>
        <Modal.Header>Add New Debt</Modal.Header>
        <Modal.Body className="flex flex-col items-center gap-2">
          <div>Please enter the information of your new debt.</div>
          <form onSubmit={createDebt}>
            <div className="border-2 m-1">
              <input
                name="Ttile"
                placeholder="Debt Title"
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <p className="border-2 m-1">
              <input
                name="Original"
                placeholder="Loan amnt or Credit limit"
                onChange={(e) => setLimit(e.target.value)}
              />
            </p>
            <p className="border-2 m-1">
              <input
                name="Balance"
                placeholder="Balance"
                onChange={(e) => setBalance(e.target.value)}
              />
            </p>
            <p className="border-2 m-1">
              <input
                name="Intrest"
                placeholder="Interest Rate"
                onChange={(e) => setInterest(e.target.value)}
              />
            </p>
            <p className="border-2 m-1">
              <label for="Category">Category</label>
            </p>
            <p className="border-2 m-1">
              <select
                name="Categories"
                id="cats"
                onChange={() =>
                  setCategory(document.getElementById("cats").value)
                }
              >
                <option value="" disabled selected hidden>
                  Select Category
                </option>
                <option value="Mortgage">Mortgage</option>
                <option value="Car loan">Auto Loan</option>
                <option value="Credit Card">Credit Card</option>
                <option value="Medical Bill">Medical Bill</option>
              </select>
            </p>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button type="submit" className="ml-12">
            Add Debt
          </Button>
        </Modal.Footer>
      </div>
    </Modal>
  );
};

export default AddDebtModal;
