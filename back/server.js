const express = require('express')
const cors = require ('cors')

// const PORT = 3000

const corsOptions = {
    origin: ["https://api-games-hicham.vercel.app/", "http://localhost:5173"],
  };
const app = express()

app.use(cors(corsOptions));



require('./api/allgames')(app)
require('./api/giveaways')(app)




// app.listen(PORT, () => console.log(`Serveur en cours sur le port ${PORT}`));
