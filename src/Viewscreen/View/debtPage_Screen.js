import React, { useEffect, useRef, useState } from 'react'
import CustomNavbar from "../../Model/Components/navbar";
import { UserAuth } from "../../Controller/Auth";
import { db } from '../../firebase';
import * as firebase from 'firebase/app';
import { query, collection, onSnapshot, QuerySnapshot, where, getDocs } from 'firebase/firestore';
import Debt from '../../Model/debt';
import { getAuth, onAuthStateChanged } from "firebase/auth";

const DebtPageScreen = () => {


  const auth = getAuth();
  const currentUser = auth.currentUser
  const collectionRef = collection(db, 'Users');
  const [people, setPeople] = useState([]);
  const [debts, setDebts] = useState([]);
  const [current, setCurrent] = useState({});
  let docID = useRef({});
  let uid = useRef({});


  onAuthStateChanged(auth, (user) => {
    if (!user) {
      console.log("no user")
    } else {
      // User is signed out
      // ...
    }
  });

  console.log(auth)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);



  useEffect(() => {
    //if (!user) {
      //console.log("no user")
    //} else {
      const getData = async () => {
        const q = query(collection(db, 'Users'))
        const snapshot = await getDocs(q)
        const data = snapshot.docs.map((doc) => ({
          ...doc.data(), id: doc.id
        }))
        data.map(async (elem) => {
          const q2 = query(collection(db, `Users/${elem.id}/Debts`))
          const debtList = await getDocs(q2)
          const debtInfo = debtList.docs.map((doc) => ({
            ...doc.data(), id: doc.id
          }))
          console.log(debtInfo);
        })
      }
      getData()
    //}
  }, [])

  //   let usersArr = []
  //   console.log(uid)
  //   const q = query(collection(db, 'Users'))
  //   //where('uid', "==", uid.current));
  //   const unsubscribe = onSnapshot(q, (querySnapshot) => {
  //     querySnapshot.forEach((doc) => {
  //       usersArr.push({ ...doc.data(), id: doc.id })
  //     });
  //     setDebts(usersArr)
  //   })

  //   return () => unsubscribe()
  // }, [])

  // debts.forEach(function (item) {
  //   if (item.uid == uid.current) {
  //     docID.current = item.id;
  //   }
  // })

  // console.log(docID);

  // // console.log(docID)

  // // console.log(currentUser)
  // // if (uid === {}) {
  // //   console.log('Not Ready')
  // // } else {
  // //   const q2 = query(collection(collectionRef,
  // //      "YIKUfcd1GavutozVeNP4", 'Debts'));
  // //   const unsubscribe2 = onSnapshot(q2, (querySnapshot) => {
  // //     let debtsArr = []
  // //     querySnapshot.forEach((doc) => {
  // //       debtsArr.push({ ...doc.data(), id: doc.id })
  // //     });
  // //     setDebts(debtsArr)

  // //   })
  // // }

  // useEffect(() => {
  //   let debtsArr = []
  //   const q2 = query(collection(collectionRef,
  //     "YIKUfcd1GavutozVeNP4", 'Debts'));
  //   const unsubscribe = onSnapshot(q2, (querySnapshot) => {
  //     querySnapshot.forEach((doc) => {
  //       debtsArr.push({ ...doc.data(), id: doc.id })
  //     });
  //     setDebts(debtsArr)
  //   })


  //      return () => unsubscribe()
  //    }, [])



  //   console.log(debts)

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