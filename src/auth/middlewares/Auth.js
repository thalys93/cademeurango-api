const firebase = require("./FirebaseAdmin.js");
const path = require('path');

function authMiddleware(request, response, next) {
    const headerToken = request.headers.authorization;
    if (!headerToken) {
        return response.status(401).sendFile((path.join(__dirname, '..' , '..', 'views' , 'error.html')))
    }

    if (headerToken && headerToken.split(" ")[0] !== "Bearer") {
        response.status(401).sendFile((path.join(__dirname, '..', 'views' , 'error.html')))
    }

    const token = headerToken.split(" ")[1];
    firebase
        .auth()
        .verifyIdToken(token)
        .then(() => next())
        .catch(() => {
            response.status(403).sendFile((path.join(__dirname, '..', 'views' , 'error.html')))
        });
    }


    module.exports = authMiddleware;