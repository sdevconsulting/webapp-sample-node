const dotenv = require('dotenv');
const http = require('http');
const ejs = require('ejs');
const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']

class Data {
  constructor(Weekday, Greeting) {
    this.Weekday = Weekday
    this.Greeting = Greeting
  }
}

function loadConfig() {
  dotenv.config()
}

var server = http.createServer(function (req, res) {
  var now = new Date()
  var day = now.getDay()
  var data = new Data(days[day], process.env.Greeting)

  ejs.renderFile("./index.ejs", data, (err, result) => {
    if (err) {
      throw new Error(err)
    }

    res.write(result)
    res.end()
  })
})

loadConfig()

server.listen(8000)