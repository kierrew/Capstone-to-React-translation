import React from 'react';
import { Button } from "react-bootstrap";
import styles from './HomeScreen.module.scss';

export const NavigationButton = ({ text, onClick, icon, }) => {
 return (
  <div >
  <Button onClick={onClick} variant='outline-dark' className={styles.button}>
   {icon}
   </Button>
   <h4>
    {text}
   </h4>
  </div>
 )
}
