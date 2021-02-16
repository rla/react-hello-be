const express = require('express')
const cors = require('cors')
const app = express()

const PORT = 4040;

app.use(cors())

app.get('/profile', (req, res) => {
  res.json({
    name: 'Mari',
    email: 'mari@example.com',
    photo: 'https://via.placeholder.com/150'
  });
})

app.listen(PORT, () => {
  console.log(`CORS-enabled web server listening on port ${PORT}.`);
});
