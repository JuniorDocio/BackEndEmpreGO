const app = require('./src/config/config');
const { SERVER_PORT } = require('./src/config/constants');

app.listen(SERVER_PORT, () => {
  console.log(`Servidor Iniciado. Porta: ${SERVER_PORT}`);
});