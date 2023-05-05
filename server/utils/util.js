const jwt = require('jsonwebtoken');

const generateToken = (email, password) => {
    return {
        accessToken: jwt.sign(
            {password,email},
            'itcbootcamp_acces',
            {expiresIn:'10m'},
            
            ),
        refreshToken: jwt.sign({password,email},
            'itcbootcamp_refresh',
            {expiresIn:'10m'},
            
            )
    }
}

module.exports = generateToken