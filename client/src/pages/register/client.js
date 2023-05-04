import React from "react";
import UserName from "./Inputs/userNameInput";
import Email from "./Inputs/emailInput"
import CountryInput from "./Inputs/countryInput";
import Phone from "./Inputs/phoneInput";
import Name from "./Inputs/firstNameInput";
import LastName from "./Inputs/lastNameInput";
import Password from "./Inputs/passwordInput";
import styles from "./Inputs/data/client.module.css"
import { useState } from "react";
import { Button } from "@mui/material";

export default function Client(){
  const [UN, setUN] = useState("");
  const [N, setN] = useState("");
  const [PW, setPW] = useState("");
  const [LN, setLN] = useState("");
  const [E, setE] = useState("");
  const [CI, setCI] = useState("");
  const [P, setP] = useState("");

  const handleClick = () => {
    const informacion = {
      input1: UN,
      input2: N,
      input3: PW,
      input4: E,
      inout5: CI,
      imput6: P
    };
    console.log(informacion);//cambiar por el thunk q funcione
  }

  return(
    <div className={styles.container}>
    <UserName onInput={(data) =>setUN(data)}/>
    <br></br>
    <Name onInput={(data) =>setN(data)}/>
    <br></br>
    <Password onInput={(data) =>setPW(data)}/>
    <br></br>
    <LastName onInput={(data) =>setLN(data)}/>
    <br></br>
    <Email onInput={(data) =>setE(data)}/>
    <br></br>
    <CountryInput onInput={(data) =>setCI(data)}/>
    <br></br>
    <Phone onInput={(data) =>setP(data)}/>
    <br></br>
    <p>{UN},{N},{PW},{LN},{E},{CI},{P}</p>
    <br></br>
    <Button onClick={handleClick}>boton</Button>
    </div>
  )
}