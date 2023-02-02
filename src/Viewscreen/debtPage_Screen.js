import React, { useEffect, useRef, useState } from 'react'
import CustomNavbar from "../Model/Components/navbar";
import { UserAuth } from "../Controller/Auth";
import { db } from '../firebase';
import { query, collection, onSnapshot, QuerySnapshot, where, getDocs, connectFirestoreEmulator } from 'firebase/firestore';
import Debt from '../Model/debt';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Button, Row } from 'react-bootstrap';

const DebtPageScreen = () => {
  const { user } = UserAuth();
  const auth = getAuth();
  const [debts, setDebts] = useState([]);
  const [acc, setAcc] = useState([]);
  let uid = useRef({});

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
    <div className="App">
      <CustomNavbar />
      <body className='App-body'>
        <p>
          {user && user.email}'s debt list
        </p>
        <ul>
          {debts.map((debt, index) => (
            <Debt key={index} debt={debt} />
          ))}
        </ul>
            <Button variant="secondary" size="lg" href="addDebt">
              Add New Debt
            </Button>
      </body>
    </div>
  )
}

export default DebtPageScreen