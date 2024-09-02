import { sequelize } from "@lb";
import { FileDescription } from "./file-description";
import { FileInfo } from "./file-info";
import { Files } from "./files";
import { Posters } from "./posters";
import { Types } from "./types";
import { Users } from "./users";
import { WatchedFiles } from "./watched-files";

// Setup relation
Files.belongsTo(Types, { foreignKey: "type_id" });
Files.belongsTo(Posters, { foreignKey: "poster_id" });
Files.hasOne(Files, { as: "ParentFile", foreignKey: "file_id" });

FileDescription.belongsTo(Files, { foreignKey: "file_id" });
FileInfo.belongsTo(Files, { foreignKey: "file_id" });

WatchedFiles.belongsTo(Users, { foreignKey: "user_id" });
WatchedFiles.belongsTo(Files, { foreignKey: "file_id" });

const createTypes = async (name: string) => {
  await Types.findOrCreate({
    where: { name },
    defaults: { name },
  });
};

export const syncDatabase = async () => {
  try {
    if (process.env.NODE_ENV === "production") {
      await sequelize.sync();
    } else {
      await sequelize.sync({ alter: true });
    }

    await Users.findOrCreate({
      where: { name: "user" },
      defaults: { name: "user" },
    });

    const types = ["serial", "season", "episode", "movie", "folder", "file"];
    await Promise.all(types.map((type) => createTypes(type)));

    console.log("All models were synchronized successfully.");
  } catch (error) {
    console.error("Unable to synchronize the models:", error);
  }
};

export {
  Posters,
  Types,
  Files,
  FileDescription,
  FileInfo,
  Users,
  WatchedFiles,
};
