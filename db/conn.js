const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("toughts2", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

try {
  sequelize.authenticate();
  console.log("conexão estabelecida");
} catch (err) {
  console.log(`Não foi possivel conectar: ${err}`);
}

module.exports = sequelize;
