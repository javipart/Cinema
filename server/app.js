const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const loginRoute = require('./routes/login-route');
const userRoute = require('./routes/user-route');
const movieRoute = require('./routes/movie-route');
const turnRoute = require('./routes/turn-route');

const app = express();

app.use(bodyParser.json());

require('./driver/mongo-driver');

const port = process.env.PORT || 3090;
app.use(cors());

app.use('/api/login', loginRoute);
app.use('/api/user', userRoute);
app.use('/api/movie', movieRoute);
app.use('/api/turn', turnRoute);

app.listen(port, () => {
  console.log(`Server on port ${port}`);
});
