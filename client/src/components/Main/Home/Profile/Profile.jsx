import { useEffect, useState } from "react";
import axios from "axios";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import Navegation from '../../Navegation/Navegation';

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

  const barColors = ["#8884d8", "#82ca9d", "#ffc658", "#f7c397", "#0088FE"];

  const getChartData = () => {
    return stats.map((game, index) => ({
      name: `Game ${index + 1}`,
      Score: game,
    }));
  };
  
  return (
    <>
      <section className="profile-chart-container">
        
          <BarChart className="profile-bar-chart" width={800} height={400} data={getChartData()}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis ticks={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} />
            <Tooltip />
            <Legend /> 
            <Bar dataKey="Score" fill={barColors} />
          </BarChart>
        
      </section>
      <Navegation />
    </>
  );
};

export default Profile;
