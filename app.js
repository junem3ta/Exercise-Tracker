require('dotenv').config();

const express = require('express'),
connectDB = require('./config/db'),
app = express();

console.log(process.env.ETMongoURI);

connectDB();

app.use(express.static('public'))
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
});
app.use('/api/exercise', require('./routes/exercise'));

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port)
});
