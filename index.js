
const app = require('./app')

require('dotenv').config()

const port = process.env.PORT || PORT

app.listen(port, () => console.log(`Server runing on ${port}`))
