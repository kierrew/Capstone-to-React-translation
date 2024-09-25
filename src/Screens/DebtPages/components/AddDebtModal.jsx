import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import React, { useEffect, useRef, useState } from "react";
import { UserAuth } from "../../../Controller/Auth";
import { db } from "../../../firebase";
import { debtDropdownItems } from "../constants";

export const AddDebtModal = ({ docID, setUpdate }) => {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const [title, setTitle] = useState("");
  const [limit, setLimit] = useState("");
  const [balance, setBalance] = useState("");
  const [interest, setInterest] = useState("");
  const [category, setCategory] = useState("Select Category");
  const auth = getAuth();
  let uid = useRef({});
  const { user } = UserAuth();
  console.log("what is setUpdate?", docID);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      uid.current = currentUser.uid;
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const createDebt = async () => {
    if (validateTitle()) {
      alert("Title too short");
      return;
    }
    if (validateLimit()) {
      alert("Limit too small");
      return;
    }
    if (validateBalance(balance)) {
      alert("Balance too low");
      return;
    }
    if (validateBalance(interest)) {
      alert("Interest too low");
      return;
    }

    const docRef = await addDoc(collection(db, "Users", docID, "Debts"), {
      title: title,
      balance: balance,
      category: category,
      original: limit,
      interest: interest,
      createby: user.email,
    });

    setUpdate();
    onClose();
  };

  const validateTitle = () => {
    return title == null || title.trim().length < 2;
  };

  const validateLimit = () => {
    const bal = parseFloat(limit);
    return bal < 100;
  };

  const validateBalance = (value) => {
    const bal = parseFloat(value);
    return bal < 1.0;
  };

  const debtInputs = [
    {
      name: "Title",
      placeholder: "Debt Title",
      onValueChange: setTitle,
    },
    {
      name: "Original",
      placeholder: "Loan amnt or Credit limit",
      onValueChange: setLimit,
    },
    {
      name: "Balance",
      placeholder: "Balance",
      onValueChange: setBalance,
    },
    {
      name: "Intrest",
      placeholder: "Interest Rate",
      onValueChange: setInterest,
    },
  ];

  return (
    <div>
      <Button
        color="success"
        onPress={onOpen}
        className="bg-green-400 text-white"
      >
        Add New Debt
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          <ModalHeader>Add New Debt</ModalHeader>
          <ModalBody>
            <div>Please enter the information of your new debt.</div>
            {debtInputs.map((input) => (
              <Input
                key={input.name}
                name={input.name}
                placeholder={input.placeholder}
                onValueChange={input.onValueChange}
              />
            ))}
            <Dropdown>
              <DropdownTrigger>
                <Button>{category}</Button>
              </DropdownTrigger>
              <DropdownMenu
                aria-label="Debt Categories"
                onAction={(key) => setCategory(key)}
                items={debtDropdownItems}
              >
                {debtDropdownItems.map((item) => (
                  <DropdownItem key={item.key}>{item.label}</DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
          </ModalBody>
          <ModalFooter className="flex flex-col items-center gap-y-4">
            <Button
              className="ml-12 bg-green-400 text-white mr-12"
              onPress={createDebt}
            >
              Add Debt
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};
