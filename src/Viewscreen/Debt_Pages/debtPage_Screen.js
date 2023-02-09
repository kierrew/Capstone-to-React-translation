import React, { useEffect, useRef, useState } from 'react'
import CustomNavbar from "../../Model/Components/navbar";
import { UserAuth } from "../../Controller/Auth";
import { db } from '../../firebase';
import { query, collection, onSnapshot } from 'firebase/firestore';
import Debt from '../../Model/debt';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

const DebtPageScreen = () => {
  const { user } = UserAuth();
  const auth = getAuth();
  const [debts, setDebts] = useState([]);
  let uid = useRef({});
  let keyCode = useRef({});
  const navigate = useNavigate()
  let currentDebt = useRef({});

  const newDebt = () => {
    navigate('/addDebt/' + keyCode.current)
  }

  const setDebt = (debt) => {
    //console.log(debt)
    currentDebt = debt
    console.log(currentDebt.interest)
    showDetails()

  }

  const showKey = () => {
    alert("If card has red text the debt is greater than 75% of limit or original amount \n If card has yellow text the debt is greater than 50% of limit or original amount \n If card has green text the debt is greater than 25% of limit or original amount \n If card has Blue text the debt is less than 25% of limit or original amount")
  }

  const showDetails = () => {
    navigate('/debtDetail/' + currentDebt.title + '/' +
      currentDebt.interest + '/' +
      currentDebt.balance + '/' +
      currentDebt.category + '/' +
      currentDebt.id + '/' +
      currentDebt.original + '/' +
      keyCode.current)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      uid.current = currentUser.uid
    });
    return () => {
      unsubscribe();
    };
  }, []);


  useEffect(() => {
    let usersArr = []
    let debtsArr = []
    const q = query(collection(db, 'Users'))
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        if (doc.data().uid === uid.current) {
          console.log(doc.data().uid)
          keyCode.current = doc.id
          const q2 = query(collection(db, 'Users',
            doc.id, 'Debts'));
          const unsubscribe = onSnapshot(q2, (querySnapshot) => {
            querySnapshot.forEach((doc) => {
              debtsArr.push({ ...doc.data(), id: doc.id })
            });
            setDebts(debtsArr)
          })
        }
      });
    });

    return () => unsubscribe()
  }, [])

  return (
    <div
      className="App">
      <CustomNavbar />
      <body
        className='App-body'>
        <p>
          {user && user.email}'s debt list
        </p>
        <p>
          Click tile to see details
        </p>
        <ul>
          {debts.map((debt, index) => (
            <button
              className='No-underline'
              type='button'
              onClick={setDebt.bind(this, debt)}>
              <Debt key={index} debt={debt} />
            </button>
          ))}
        </ul>
        <p>
          <button
            type='button'
            class="btn btn-link"
            onClick={showKey}>
            Color Key
          </button>
        </p>
        <Button
          variant="secondary"
          size="lg"
          onClick={newDebt}>
          Add New Debt
        </Button>
      </body>
    </div>
  )
}

export default DebtPageScreen