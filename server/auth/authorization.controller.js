import * as jwt from 'jsonwebtoken';
import crypto from 'crypto';
const jwtSecret = 'aJWTSecret13121992for13121992jwtTokenInTheRequest13121992';
class AuthorizationController {
  static login(req, res) {
    try {
      const refreshId = req.body.userId + jwtSecret;
      const salt = crypto.randomBytes(16).toString('base64');
      const hash = crypto
        .createHmac('sha512', salt)
        .update(refreshId)
        .digest('base64');
      req.body.refreshKey = salt;
      const accessToken = jwt.sign(req.body, jwtSecret);
      const refreshToken = Buffer.from(hash).toString('base64');
      const {userId, name, email, roles, provider} = req.body;
      const responseData = {accessToken, refreshToken, userId, name, email, roles, provider};
      res.status(201).send(responseData);
    } catch (err) {
      res.status(500).send({errors: err});
    }
  }
}

export default AuthorizationController;
