import { collection } from "firebase/firestore";
import { db } from "../firebase";

export const AddUser = async (userCredintials) => {
  const userProf = {
    email: userCredintials.email,
    password: userCredintials.password,
    uid: userCredintials.uid,
  };
  await addDocDoc(collection(db, "Users"), userProf);
};
