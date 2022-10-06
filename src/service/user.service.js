const connection = require("../app/database");
class UserService {
  async register({ username, password }) {
    const statement = `INSERT INTO users (username,password) VALUES (?,?)`;
    const res = await connection.execute(statement, [username, password]);
    return res;
  }
}

module.exports = new UserService();
