const connection = require("../app/database");
class AuthService {
  async checkResource(tableName, id, userId) {
    const statement = `SELECT * FROM ${tableName} WHERE id = ? AND userId = ?`;
    try {
      const [res] = await connection.execute(statement, [Number(id), userId]);
      console.log(res);

      return !!res.length;
    } catch (error) {
      console.log(error);
    }
  }
}
module.exports = new AuthService();
