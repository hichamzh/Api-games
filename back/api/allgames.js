import axios from 'axios'
import cors from 'cors'

const corsOptions = {
    origin: ["https://api-games-hicham.vercel.app/", "http://localhost:5173"],
  };

export default async function handler(req, res) {
    cors(corsOptions)(req, res, async () => {
        try {
            const response = await axios.get("https://www.mmobomb.com/api1/games")
            res.status(200).json(response.data);
            
        } catch (error) {
            res.status(500).json({ error: "Erreur lors de la récupération des jeux." });
            console.log(error);
            
        }
    
})}