import React from "react";
import "./styles.css";

const UserProfile = ({ user }) => {
  return (
    <div className="container">
      <h1 className="header">User Profile</h1>

      <section className="section">
        <h2 className="subHeader">Personal Information</h2>
        <p>
          <strong>Name:</strong> {user.name}
        </p>
        <p>
          <strong>Username:</strong> {user.username}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Phone:</strong> {user.phone}
        </p>
        <p>
          <strong>Website:</strong>{" "}
          <a
            href={`http://${user.website}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {user.website}
          </a>
        </p>
      </section>

      <section className="section">
        <h2 className="subHeader">Address</h2>
        <p>
          <strong>Street:</strong> {user.address.street}
        </p>
        <p>
          <strong>Suite:</strong> {user.address.suite}
        </p>
        <p>
          <strong>City:</strong> {user.address.city}
        </p>
        <p>
          <strong>Zipcode:</strong> {user.address.zipcode}
        </p>
        <p>
          <strong>Geo:</strong> {user.address.geo.lat}, {user.address.geo.lng}
        </p>
      </section>

      <section className="section">
        <h2 className="subHeader">Company</h2>
        <p>
          <strong>Name:</strong> {user.company.name}
        </p>
        <p>
          <strong>Catch Phrase:</strong> {user.company.catchPhrase}
        </p>
        <p>
          <strong>BS:</strong> {user.company.bs}
        </p>
      </section>
    </div>
  );
};

export default UserProfile;
