const axios = require('axios');


module.exports = (app) => {
    app.get('/allgames', async (req, res) => {
        try {
            const response = await axios.get("https://www.mmobomb.com/api1/games")
            res.json(response.data)
        } catch (error) {
            res.status(500).json({ error: "Erreur lors de la récupération des jeux." });
            console.log(error);
            
        }
    })
}