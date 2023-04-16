import React from "react";
import UserName from "./Inputs/userNameInput";
import Email from "./Inputs/emailInput"
import CountryInput from "./Inputs/countryInput";
import Phone from "./Inputs/phoneInput";

export default function Client(){
  return(
    <div>
    <UserName />
    <Email />
    <CountryInput />
    <Phone />
    </div>
  )
}