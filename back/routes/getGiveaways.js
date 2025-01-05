const axios = require('axios')

module.exports = (app) =>  {
    app.get('/giveaways', async (req, res) =>{
        try {
            const response = await axios.get('https://www.mmobomb.com/api1/giveaways')
            res.json(response.data)
        } catch (error) {
            res.status(500).json({ error: "Erreur lors de la récupération des giveaways." });
            console.log(error);
        }
    })
}