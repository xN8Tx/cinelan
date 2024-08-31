import { Sequelize } from "sequelize";
import pg from "pg";

export const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres",
  dialectModule: pg,
});

export const syncDatabase = async () => {
  try {
    if (process.env.NODE_ENV === "production") {
      await sequelize.sync();
    } else {
      await sequelize.sync({ alter: true });
    }
    console.log("All models were synchronized successfully.");
  } catch (error) {
    console.error("Unable to synchronize the models:", error);
  }
};
