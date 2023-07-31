import { useEffect, useState } from "react";
import { ResponsiveContainer, PieChart, Pie, Legend, Cell } from 'recharts';
import axios from "axios";
import Navegation from '../../Navegation/Navegation';


const Profile = () => {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await axios.get("/quiz");
        const data = response.data.previousGames;
        setStats(data);
        console.log(stats);
      } catch (error) {
        console.log("Error:", error);
      }
    };
    fetchGames();
  }, []);

  const colors = ['#FFA190', '#E2D05F'];

  const getChartData = () => {
    return stats.map((game, index) => ({
      name: `Game ${index + 1}: Puntuación ${game}`,
      value: game,
    }));
  };
  
  return (
    <>
    <h1>Hola, Jugador</h1>
    <h2>Estadísticas:</h2>
    <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie dataKey="value" data={getChartData()} label>
            {getChartData().map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
          </Pie>
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
      <Navegation />
    </>
  );
};

export default Profile;
