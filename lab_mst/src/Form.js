import { useState } from "react";

function Form() {
  const [inputData, setInputData] = useState({ Name: "", Email: "", Age: "" });
  const [message, setMessage] = useState("");

  function handleData(e) {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  }

  function submitData(e) {
    e.preventDefault();
    setMessage("Data saved successfully!");
    setInputData({ Name: "", Email: "", Age: "" });
  }

  return (
    <>
      <form onSubmit={submitData}>
        <label>NAME: </label>
        <input
          type="text"
          name="Name"
          value={inputData.Name}
          onChange={handleData}
        />
        <br />

        <label>EMAIL: </label>
        <input
          type="email"
          name="Email"
          value={inputData.Email}
          onChange={handleData}
        />
        <br />

        <label>AGE: </label>
        <input
          type="number"
          name="Age"
          value={inputData.Age}
          onChange={handleData}
        />
        <br />

        <button type="submit">Submit</button>
      </form>

      <div>{message}</div>

    </>
  );
}

export default Form;
