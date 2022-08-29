import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

function handle(event) {
  const {value, name} = event.target;

  setContact(
    pre => {
      if (name === "fName") {
        return{
          fName: value,
          lName: pre.lName,
          email: pre.email
        }
      } else if (name === "lName"){
          return {
            fName: pre.fName,
            lName: value,
            email: pre.email
          }
      }  else if (name === "email"){
        return {
          fName: pre.fName,
          lName: pre.lName,
          email: value
        }
    }
    }
  )}

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input onChange={handle} name="fName" placeholder="First Name"value={contact.fName} />
        <input onChange={handle} name="lName" placeholder="Last Name" value={contact.lName}/>
        <input onChange={handle} name="email" placeholder="Email" value={contact.email}/>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
