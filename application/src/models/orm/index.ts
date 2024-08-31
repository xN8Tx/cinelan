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

export {
  Posters,
  Types,
  Files,
  FileDescription,
  FileInfo,
  Users,
  WatchedFiles,
};
