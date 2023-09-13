import { useState } from "react";
import axios from "axios";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleApi = () => {
    console.log(email, password);
    axios
      .post("https://api.qushe8r.shop/users", {
        email: email,
        password: password,
      })
      .then((result) => {
        console.log(result.data);
        alert("success done");
      })
      .catch((err) => {
        console.log(err);
        alert("server err");
      });
  };
  return (
    <div>
      <h1>SIGN UP Page</h1>
      Email : <input onChange={handleEmail} value={email} type="text" />
      <br />
      Password :{" "}
      <input onChange={handlePassword} value={password} type="text" />
      <button onClick={handleApi}>Register</button>
    </div>
  );
}

export default Register;
