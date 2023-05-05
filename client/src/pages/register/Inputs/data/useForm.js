export const handleChange=(event)=>{
    event.preventDefault();
    setVal=({
      UN:document.getElementById("userName").value,
      N:document.getElementById("name").value,
      PW:document.getElementById("password").value,
      LN:document.getElementById("lastName").value,
      E:document.getElementById("email").value,
      CI:document.getElementById("country").value,
      P:document.getElementById("phone").value
    });
  }

  export const handleChangeUN=(event)=>{
    event.preventDefault();
    setVal=({
      UN:document.getElementById("userName").value,
    })
  }
  