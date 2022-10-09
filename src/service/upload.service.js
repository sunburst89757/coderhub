const connection = require("../app/database");
class UploadService {
  async saveAvatar(id, fileInfo) {
    const { mimetype, filename, size } = fileInfo;
    const statement = `INSERT INTO avatar (filename,mimetype,size,userId) VALUES (?,?,?,?)`;

    try {
      const [res] = await connection.execute(statement, [
        filename,
        mimetype,
        size,
        id,
      ]);
      return res;
    } catch (error) {
      console.log(error);
    }
  }
  async getAvatarbyUserId(userId) {
    console.log(userId);

    const statement = `SELECT * FROM avatar WHERE userId = ?`;
    try {
      const [res] = await connection.execute(statement, [userId]);
      return res;
    } catch (error) {
      console.log(error);
    }
  }
  async insertAvatarIntoUsers(userId, avatarUrl) {
    console.error(avatarUrl);
    console.log(userId);

    const statement = `UPDATE  users set avatarUrl = ? WHERE userId = ?`;
    try {
      await connection.execute(statement, [avatarUrl, userId]);
    } catch (error) {
      console.log(error);
    }
  }
}
module.exports = new UploadService();
