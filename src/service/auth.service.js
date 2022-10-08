const connection = require("../app/database");
class AuthService {
  async checkMoment(momentId, userId) {
    const statement = `SELECT * FROM moments WHERE id = ? AND userId = ?`;
    try {
      const [res] = await connection.execute(statement, [momentId, userId]);
      return !!res.length;
    } catch (error) {
      console.log(error);
    }
  }
}
module.exports = new AuthService();
