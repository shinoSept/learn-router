import { useState } from "react";
export default function HelloMyNamePage() {
  const [name, setName] = useState("");
  const [result, setResult] = useState("");
  const [isGreetOk, setGreetOk] = useState(false);
  const nameInsert = (event: any) => {
    setName(event.target.value);
  };
  const greetMe = () => {
    if (name === "") {
      setResult("Please insert your name!");
      setGreetOk(false);
    } else {
      setResult(`Hello ${name}!`);
      setGreetOk(true);
    }
  };
  return (
    <div className="container text-center">
      <h3>Hello My Name</h3>
      <input
        className="form-control d-inline m-1"
        placeholder="Insert your name here!"
        style={{ width: "300px" }}
        onChange={nameInsert}
        value={name}
      />
      <button className="btn btn-primary" onClick={greetMe}>
        Greet Me
      </button>
      {/* Result Text */}
      <p className={isGreetOk ? "text-success" : "text-danger"}>{result}</p>
    </div>
  );
}
