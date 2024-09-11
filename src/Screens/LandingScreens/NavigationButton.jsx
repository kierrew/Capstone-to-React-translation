import { Button } from "@nextui-org/react";
import React from "react";
import styles from "./HomeScreen.module.scss";

export const NavigationButton = ({ text, onClick, icon }) => {
  return (
    <div className={styles.button}>
      <Button onClick={onClick} variant="outline-dark">
        {icon}
      </Button>
      <h4>{text}</h4>
    </div>
  );
};
