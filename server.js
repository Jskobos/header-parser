const express = require('express')
const port = process.env.PORT || 3000
const app = express()

app.get(['/api/whoami/','/'],function(req, res) {
  res.send(createResponseJson(req))
})

app.listen(port, function() {
  console.log("Express app listening on port " + port)
})

function createResponseJson(req) {
  let response = {}
  let userInfo = req.header('user-agent')
  const regex = new RegExp(/\(.+?\)/)
  userInfo = userInfo.match(regex)[0]
  response.ipaddress = req.ip
  response.language = req.header('accept-language').substring(0,5)
  response.software = userInfo.substring(1,userInfo.length-1)

  return response
}
