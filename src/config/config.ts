
export const API_HOST = process.env.API_URL || '192.168.0.7'
export const API_PORT = process.env.API_PORT || 3000


export const API_URL = `http://${API_HOST}:${API_PORT}`
export const API_CADASTRO_ENDPOINT = `cadastrar`;
export const API_LOGIN_ENDPOINT = `/login`;

//TODO add dotenv