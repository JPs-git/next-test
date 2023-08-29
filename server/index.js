const express = require("express")
const bodyParser = require('body-parser')
const next = require("next")
const mongoose = require('mongoose')
const Desire = require('./models/desire')

const server = express()
server.use(bodyParser.urlencoded({
  extended: true
}))
server.use(bodyParser.json())

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


    server.get('/desire', async (req, res) => {
      const findRes = await Desire.find()
      console.log(findRes);
      res.json({ code: 200001, data: findRes })
    })

    server.post('/desire', async (req, res) => {
      // const findRes = await Desire.find()
      const { body } = req
      const newDesire = new Desire()
      Object.keys(body).forEach((key) => {
        newDesire[key] = body[key]
      })
      await newDesire.save()
      

      // console.log(findRes);
      res.status(201).json({ code: 200001, data: req.body, msg: 'success' })
    })

    server.get('*', (req, res) => {
      return handle(req, res)
    })
  })

const connect = async function () {
  const DB_URL = 'mongodb://127.0.0.1:27017/test'
  await mongoose.connect(DB_URL)
  console.log('db connected successfully!\n');
}

try {
  connect()
  server.listen(port, "0.0.0.0", () => {
    console.log('============================');
    console.log(`> Server ready on http://localhost:${port}!`);
    console.log('============================');
  })
} catch (err) {
  console.error(err);
}