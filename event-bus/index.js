import express from 'express';

const app = express()

const PORT = 4005;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
