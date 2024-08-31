import { Model, DataTypes } from "sequelize";

import { sequelize } from "@lb";

import { Users } from "./users";
import { Files } from "./files";

export class WatchedFiles extends Model {
  public id!: number;
  public user_id!: number;
  public file_id?: number;
  public time?: number;
}

WatchedFiles.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Users,
        key: "id",
      },
      allowNull: false,
    },
    file_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Files,
        key: "id",
      },
      onDelete: "SET NULL",
    },
    time: DataTypes.BIGINT,
  },
  {
    sequelize,
    tableName: "watched_files",
    timestamps: false,
  },
);
