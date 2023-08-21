const express = require("express")
const next = require("next")

const server = express()
const port = parseInt(process.env.NODE_ENV.PORT, 10) || 8848
const dev = process.env.NODE_ENV !== "production"
const app = next({ dev })
const handle = app.getRequestHandler();


app.
  prepare()
  .then(() => {
    server.get('/api_test', (req, res) => {
      res.json({ code: 1, data: 'ok' })
    })

    server.get('*', (req, res) => {
      return handle(req, res)
    })
  })



try {
  server.listen(port, "0.0.0.0", () => {
    console.log('============================');
    console.log(`> Server ready on http://localhost:${port}!`);
    console.log('============================');
  })
} catch (err) {
  console.error(err);
}