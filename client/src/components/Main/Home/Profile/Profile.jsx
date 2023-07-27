import React, { useEffect, useState } from "react";
import axios from "axios";

const Profile = () => {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await axios.get("/quiz");
        const data = response.data.previousGames;
        console.log(data);

        setStats(data);
      } catch (error) {
        console.log("Error:", error);
      }
    };
    fetchGames();
  }, []);

  return (
    <section>
      {stats.map((game, index) => (
        <div key={index}>
          Previous Game {index + 1}: {game}
        </div>
      ))}
    </section>
  );
};

export default Profile;