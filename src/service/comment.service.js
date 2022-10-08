const connection = require("../app/database");
class CommentService {
  async createComment(userId, momentId, content) {
    const statement = `INSERT INTO comments (userId,momentId,content) VALUES (?,?,?)`;
    try {
      const [res] = await connection.execute(statement, [
        userId,
        momentId,
        content,
      ]);
      return res;
    } catch (error) {
      console.log(error);
    }
  }
  async replyComment(userId, commentId, momentId, content) {
    const statement = `
    INSERT INTO comments (userId,commentId,content,momentId) VALUES (?,?,?,?)
    `;
    try {
      const [res] = await connection.execute(statement, [
        userId,
        commentId,
        content,
        momentId,
      ]);
      return res;
    } catch (error) {
      console.log(error);
    }
  }
  async updateComment(commentId, content) {
    const statement = `UPDATE comments SET content = ? WHERE id = ?;`;
    try {
      const [res] = await connection.execute(statement, [content, commentId]);
      return res;
    } catch (error) {
      console.log(error);
    }
  }
  async removeComment(commentId) {
    const statement = `DELETE FROM comments WHERE id=?;`;
    try {
      const [res] = await connection.execute(statement, [commentId]);
      return res;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new CommentService();
