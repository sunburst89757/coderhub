const connection = require("../app/database");
class UserService {
  async register({ username, password }) {
    const statement = `INSERT INTO users (username,password) VALUES (?,?)`;
    const res = await connection.execute(statement, [username, password]);
    return res[0];
  }
  async getUserByUsername(username) {
    const statement = `SELECT username FROM users WHERE username = ?`;
    const result = await connection.execute(statement, [username]);
    return result[0];
  }
}

module.exports = new UserService();
