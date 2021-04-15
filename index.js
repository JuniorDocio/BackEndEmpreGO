const app = require('./src/config/config')
console.log("Server Rodando.")
app.listen(process.env.PORT || 3000);