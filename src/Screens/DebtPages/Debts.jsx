import { getAuth, onAuthStateChanged } from "firebase/auth";
import { collection, onSnapshot, query } from "firebase/firestore";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomNavbar from "../../Components/navbar";
import { UserAuth } from "../../Controller/Auth";
import { db } from "../../firebase";
import { AddDebtModal } from "./components/AddDebtModal";
import { DebtCard } from "./components/DebtCard";

const DebtPageScreen = () => {
  const { user } = UserAuth();
  const auth = getAuth();
  const [debts, setDebts] = useState([]);
  const [update, setUpdate] = useState(false);
  let uid = useRef({});
  let keyCode = useRef({});
  const navigate = useNavigate();
  let currentDebt = useRef({});

  const closeAddModal = () => {
    setAddDebtModalOpen(false);
  };

  const setDebt = (debt) => {
    console.log(debt);
    currentDebt = debt;
    console.log(currentDebt.interest);
    showDetails();
  };

  const showKey = () => {
    alert(
      "If card has red text the debt is greater than 75% of limit or original amount \n If card has yellow text the debt is greater than 50% of limit or original amount \n If card has green text the debt is greater than 25% of limit or original amount \n If card has Blue text the debt is less than 25% of limit or original amount"
    );
  };

  const showDetails = () => {
    navigate(
      "/debtDetail/" +
        currentDebt.title +
        "/" +
        currentDebt.interest +
        "/" +
        currentDebt.balance +
        "/" +
        currentDebt.category +
        "/" +
        currentDebt.id +
        "/" +
        currentDebt.original +
        "/" +
        keyCode.current
    );
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      uid.current = currentUser.uid;
    });
    return () => {
      unsubscribe();
    };
  }, [auth]);

  useEffect(() => {
    let debtsArr = [];
    const q = query(collection(db, "Users"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        if (doc.data().uid === uid.current) {
          console.log(doc.data().uid);
          keyCode.current = doc.id;
          const q2 = query(collection(db, "Users", doc.id, "Debts"));
          const unsubscribe = onSnapshot(q2, (querySnapshot) => {
            querySnapshot.forEach((doc) => {
              debtsArr.push({ ...doc.data(), id: doc.id });
            });
            setDebts(debtsArr);
          });
        }
      });
    });

    console.log("key code", keyCode.current);

    return () => unsubscribe();
  }, [update]);

  return (
    <div className="App">
      <CustomNavbar />
      <div className="App-body">
        <div>{user && user.email}'s debt list</div>
        <div>Click tile to see details</div>
        <div className="grid grid-cols-4 place-items-center gap-16">
          {debts.map((debt, key) => (
            <DebtCard key={key} debt={debt} />
          ))}
        </div>
        <p>
          <button type="button" class="btn btn-link" onClick={showKey}>
            Color Key
          </button>
        </p>
      </div>
      <AddDebtModal
        docID={keyCode.current}
        setUpdate={() => setUpdate(!update)}
      />
    </div>
  );
};

export default DebtPageScreen;
