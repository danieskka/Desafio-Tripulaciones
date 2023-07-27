import React, { useEffect, useState } from "react";
import axios from "axios";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

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

  const getChartData = () => {
    return stats.map((game, index) => ({
      name: `Game ${index + 1}`,
      Score: game,
    }));
  };

  return (
    <section>
      <BarChart width={600} height={600} data={getChartData()} margin={{ top: 8, right: 50, bottom: 5, left: 20 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Score" fill="#8884d8" />
      </BarChart>
    </section>
  );
};

export default Profile;