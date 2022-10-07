const connection = require("../app/database");
class MomentService {
  async createMomentByUserId(userId, content) {
    const statement = `INSERT INTO moments (userId,content) VALUES (?,?)`;
    const result = await connection.execute(statement, [userId, content]);
    console.log(result);
    return result;
  }
  async getMomentsByUserId(userId) {
    const statement = `SELECT u.username,m.content FROM moments m LEFT JOIN users u ON m.userId = u.userId WHERE u.userId = ?`;
    const result = await connection.execute(statement, [userId]);
    return result[0];
  }
}
module.exports = new MomentService();
