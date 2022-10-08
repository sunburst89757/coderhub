const connection = require("../app/database");
class MomentService {
  async createMomentByUserId(userId, content) {
    const statement = `INSERT INTO moments (userId,content) VALUES (?,?)`;
    const result = await connection.execute(statement, [userId, content]);
    console.log(result);
    return result;
  }
  async getMomentById(momentId) {
    const statement = `SELECT m.id id,m.content content,m.createAt createAt,m.updateAt updateAt,JSON_OBJECT("userId",u.userId,"username",u.username) userInfo FROM moments m LEFT JOIN users u ON m.userId = u.userId WHERE m.id = ?`;
    const result = await connection.execute(statement, [momentId]);
    return result[0];
  }
  async getMomentList(userId, pageNum, pageSize) {
    const offset = (Number(pageNum) - 1) * Number(pageSize);
    const statement = `
    SELECT 
        m.id id,m.content content,m.createAt createAt,m.updateAt updateAt,
        JSON_OBJECT("userId",u.userId,"username",u.username) userInfo 
    FROM moments m 
    LEFT JOIN users u ON m.userId = u.userId 
    LIMIT ?, ?;`;
    //  limit 后面必须接的是字符串
    try {
      const result = await connection.execute(statement, [
        offset.toString(),
        pageSize,
      ]);
      return result[0];
    } catch (error) {
      console.log(error);
    }
  }
  async deleteMoment(momentId, userId) {
    const statement = `DELETE FROM moments WHERE id=? And userId =?`;
    const res = await connection.execute(statement, [momentId, userId]);
    return res[0];
  }
  async updateMoment(momentId, content) {
    const statement = `UPDATE moments SET content = ? WHERE id = ?;`;
    const res = await connection.execute(statement, [content, momentId]);
    return res[0];
  }
}
module.exports = new MomentService();
