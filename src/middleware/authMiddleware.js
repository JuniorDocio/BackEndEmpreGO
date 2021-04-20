const jwt = require('jsonwebtoken');

module.exports = (req,res,next) => {
    const authHeader = req.headers.authorization;

        if(!authHeader)
            return res.status(401).send({error: "Token não existe"});

        const parts = authHeader.split(' ');

        if(!parts.length === 2)
            return res.status(401).send({error: "Erro no Token"});

        const [scheme, token] = parts;

        if(!/^Bearer$/i.test(scheme))
            return res.status(401).send({error: "Token mal formatado"});

        const decode = jwt.verify(token, '123');

        req.id = decode.id;

        return next();
}