import React, { useState } from "react";
import "./styles.css";
import UserComponent from "./UserComponent";

export default function App() {
  const [userId, setUserId] = useState(""); // State to store the input ID
  const [submittedId, setSubmittedId] = useState(null); // State to store the submitted ID

  const handleInputChange = (event) => {
    setUserId(event.target.value); // Update the userId state with the input value
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    setSubmittedId(userId); // Update the submittedId state with the current userId
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit} className="container">
        <label className="form">
          Enter User ID:
          <input
            type="number"
            value={userId}
            onChange={handleInputChange}
            min="0"
            required
          />
        </label>
        <button type="submit">Fetch User</button>
      </form>
      {/* <UserComponent userId={submittedId} /> */}
      {/* Conditionally render UserComponent only if an ID has been submitted */}
      {submittedId && <UserComponent userId={submittedId} />}
    </div>
  );
}
