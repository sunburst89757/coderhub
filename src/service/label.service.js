const connection = require("../app/database");
class LabelService {
  async createLabel(name) {
    const statement = `INSERT INTO label (name) VALUES (?)`;
    try {
      const [res] = await connection.execute(statement, [name]);
      return res;
    } catch (error) {
      console.log(error);
    }
  }
}
module.exports = new LabelService();
