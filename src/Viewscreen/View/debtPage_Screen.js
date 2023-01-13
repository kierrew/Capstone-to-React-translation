import React, { useEffect, useRef, useState } from 'react'
import CustomNavbar from "../../Model/Components/navbar";
import { UserAuth } from "../../Controller/Auth";
import { db } from '../../firebase';
import * as firebase from 'firebase/app';
import { query, collection, onSnapshot, QuerySnapshot, where } from 'firebase/firestore';
import Debt from '../../Model/debt';
import { getAuth, onAuthStateChanged } from "firebase/auth";

const DebtPageScreen = () => {


  const auth = getAuth();
  const collectionRef = collection(db, 'Users');
  const [people, setPeople] = useState([]);
  const [debts, setDebts] = useState([]);
  const [current, setCurrent] = useState({});
  const [docID, setDocId] = useState({});
  const [uid, setUid] = useState({});

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      console.log(uid)
      setUid(uid)
      // ...
    } else {
      // User is signed out
      // ...
    }
  });

  console.log(uid)


  useEffect(() => {
    //let uid = user.id ? uid.toString() : '';
    let usersArr = []
    let currentUser;
    const q = query(collection(db, 'Users'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        usersArr.push({ ...doc.data(), id: doc.id })
      });
    })

    console.log(usersArr);
    //console.log(uid)

    if (uid === undefined) {
      console.log('not ready')
    }else{
      usersArr.forEach((doc) => {
        if (doc.uid === uid) {
          setDocId(doc.id)
        }
      })
    }

    console.log(docID)

    console.log(currentUser)
    if (uid === {}) {
      console.log('Not Ready')
    } else {
      const q2 = query(collection(collectionRef,
         where('uid', '==', uid), 'Debts'));
      const unsubscribe2 = onSnapshot(q2, (querySnapshot) => {
        let debtsArr = []
        querySnapshot.forEach((doc) => {
          debtsArr.push({ ...doc.data(), id: doc.id })
        });
        setDebts(debtsArr)

      })
    }
    return () => unsubscribe()
  }, [])

  console.log(debts)

  return (
    <div className="App">
      <CustomNavbar />
      <header className="App-header">
        <p>
          's debt list
        </p>
        <ul>
          {debts.map((debt, index) => (
            <Debt key={index} debt={debt} />
          ))}
        </ul>
      </header>
    </div>
  )
}

export default DebtPageScreen