import React from "react";

function Form(p) {
  return (
    <form className="form">
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      {!p.stat && <input type="password" placeholder="Confirm Password" />}
      <button type="submit">{p.stat ? "login" : "register"} </button>
    </form>
  );
}

export default Form;
