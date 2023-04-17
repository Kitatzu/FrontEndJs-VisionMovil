import React from "react";
import UserName from "./Inputs/userNameInput";
import Email from "./Inputs/emailInput"
import CountryInput from "./Inputs/countryInput";
import Phone from "./Inputs/phoneInput";
import Name from "./Inputs/firstNameInput";
import LastName from "./Inputs/lastNameInput";
import Password from "./Inputs/passwordInput";
import styles from "./Inputs/data/client.module.css"

export default function Client(){
  return(
    <div className={styles.container}>
    <UserName />
    <Name />
    <Password />
    <LastName />
    <Email />
    <CountryInput />
    <Phone />
    </div>
  )
}