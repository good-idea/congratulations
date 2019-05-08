const port = process.env.OPENSHIFT_NODEJS_PORT || process.env.VCAP_APP_PORT || process.env.PORT || process.argv[2] || 8765
const express = require('express')
const Gun = require('gun')

const app = express()
app.use(Gun.serve).use(express.static(__dirname))

const server = app.listen(port, () => {
	console.log('listening on port: ', port)
})
Gun({ web: server })
