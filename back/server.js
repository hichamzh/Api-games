const express = require('express')
const cors = require ('cors')

const PORT = 3000

const corsOptions = {
    origin: "https://ton-frontend-url.com",
  };
const app = express()

app.use(cors(corsOptions));



require('./routes/getAllGames')(app)
require('./routes/getGiveaways')(app)




app.listen(PORT, () => console.log(`Serveur en cours sur le port ${PORT}`));
