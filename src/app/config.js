const dotenv = require("dotenv");
const path = require("path");
const fs = require("fs");
dotenv.config();
const PRIVATE_KEY = fs.readFileSync(
  path.resolve(__dirname, "../../keys/rsa_private_key.pem")
);
const PUBLIC_KEY = fs.readFileSync(
  path.resolve(__dirname, "../../keys/rsa_public_key.pem")
);
const {
  APP_HOST,
  APP_PORT,
  MYSQL_HOST,
  MYSQL_PORT,
  MYSQL_DATABASE,
  MYSQL_USER,
  MYSQL_PASSWORD,
} = process.env;
module.exports = {
  APP_HOST,
  APP_PORT,
  MYSQL_HOST,
  MYSQL_PORT,
  MYSQL_DATABASE,
  MYSQL_USER,
  MYSQL_PASSWORD,
  PRIVATE_KEY,
  PUBLIC_KEY,
};
