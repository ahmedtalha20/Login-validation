import React from 'react';  

export default function App(){

  const [value, setValue] = React.useState({
    password: ""
  });

  const [password, setPassword] = React.useState("");

  const [buttonClass, setButtonClass] = React.useState("btn invalid toCenter");

  let correctPass = "pass";

  function handleChange(e){    
    setValue({
      ...value,
      [e.target.name]: e.target.value
    })    
  }

  function handleBtnOver(e){    
    
    if((e.target.className).includes("invalid") && (e.target.className).includes("toCenter")){
      e.target.className = "btn invalid toRight";
    }else if((e.target.className).includes("invalid") && (e.target.className).includes("toRight")){
      e.target.className = "btn invalid toCenter";
    }

  }

  React.useEffect(() => {

    if (value.password == correctPass){
      console.log(true);
      setButtonClass("btn valid toCenter"); 
    }else{
      setButtonClass("btn invalid toCenter"); 
    }
    
    
  }, [value.password.length])

    return (
      <>
      <div className="form">
        <div>Password: <input type="text" id="password" name="password" onChange={handleChange} value={value.password} /></div>
        <button className={buttonClass} onMouseOver={handleBtnOver}>Submit</button>
      </div>
      
      </>
    )
}