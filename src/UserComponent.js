import React, { useEffect, useState } from "react";
import UserProfile from "./UserProfile";

const UserComponent = ({ userId }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Define the function to fetch user data
    const fetchUser = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${userId}`
        );

        // Check if the response is OK (status code 200)
        if (!response.ok) {
          throw new Error("Could not fetch user");
        }

        const user_data = await response.json();
        setUser(user_data); // Store the user data in state
      } catch (error) {
        setError(error); // Handle any errors
      } finally {
        setLoading(false); // Stop the loading state
      }
    };

    fetchUser(); // Call the function to fetch data
  }, [userId]); // Empty dependency array means this useEffect runs once on mount

  // Render different content based on the state
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return <UserProfile user={user} />;
};

export default UserComponent;
